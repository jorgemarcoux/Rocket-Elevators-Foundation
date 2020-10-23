RailsAdmin.config do |config|
  config.authorize_with :cancancan

  config.model 'User' do
    object_label_method do
    :custom_label_method
    end
    include_fields :first_name, :last_name, :title, :is_admin, :is_employee, :is_user, :email, :created_at, :quotes
  end

  config.model 'Employee' do
    object_label_method do
    :custom_label_method
    end
  end

  config.model 'Address' do
    object_label_method do
    :custom_label_method
    end
  end

  config.model 'Customer' do
    object_label_method do
    :custom_label_method
    end
  end

  ### Popular gems integration

  ## == Devise ==
  config.authenticate_with do
    warden.authenticate! scope: :user
  end
  config.current_user_method(&:current_user)

  config.main_app_name = ["Rocket Elevators", "BackOffice"]

  ## == CancanCan ==
  # config.authorize_with :cancancan

  ## == Pundit ==
  # config.authorize_with :pundit

  ## == PaperTrail ==
  # config.audit_with :paper_trail, 'User', 'PaperTrail::Version' # PaperTrail >= 3.0.0

  ### More at https://github.com/sferik/rails_admin/wiki/Base-configuration

  ## == Gravatar integration ==
  ## To disable Gravatar integration in Navigation Bar set to false
  # config.show_gravatar = true

  config.actions do
    dashboard                     # mandatory
    index                         # mandatory
    new
    export
    bulk_delete
    show
    edit
    delete

    ## With an audit adapter, you can add:
    # history_index
    # history_show
  end
end
