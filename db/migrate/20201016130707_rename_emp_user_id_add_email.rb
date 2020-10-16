class RenameEmpUserIdAddEmail < ActiveRecord::Migration[5.2]
  def change
    rename_column :employees, :User_ID, :email
    change_column :employees, :email, :string
    #Ex:- change_column("admin_users", "email", :string, :limit =>25)
    #Ex:- rename_column("admin_users", "pasword","hashed_pasword")
  end
end
