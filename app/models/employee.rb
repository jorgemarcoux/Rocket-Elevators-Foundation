class Employee < ActiveRecord::Base

  def custom_label_method
    "#{first_name} #{last_name}"
  end

  belongs_to :user, optional: true

end
