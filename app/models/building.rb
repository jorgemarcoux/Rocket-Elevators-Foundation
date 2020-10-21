class Building < ApplicationRecord
  belongs_to :customer
  has_one :address, :dependent => :delete
  has_one :building_detail, :dependent => :delete
  has_many :batteries, :dependent => :delete_all
end
