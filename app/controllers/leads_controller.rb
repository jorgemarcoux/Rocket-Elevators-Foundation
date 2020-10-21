class LeadsController < ApplicationController
    before_action :authenticate_user!

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
                format.html { redirect_to root, notice: 'Your lead as been declined !' }
            end
        end
    end

    def edit
        @lead = Lead.edit
    end

    def show
        @lead = Lead.show
    end

    def new
        @lead = Lead.new
    end

    private
        def set_quote
            @lead = Lead.find(params[:id])
        end

        def lead_params
            params.require(:lead).permit(:full_name, :email, :phone, :business_name, :project_name, :department, :project_description, :message, :file_attachment, :user_id)
        end
end
