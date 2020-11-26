require 'rubygems'
require 'httparty'

module ElevatorMedia
    class Streamer
       include HTTParty
       base_uri "quotes.rest/"

        #New quote API call to retrive a daily quote 
        def getContent
          self.class.get('/qod.json').data.contents.quotes[0].quote
        end
       
    end 
end 




