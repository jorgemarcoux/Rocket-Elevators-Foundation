class CreateCustomers < ActiveRecord::Migration[5.2]
  def change
    create_table :customers do |t|

      t.integer :user_id
      t.integer :customers_creation_date
      t.string :company_name
      t.string :company_headquarters_address
      t.string :full_name_company_contact
      t.string :company_contact_phone
      t.string :integer
      t.string :email_company_contact
      t.string :company_description
      t.string :full_name_technical_autorithy_phone_service
      t.string :technical_manager_email_service
      
      t.timestamps
    end
  end
end
