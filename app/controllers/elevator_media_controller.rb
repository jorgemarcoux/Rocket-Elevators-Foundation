require './lib/elevator_media/streamer'

class ElevatorMediasController < ApplicationController
    include MediaStreamer
    
    helper :all

    def getQuote
        @quote = ElevatorMedia::Streamer.new
        render html: @quote
    end

    # def getContent
    #     self.class.get('/qod.json') 
    # end

    helper_method :getQuote


end