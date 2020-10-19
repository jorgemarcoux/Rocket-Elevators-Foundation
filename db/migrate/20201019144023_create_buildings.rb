class CreateBuildings < ActiveRecord::Migration[5.2]
  def change
    create_table :buildings do |t|
      t.belongs_to :customer
      t.string :administrator_full_name
      t.string :administrator_email
      t.string :administrator_phone_number
      t.string :technical_contact_full_name
      t.string :technical_contact_email
      t.string :technical_contact_phone
      t.timestamps
    end
  end
end
