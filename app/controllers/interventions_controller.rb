class InterventionsController < ApplicationController
    after_create :create_intervention_ticket #Create ticket after form submition

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
    def create_intervention_ticket
       client = ZendeskAPI::Client.new do |set|
        set.url = ENV["ZENDESK_URL"]
        set.username = ENV["ZENDESK_USERNAME"]
        set.token = ENV["ZENDESK_TOKEN"]
    end

    ZendeskAPI::Ticket.create! (client,
       subject: "New intervention request for client ID: #{self.customer_id}",
       :comment => {
           :value => "A new intervention was requested for client with id: #{self.customer_id}
            by employee ID #{self.author}.
            <br/>
            Necessary information for the intervention:
            -Building ID = #{self.building_id}
            -Battery ID = #{self.battery_id}
            -Column ID = #{self.column_id}
            -Elevator ID = #{self.elevator_id}
            -Employee ID = #{self.employee_id}
            -Report = #{self.report}"
       },

       :priority => "normal"
       :type => "problem"
    
    )
    end

       
    

    

end