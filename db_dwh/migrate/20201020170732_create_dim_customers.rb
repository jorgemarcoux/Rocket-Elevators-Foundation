class CreateDimCustomers < ActiveRecord::Migration[5.2]
  def change
    create_table :dim_customers do |t|
      
      t.string :company_name
      t.string :full_name_company
      t.string :email_company
      t.integer :number_elevators
      t.string :customer_city

      t.timestamps
    end
  end
end
