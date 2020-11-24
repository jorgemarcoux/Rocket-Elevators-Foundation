require 'rubygems'
require'httparty'

class QuoteApi
    include HTTParty
    base_uri "edutechional-resty.herokuapp.com/"

    def posts
      self.class.get('/posts.json')
    end

end

quote = QuoteApi.new
puts quote.posts