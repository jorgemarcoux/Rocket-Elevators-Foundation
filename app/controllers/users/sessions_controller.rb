# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  include WatsonHelper

  # GET /resource/sign_in
  def new
    super
    self.resource = resource_class.new(sign_in_params)
    clean_up_passwords(resource)
    yield resource if block_given?
  end

  # POST /resource/sign_in
  def create
    super
    greeting_message
    self.resource = warden.authenticate!(auth_options)
    set_flash_message!(:notice, :signed_in)
    sign_in(resource_name, resource)
    yield resource if block_given?
  end

  # DELETE /resource/sign_out
  def destroy
    super
    signed_out =
      (Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name))
    set_flash_message! :notice, :signed_out if signed_out
    yield if block_given?
  end
end
