class ApplicationController < ActionController::Base
  protect_from_forgery prepend: true
  def after_sign_in_path_for(resource)
    if current_user.is_admin?
      rails_admin_path
    else
      new_quote_path
    end
  end  
end