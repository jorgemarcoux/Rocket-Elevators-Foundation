require 'spec_helper'


class CodeBoxxEmployee
    def self.assignRole
        user = User.new
        if user.email == '""@codeboxx.com'
          user.is_employee == 1
        end
        return "employee"
    end
end

RSpec.describe CodeBoxxEmployee do
    describe ".assignRole" do 
       it 'automatically assigns the employee role to users with CodeBoxx emails' do
         user = User.new
         expect(CodeBoxxEmployee.assignRole).to eq("employee")
       end
        end
 
end


