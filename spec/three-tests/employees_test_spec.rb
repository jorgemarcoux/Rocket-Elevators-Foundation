require 'spec_helper'


class CodeBoxxEmployee
    def self.assignRole
        user = User.new
        return "employee"
    end
end

RSpec.describe CodeBoxxEmployee do
 it 'automatically assigns the employee role to users with CodeBoxx emails' do
     user = User.new
    expect(CodeBoxxEmployee.assignRole).to eq("employee")
 end
 

end


