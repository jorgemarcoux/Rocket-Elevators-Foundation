require 'rubygems'
require 'httparty'

module ElevatorMedia


    class Streamer
       include HTTParty
       base_uri "quotes.rest/"

        #New quote API call to retrive a daily quote
        def callContent
          self.class.get('/qod.json') 
        end

        def self.getContent
          @quote = ElevatorMedia::Streamer.new
          'test string'
        end

       
    end #End class
    
end #End model


#@quote = ElevatorMedia::Streamer.new
#puts @quote::callContent

