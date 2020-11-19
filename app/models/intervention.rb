class Intervention < ApplicationRecord
    belongs_to :employee, optional: true
    after_create :create_intervention_ticket
    
     

end