class StaticPagesController < ApplicationController
  require './lib/elevator_media/streamer'
  def index; end

  def residential; end

  def corporate; end

  def interventions
    
  end

  def elevator_media
    @quote = ElevatorMedia::Streamer.new
    @content = @quote.getContent
  end
  
end
