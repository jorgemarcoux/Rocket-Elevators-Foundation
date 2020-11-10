class FactIntervention < ActiveRecord::Migration[5.2]
  def change
    create_table :fact_intervention do |t|
      t.integer :employee_id
      t.integer :building_id
      t.integer :battery_id
      t.integer :column_id
      t.integer :elevator_id
      t.string :result
      t.text :report
      t.string :status
      t.date :intervention_start_date_time
      t.date :intervention_end_date_time
  end
end
end
