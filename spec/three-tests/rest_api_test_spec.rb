require '3 tests/rest_api_test'
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
    context 'Check type of response' do
        it 'returns a JSON response' do
            uri = URI('https://consolidation-jorge-rest.azurewebsites.net/api/interventions/pending')
            response = Net::HTTP.get(uri)
            json = JSON.parse(response)
        end
    end
end







