require 'elevator_media'
include ElevatorMedia

describe ElevatorMedia do
    describe "#getContent" do
        context 'Get content to display in elevators' do
          it 'returns content' do
            expect(Streamer.getContent).to eq("<p>quote of the day</p>")
          end
        end
    end
end