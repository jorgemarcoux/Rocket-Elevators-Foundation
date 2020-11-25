require 'elevator_media'
require 'spec_helper'
include ElevatorMedia

describe ElevatorMedia do
    describe "#getContent" do
        context 'Get daily quote to display in elevators' do
          it 'returns an API response with a quote of the day' do
            uri = URI('http://quotes.rest/qod.json')
            response = Net::HTTP.get(uri)
            expect(response).to be_an_instance_of("<p>Quote of the day</p>")
          end
        end
    end
end