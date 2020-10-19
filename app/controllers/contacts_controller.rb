class ContactsController < ApplicationController
    before_action :authenticate_user!

    def user_leads
        @contacts = Contact.where(:user_id => current_user.id)
    end

    def create
        @contact = Contact.new(contact_params)
        @contact.user_id = current_user.id
        @contact.save
        
        respond_to do |format|
            if @contact.save
                format.html { redirect_to my_leads_path, notice: 'Your lead as been successfully register !' }
            else
                format.html { redirect_to root, notice: 'Your lead as been declined !' }
            end
        end
    end

    def edit
        @contact = Contact.edit
    end

    def show
        @contact = Contact.show
    end

    def new
        @contact = Contact.new
    end

    private
        def set_quote
            @contact = Contact.find(params[:id])
        end

        def contact_params
            params.require(:contact).permit(:full_name, :email, :phone, :business_name, :project_name, :department, :project_description, :message, :file_attachment, :user_id)
        end
end
