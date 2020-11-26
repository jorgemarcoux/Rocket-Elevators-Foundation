require 'leads_controller.rb'


describe LeadsController do
    describe "#lead_params" do
        context 'Get daily quote to display in elevators' do
          it 'returns an API response with a quote of the day' do