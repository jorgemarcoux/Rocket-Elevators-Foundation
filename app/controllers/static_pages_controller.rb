class StaticPagesController < ApplicationController

  skip_before_action :authenticate_user!, :only => [:index, :quote, :residential, :corporate, :login]

  def index
  end


  def residential
  end

  def corporate
  end
  
end
