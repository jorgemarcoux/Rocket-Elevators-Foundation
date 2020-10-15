class LinkQuotesToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :quotes, :user_id, :integer
    rename_column :users, :UserID, :user_id
  end
end
