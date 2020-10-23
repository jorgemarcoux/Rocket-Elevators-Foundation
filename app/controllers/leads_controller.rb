class LeadsController < ApplicationController
    def user_leads
        @leads = Lead.where(:user_id => current_user.id)
    end

    def create
        @lead = Lead.new(lead_params)
        @lead.user_id = current_user.id
        @lead.save
        
        respond_to do |format|
            if @lead.save
                format.html { redirect_to my_leads_path, notice: 'Your lead as been successfully register !' }
            else
                format.html { render :new }
            end
        end
    end

    def edit
        @lead = Lead.edit
    end

    def new
        @lead = Lead.new
    end

    private
        def lead_params
            params.require(:lead).permit(:attachment, :full_name, :email, :phone, :business_name, :project_name, :department, :project_description, :message, :user_id)
        end
end
