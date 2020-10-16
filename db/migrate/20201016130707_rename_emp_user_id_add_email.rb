class RenameEmpUserIdAddEmail < ActiveRecord::Migration[5.2]
  def change
    rename_column :employees, :User_ID, :email
    change_column :employees, :email, :string
  end
end
