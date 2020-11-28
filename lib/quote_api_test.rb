require 'rubygems'
require'httparty'

class QuoteApi
    include HTTParty
    base_uri "quotes.rest/"

    def daily_quote
      self.class.get('/qod.json')
    end

end

quote = QuoteApi.new
puts quote.daily_quote