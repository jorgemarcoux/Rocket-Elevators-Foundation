class Customer < ApplicationRecord
  has_many :buildings
  has_one :address
  has_many :quotes
  belongs_to :user, optional: true
end