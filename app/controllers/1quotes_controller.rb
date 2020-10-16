class QuotesController < ApplicationController

  def index
    @quotes = Quote.where(:user_id => current_user.id)
  end
end