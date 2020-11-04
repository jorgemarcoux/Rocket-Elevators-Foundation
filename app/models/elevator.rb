require 'twilio-ruby'
class Elevator < ApplicationRecord
  belongs_to :column
  before_update :messageSms
end

def messageSms
  if self.elevator_status_changed? 
    if self.elevator_status == "Intervention"
      puts "-------allo"
      message = "yo big"
  
      account_sid = ENV["twilio_sid"]
      auth_token = ENV["twilio_token"]
      client = Twilio::REST::Client.new(account_sid, auth_token)
  
      from = '+12058982214' # Your Twilio number
      to = '+14184488182' # Your mobile phone number
  
      client.messages.create(
      from: from,
      to: to,
      body: message
      )
    end
    puts  "allo-----------"
  end
end

