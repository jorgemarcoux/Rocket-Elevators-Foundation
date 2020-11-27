require 'spec_helper'

class UserMessage

    def self.greeting
        user = User.find(27)
        return user.first_name
    end
end


RSpec.describe UserMessage do
    describe ".greeting" do 
        it 'Displays welcome message when user is loged in' do
        user = User.find(27)
        user.first_name

        expect(UserMessage.greeting).to eq('Thomas')
        end
    end
end