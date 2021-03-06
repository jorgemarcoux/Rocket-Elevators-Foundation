require 'spec_helper'

class InterventionsChecker

    def self.checkPending
        @pendingIntervention = Intervention.where(status: "Pending")
        return @pendingIntervention.count
    end

    def self.preventInterventions
        return if @pendingIntervention.count > 3
         "Too many pending interventions! You should wait before creating a new one"
    end
end




RSpec.describe InterventionsChecker do
    describe ".checkPending" do 
        it 'Checks amount of pending interventions' do
        testPending = Intervention.where(status: "Pending")
        expect(InterventionsChecker.checkPending).to eq(testPending.count)
        end
    end
    describe ".preventInterventions" do 
        it 'Suggests to wait before creating new intervention if pending interventions > 3' do
        expect(InterventionsChecker.preventInterventions).to eq("Too many pending interventions! You should wait before creating a new one")
        end
    end
end