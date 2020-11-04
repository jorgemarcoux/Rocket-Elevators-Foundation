class Quote < ApplicationRecord
  belongs_to :user, optional: true

  #def save_to_dwh
  #  FactQuote.create!({quote_id: self.id})
  #end
end
