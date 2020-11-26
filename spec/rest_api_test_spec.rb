require 'elevator_media/rest_api_test'
require 'spec_helper'
require "rails_helper"


RSpec.describe RestApiTest do
    describe ".getStatus" do
        context 'Get status of API request' do
          it 'returns a 200 status' do
            uri = URI('https://consolidation-jorge-rest.azurewebsites.net/api/interventions/pending')
            response = Net::HTTP.get(uri)
            expect(response).to eq("200")
          end
        end
    end
end






