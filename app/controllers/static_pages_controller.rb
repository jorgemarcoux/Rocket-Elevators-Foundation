class StaticPagesController < ApplicationController
  include WatsonHelper

  def index
    greeting_message
  end

  def residential; end

  def corporate; end
end
