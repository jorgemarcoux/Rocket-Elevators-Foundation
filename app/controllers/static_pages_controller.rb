class StaticPagesController < ApplicationController

  skip_before_action :authenticate_user!, :only => [:index, :quote, :residential, :corporate, :login]

  def index
  end

  def quote
    @quotes = Quote.new
    
  end


  def create
    @quotes = Quote.new(quotes_params)
      if @quotes.save
        redirect_to root_path
      else 
        render 'new'
      end
  end


  def quotes_params
    params.require(:quote).permit(:number_apartments, :number_basements, :number_floors, :number_elevator_shaft, :number_parking, :maximum_occupant, :hours_activity, :gamme, :total_price, :price_unit, :number_elevator, :install_fee)
   end


  def residential
  end

  def corporate
  end
  
end
