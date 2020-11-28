require 'spec_helper'

describe 'External quote request' do
  it 'looks for a daily quote on quote API' do
    uri = URI('http://quotes.rest/qod.json')

    response = Net::HTTP.get(uri)

    expect(response).to eq("<p>Quote of the day</p>")
  end
end