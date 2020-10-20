class CreateFactElevator < ActiveRecord::Migration[5.2]
  def change
    create_table :fact_elevators do |t|
      
      t.integer :serial_number
      t.integer :building_id
      t.integer :customer_id
      t.string :building_city

      t.timestamps
    end
  end
end
