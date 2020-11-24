module ElevatorMedia
require 'rubygems'
require'httparty'

    class Streamer
        include HTTParty
        base_uri "quotes.rest/"

        def getContent
            self.class.get('/qod.json') 
        end


    end #End class

end #End model

#New quote API call to retrive a daily quote
quote = ElevatorMedia::Streamer.new
puts quote::getContent