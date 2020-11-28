class LeadsController < ApplicationController
 #include ZendeskHelper
  require 'zendesk_api'
  

  def user_leads
    @leads = Lead.where(user_id: current_user.id)
  end

  def create
    @lead = Lead.new(lead_params)
    @lead.user_id = current_user.id if user_signed_in?
    if NewGoogleRecaptcha.human?(
         params[:new_google_recaptcha_token],
         'lead',
         NewGoogleRecaptcha.minimum_score,
         @lead
       ) && @lead.save
      @lead.save
      respond_to do |format|
        if @lead.save && user_signed_in?
          format.html do
            redirect_to my_leads_path,
                        notice:
                          'Your contact request has been sent successfully.'
          end
          create_lead_ticket

        elsif @lead.save && !user_signed_in?
          format.html do
            redirect_to root_path,
                        notice:
                          'Your contact request has been sent successfully.'
          end
          
        else
          render :new
        end
      end
    else
      respond_to do |format|
        format.html do
          redirect_to root_path, notice: 'You are a robot beep bop boop.'
        end
      end
    end
  end

  def new
    @lead = Lead.new
  end

  private

  def lead_params
    params.require(:lead).permit(
      :attachment,
      :full_name,
      :email,
      :phone,
      :business_name,
      :project_name,
      :department,
      :project_description,
      :message,
      :user_id
    )
  end

  #Creating a new Zenddesk question ticket
  def create_lead_ticket
    client = ZendeskAPI::Client.new do |config|
    config.url = ENV["ZENDESK_URL"]
    config.username = ENV["ZENDESK_USERNAME"]
    config.token = ENV["ZENDESK_TOKEN"]
    end

    ZendeskAPI::Ticket.create!(
     client, :subject => "#{params.require(:lead).require(:full_name)} from #{params.require(:lead).require(:business_name)}", 
     :comment => { :value => "The contact #{params.require(:lead).require(:full_name)} from #{params.require(:lead).require(:business_name)} 
     can be reached at #{params.require(:lead).require(:email)} 
     and at phone number #{params.require(:lead).require(:phone)}. #{params.require(:lead).require(:department)} has a 
     project named #{params.require(:lead).require(:project_name)} which would require contribution from Rocket Elevators. 
     
     Project description: #{params.require(:lead).require(:project_description)}
     Attached message: #{params.require(:lead).require(:message)}"
     
    },
     
 
     :priority => "normal",
     :type => "question",
     )
 end

 #Week 10 - TDD
 def self.avoid_employee
  "DON'T"
 end






end
