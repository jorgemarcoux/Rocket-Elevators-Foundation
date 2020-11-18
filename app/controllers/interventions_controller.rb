class InterventionsController < ApplicationController
    respond_to :js, :json, :html
    def new
        @intervention = Intervention.new
    end

    def create
        author = params['author']

        @intervention = Intervention.new(inter_params)
        @intervention.author = author
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



    
   
    

    

end