class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
         t.integer :UserID
         t.string :firstname
         t.string :lastname
         t.string :title
         t.string :email, :limit => 50, :null => false
         t.column :passwords, :string, :limit => 30, :null => false

      t.timestamps null: false
    end
  end
end
