class Column < ApplicationRecord
  has_one :battery
  has_many :elevators
end