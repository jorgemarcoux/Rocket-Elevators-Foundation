require 'zendesk_api'
class InterventionsController < ApplicationController
   # after_action :create_intervention_ticket #Create ticket after form submition

    def new
        @intervention = Intervention.new
    end

    def create
        @intervention = Intervention.new(inter_params)
        @intervention.save!
    end

    def inter_params
        params.permit(
            :author,
            :customer_id,
            :building_id,
            :battery_id,
            :column_id,
            :elevator_id,
            :employee_id,
            :report,
        )
    end

    #Creating a new Zenddesk interveniton ticket
    # def create_intervention_ticket
    #    client = ZendeskAPI::Client.new do |config|
    #     config.url = ENV["ZENDESK_URL"]

    #     config.username = ENV["ZENDESK_USERNAME"]
    #     config.token = ENV["ZENDESK_TOKEN"]
    # end

    # ZendeskAPI::Ticket.create!(
    #     client, :subject => "New intervention request for client ID: #{params[:customer_id]}}", 
    #     :comment => { :value => "A new intervention was requested for client with id: #{params[:customer_id]}
    #     Requester ID: #{params[:author]}.
        
    #     Necessary information for the intervention:
    #     -Building ID = #{params[:building_id]}
    #     -Battery ID = #{params[:battery_id]}
    #     -Column ID = #{params[:column_id]}
    #     -Elevator ID = #{params[:elevator_id]}
    #     -Employee ID = #{params[:employee_id]}
    #     -Report = #{params[:report]}" }, 
    #     :priority => "normal",
    #     :type => "problem"
    #     )
    

    #end
    

    

end