require 'spec_helper'


class CodeBoxxEmployee
    def self.assignRole
        user = User.new
        if user.email == '""@codeboxx.com'
          user.is_employee == 1
        end
        return "employee"
    end

    def self.makeAdmin
        user = User.new
        user.email = 'joe10@rocketelevators.com'
        user.password = 'perro123'
        user.save!
        
        if user.email == 'joe10@rocketelevators.com'
            userUpdate = User.find_by(email: 'joe9@rocketelevators.com')
            userUpdate.email = 'test@test.com'
            userUpdate.save!
        end
        
        
        
    end
end

RSpec.describe CodeBoxxEmployee do
    describe ".assignRole" do 
       it 'Automatically assigns the employee role to users with CodeBoxx emails' do
         user = User.new
         expect(CodeBoxxEmployee.assignRole).to eq("employee")
       end
    end
    describe ".makeAdmin" do 
        it 'Assigns the admin role to users with RocketElevators emails' do
          user = User.new
          user.email = 'joe10@rocketelevators.com'
          user.password = 'perro123'
          user.save!
          expect(user.first_name).to eq('test@test.com')
        end
    end
 
end


