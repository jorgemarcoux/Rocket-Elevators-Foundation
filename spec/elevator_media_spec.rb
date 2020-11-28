require 'elevator_media/streamer'
require 'spec_helper'
include ElevatorMedia

describe ElevatorMedia::Streamer do
    describe "#getContent" do
        context 'Get usless fact to display in elevators' do
          it 'returns an API response with a usless fact' do
            uri = URI('https://uselessfacts.jsph.pl/random.json?language=en')
            response = Net::HTTP.get(uri)
            expect(response).to eq("<p>Usless fact</p>")
          end
        end
    end
end