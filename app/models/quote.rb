class Quote < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :customer, optional: true
end