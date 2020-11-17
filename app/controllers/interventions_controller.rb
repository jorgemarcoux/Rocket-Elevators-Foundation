class InterventionsController < ApplicationController
   
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

       
    

    

end