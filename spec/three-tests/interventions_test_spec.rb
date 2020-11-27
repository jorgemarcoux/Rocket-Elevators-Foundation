require 'spec_helper'

class InterventionsChecker

    def self.checkAmount
        # return 5
        count = 0;
        interventions = Intervention.all

        employee = Employee.joins(:interventions).group('employees.id').having('count(employee_id) > 5')

        listofemployees = employee.as_json

        for employeeinlist in listofemployees
            count += 1
        end

        return count

    end

    def self.preventInterventions
        intervention = Intervention.all
        
    end
end




RSpec.describe InterventionsChecker do
    describe ".checkAmount" do 
        it 'Returns employee with the most open interventions' do
        expect(InterventionsChecker.checkAmount).to eq(5)
        end
    end
    describe ".preventInterventions" do 
        it 'Prevents an employee with 5+ interventions to take more' do
        expect(InterventionsChecker.preventInterventions).to eq("Sorry, this employee has too many open interventions")
        end
    end
end