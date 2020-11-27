class InterventionsController < ApplicationController
   require 'zendesk_api'
   respond_to :js, :json, :html
   #after_action :create_intervention_ticket

    def new
        @intervention = Intervention.new
    end

    def create
        author = params['author']
        @intervention = Intervention.new(inter_params)
        @intervention.author = author
        @intervention.save!
        create_intervention_ticket
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
    def create_intervention_ticket
       client = ZendeskAPI::Client.new do |config|
        config.url = ENV["ZENDESK_URL"]

        config.username = ENV["ZENDESK_USERNAME"]
        config.token = ENV["ZENDESK_TOKEN"]
       end

     ZendeskAPI::Ticket.create!(
        client, :subject => "New intervention request for client ID: #{params[:customer_id]}}", 
        :comment => { :value => "A new intervention was requested for client with id: #{params[:customer_id]}
        Requester ID: #{params[:author]}.
        
        Necessary information for the intervention:
        -Building ID = #{params[:building_id]}
        -Battery ID = #{params[:battery_id]}
        -Column ID = #{params[:column_id]}
        -Elevator ID = #{params[:elevator_id]}
        -Employee ID = #{params[:employee_id]}
        -Report = #{params[:report]}" }, 
        :priority => "normal",
        :type => "problem"
        )
    end

    

    #Controllers for AJAX request
    def get_build_request
      customer_id = params[:customer_id]
      buildings = Building.where(customer_id: customer_id)
      render json: buildings
    end

    def get_batt_request
        building_id = params[:building_id]
        batteries = Battery.where(building_id: building_id)
        render json: batteries
    end

    def get_col_request
        battery_id = params[:battery_id]
        columns = Column.where(battery_id: battery_id)
        render json: columns
    end

    def get_elev_request
        column_id = params[:column_id]
        elevators = Elevator.where(column_id: column_id)
        render json: elevators
    end

    #Week 10 - Too many interventions
    def get_pending_interventions
        itnerventionsPending = Intervention.where(status: "Pending")
        render json: itnerventionsPending

    end
    
    



    
   
    

    

end