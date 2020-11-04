require 'rubygems'
require 'excon'
require 'json'

module ZendeskHelper
  def create_zd_ticket(data_source, type)
    @ticket_subject = type == 'question' ? 'Contact Form Request' : 'New Quote'
    @ticket_priority = type == 'question' ? 'normal' : 'high'

    @html_array = []
    data_source.attributes.transform_values do |value|
      value.nil? ? 'N/A' : value
    end.each_pair do |k, v|
      @html_array.push(
        "<tr><th style='text-align: left; padding: 5px;'><h3>#{
          k.to_s.humanize
        }</h3></th> <tr><td style='padding: 5px;'>#{v.to_s}</td></tr>"
      )
    end

    @formatted_string = '<table>' + @html_array.join('') + '</table>'

    @request_body = {
      "ticket": {
        "subject": "#{@ticket_subject}",
        "type": "#{type}",
        "priority": "#{@ticket_priority}",
        "comment": { "html_body": "#{@formatted_string}" },
        "requester": {
          "name": "#{data_source.full_name}", "email": "#{data_source.email}"
        },
        "custom_fields": [
          { "id": 360_054_575_513, "value": "#{data_source.phone}" }
        ]
      }
    }

    begin
      connection =
        Excon.new(ENV['ZD_URL'], debug_request: true, debug_response: true)
      connection.request(
        # interval is in seconds, this will block the client so leaving the limit and interval low
        method: 'POST',
        idempotent: true,
        expects: [200, 201],
        retry_limit: 2,
        retry_interval: 0.5,
        body: JSON.generate(@request_body),
        headers: {
          'Content-Type' => 'application/json',
          'Authorization' => "Basic #{ENV['ZD_AUTH']}"
        },
        instrumentor: ActiveSupport::Notifications
      ) # ActiveSupport::Notifications is for logging of requests and responses
    rescue Excon::Error => e
      puts "
      Warning: #{@ticket_subject} id # #{
             data_source.id
           } could not be sent to Zendesk. Please notify an administrator.
           Error: #{e}
           "
    end
  end
end
