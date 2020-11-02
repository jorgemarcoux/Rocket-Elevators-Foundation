require 'rubygems'
require 'excon'
require 'json'

module ZendeskHelper
    def create_zd_ticket(model)

      @formatted_string = model.attributes.transform_values do |value|
        value.nil? ? 'N/A' : value
      end .to_a.join('
      ')

      @request_body = {request: {requester: {name: "Anonymous customer"}, subject: "Help!", comment: {body: "#{@formatted_string}" }}}

      Excon.post('https://rocket-elevators.zendesk.com/api/v2/requests.json',
        :body => JSON.generate(@request_body),
        :headers => { "Content-Type" => "application/json" })
    end
end
