class Employee < ActiveRecord::Base

  def custom_label_method
    "#{first_name} #{last_name}"
  end

end
