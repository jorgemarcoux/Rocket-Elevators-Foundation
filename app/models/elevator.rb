require 'twilio-ruby'
class Elevator < ApplicationRecord
  belongs_to :column


  account_sid = ENV['twilio_sid']
  auth_token = ENV['twilio_token']

# account_sid = 'Rails.application.secrets.twilio_sid'
# auth_token = 'Rails.application.secrets.twilio_token'
client = Twilio::REST::Client.new(account_sid, auth_token)

from = '+12058982214' # Your Twilio number
to = '+14184488182' # Your mobile phone number

client.messages.create(
from: from,
to: to,
body: "Hey friend!"
)
end

