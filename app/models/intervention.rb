class Intervention < ApplicationRecord
    after_create :create_intervention_ticket #Create ticket after form submition
    belongs_to :employee,
end