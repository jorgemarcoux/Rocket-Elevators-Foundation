class QuotesController < ApplicationController

  def show
    @quotes = @current_user.quotes
  end
end