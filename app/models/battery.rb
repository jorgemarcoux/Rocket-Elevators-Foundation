class Battery < ApplicationRecord
  has_one :building
  has_many :columns
end
