class CreateTables < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :title
      t.string :reset_password_token

      # devise
      t.boolean :is_admin, default: false
      t.boolean :is_employee, default: false
      t.boolean :is_user, default: true
      
      ## Database authenticatable
      t.string :email, null: false, default: ""
      t.string :encrypted_password, null: false, default: ""
      t.index ["email"], name: "index_users_on_email", unique: true
      t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
      
      ## Rememberable
      t.datetime :reset_password_sent_at
      t.datetime :remember_created_at
      
      t.timestamps null: false
    end

    create_table :employees do |t|
      t.string :first_name                                          #First Name
      t.string :last_name                                           #Last Name
      t.string :function                                            #The principal function

      t.timestamps null: false
    end

    create_table :quotes do |t|
      t.belongs_to :user
      t.string :building_type
      t.integer :apartments
      t.integer :floors
      t.integer :basements
      t.integer :businesses
      t.integer :elevator_shafts
      t.integer :parking_spaces
      t.integer :occupants
      t.integer :opening_hours
      t.string :product_line
      t.decimal :install_fee, :precision => 8, :scale => 2
      t.decimal :total_price, :precision => 8, :scale => 2
      t.integer :unit_price
      t.integer :elevator_number

      t.timestamps
    end

    create_table :leads do |t|
      t.string :full_name
      t.string :email
      t.string :phone
      t.string :business_name
      t.string :project_name
      t.string :department
      t.text :project_description
      t.text :message
      t.binary :file_attachment, limit: 4.megabytes
      t.belongs_to :user

      t.timestamps null: false
    end

    create_table :batteries do |t|
      t.belongs_to :building
      t.belongs_to :employee
      t.string :battery_type
      t.string :battery_status
      t.date :date_of_commissioning
      t.date :date_of_last_inspection
      t.string :certificate_of_operations
      t.string :information
      t.string :notes

      t.timestamps
    end

    create_table :columns do |t|
      t.belongs_to :battery
      t.string :column_type
      t.string :column_status
      t.integer :number_of_floors_served
      t.string :information
      t.string :notes
      
      t.timestamps
    end

    create_table :elevators do |t|
      t.belongs_to :column
      t.string :serial_number
      t.string :elevator_model
      t.string :elevator_type
      t.string :elevator_status
      t.date :date_of_commissioning
      t.date :date_of_last_inspection
      t.string :certificate_of_inspection
      t.string :information
      t.string :notes
      
      t.timestamps
    end

    create_table :customers do |t|
      t.belongs_to :user
      t.string :company_name
      t.string :company_contact_full_name
      t.string :company_contact_phone
      t.string :company_contact_email
      t.string :company_description
      t.string :technical_authority_full_name
      t.string :technical_authority_phone_number
      t.string :technical_manager_email_service

      t.timestamps
    end

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

    create_table :building_details do |t|
      t.references :building, foreign_key: true
      t.string :information_key
      t.string :value

      t.timestamps
    end

    create_table :addresses do |t|
      t.references :building, foreign_key: true
      t.references :customer, foreign_key: true
      t.string :type_of_address
      t.string :status
      t.string :entity
      t.string :number_and_street
      t.string :suite_or_apartment
      t.string :city
      t.string :postal_code
      t.string :country
      t.string :notes

      t.timestamps
    end

    add_reference :buildings, :building_detail, index: true
    add_reference :buildings, :address, index: true
    add_reference :customers, :address, index: true
  end

  def self.up
    add_index :users, :email,                unique: true
    add_index :users, :reset_password_token, unique: true
  end

  def self.down
    raise ActiveRecord::IrreversibleMigration
  end
end
