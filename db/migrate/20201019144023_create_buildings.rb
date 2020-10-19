class CreateBuildings < ActiveRecord::Migration[5.2]
  def change
    create_table :buildings do |t|
      
      t.integer :customer_id
      t.string :Address 
      t.string :full_name_administrator
      t.string :email_administrator_
      t.integer :phone_number_administrator
      t.string :full_name_technical_contact
      t.string :technical_contact_email
      t.integer :technical_contact_phone

      t.timestamps
    end
  end
end
