class RemovePasswordsFromUser < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :passwords, :string
  end
end
