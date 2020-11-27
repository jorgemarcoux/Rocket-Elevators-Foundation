require 'spec_helper'

class UserMessage

    def self.check
        @user = User.find(27)
        return @user_signed_in = true
    end

    def self.getName
        return @user.first_name
    end

    def self.greeting
        current_user = @user 
        @userGreeting = 'Welcome back ' + current_user.first_name
        return @userGreeting
    end

end


RSpec.describe UserMessage do
    describe ".check" do 
        it 'Checks if user is loged in' do
        @user = User.find(27)
        @user_signed_in = true
        expect(UserMessage.check).to eq(true)
        end
    end
    describe ".getName" do 
        it 'Gets user,s first name' do
        @user = User.find(27)
        @user.first_name
        expect(UserMessage.getName).to eq(@user.first_name)
        end
    end
    describe ".greeting" do 
        it 'Displays greeting with user,s name' do
        @user = User.find(27)
        @user.first_name
        current_user = @user  
        expect(UserMessage.greeting).to eq("Welcome back "+ current_user.first_name)
        end
    end

end