class CreateTablesDwh < ActiveRecord::Migration[5.2]
  def change
    create_table :fact_quotes do |t|
      t.integer :quote_id #id from quote table
      t.datetime :quote_created_at #time stamp from quote table
      t.string :company_name # from customer table
      t.string :email # from customer > user table
      t.integer :elevator_number # from quote table
      
      t.timestamps
    end

    create_table :fact_contacts do |t|
      t.integer :contact_id #from leads table > user id
      t.date :creation_date
      t.string :company_name # from leads
      t.string :email #from leads
      t.string :project_name #from leads
      
      t.timestamps
    end

    create_table :fact_elevators do |t|
      t.string :serial_number
      t.date :date_of_commissioning
      t.integer :building_id #from column > battery > building table
      t.integer :customer_id #from column > battery > building table
      t.string :building_city #from column > battery > building > address

      t.timestamps
    end

    create_table :dim_customers do |t|
      t.date :creation_date
      t.string :company_name #customer table
      t.string :company_contact_full_name #customer table
      t.string :company_contact_email #customer table
      t.integer :elevator_number # customer > quote > elevator_number
      t.string :customer_city #customer table

      t.timestamps
    end
  end
end
