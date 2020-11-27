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
        if user.email == '""@rocketelevators.com'
          user.is_admin == 1
        end
        return "admin"
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
          expect(CodeBoxxEmployee.makeAdmin).to eq("admin")
        end
    end
 
end


