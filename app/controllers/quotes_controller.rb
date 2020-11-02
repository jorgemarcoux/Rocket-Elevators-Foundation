require 'rubygems'
require 'excon'

class QuotesController < ApplicationController
  include ZendeskHelper

  # GET /quotes
  # GET /quotes.json
  def user_quotes
    @quotes = Quote.where(:user_id => current_user.id)
  end

  # GET /quotes/1
  # GET /quotes/1.json
  def show
  end

  # GET /quotes/new
  def new
    @quote = Quote.new
  end

  # POST /quotes
  # POST /quotes.json
  def create
    @quote = Quote.new(quote_params)
    @quote.user_id = current_user ? (current_user.id) : (nil)
    @quote.save
    respond_to do |format|
      if @quote.save && user_signed_in?
        format.html { redirect_to my_quotes_path, notice: 'Quote created successfully!' }
        create_zd_ticket(@quote)

      elsif @quote.save && !user_signed_in?
          format.html { redirect_to root_path, notice: 'Quote created successfully!' }
          create_zd_ticket(@quote)
      else
          format.html { render :new }
      end
    end
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_quote
      @quote = Quote.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def quote_params
      params.require(:quote).permit(:apartments, :floors, :basements, :businesses, :elevator_shafts, :parking_spaces, :occupants, :opening_hours, :product_line, :install_fee, :total_price, :unit_price, :elevator_number, :building_type, :user_id)
    end

end
