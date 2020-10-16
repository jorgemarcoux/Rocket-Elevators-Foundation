class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  # protect_from_forgery prepend: true
  before_action :authenticate_user!
  # protect_from_forgery prepend: true, with: :exception
  # skip_before_filter :verify_authenticity_token, :only => :create
end
