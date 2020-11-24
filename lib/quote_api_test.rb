require 'rubygems'
require'httparty'

class QuoteApi
    include HTTParty
    base_uri "quotes.rest/"

    def posts
      self.class.get('/qod.json')
    end

end

quote = QuoteApi.new
puts quote.posts