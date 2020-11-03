class Address < ApplicationRecord
  belongs_to :building, optional: true
  belongs_to :customer, optional: true

  def custom_label_method
    "#{number_and_street}"
  end

  def address
    [number_and_street, city, state, country].compact.join(', ')
  end
end
