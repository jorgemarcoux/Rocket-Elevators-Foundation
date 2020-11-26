require 'rubygems'
require 'httparty'
require 'rest-client'

module ElevatorMedia
    class Streamer
       include HTTParty
       base_uri "quotes.rest/"

        #New quote API call to retrive a daily quote 
        def getContent
          thequote = RestClient.get('https://uselessfacts.jsph.pl/random.json?language=en')
          parsedQuote = JSON.parse(thequote)
          return parsedQuote['text']
        end
       
    end 
end 


 