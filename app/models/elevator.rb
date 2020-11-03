require 'slack-notifier'

class Elevator < ApplicationRecord
  belongs_to :column

  before_update :slack_notifier_messsage
end

def slack_notifier_messsage
   if self.elevator_status_changed? 
    notifier = Slack::Notifier.new Rails.application.credentials.slack[:token]
    notifier.ping "The Elevator #{self.id} with Serial Number #{self.serial_number} changed status from #{self.elevator_status.was} to #{self.elevator_status}"
   end 
end