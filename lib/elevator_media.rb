module ElevatorMedia
require 'rubygems'
require'httparty'

    class Streamer
        include HTTParty
        base_uri "quotes.rest/"

        #New quote API call to retrive a daily quote
        def callContent
          self.class.get('/qod.json') 
        end

        def getContent
          #@quote = ElevatorMedia::Streamer.new
          #render html: @quote
        end

       
    end #End class
    
end #End model


#@quote = ElevatorMedia::Streamer.new
#puts @quote::callContent

