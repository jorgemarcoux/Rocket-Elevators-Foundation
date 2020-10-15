class AddInstallFeesToQuote < ActiveRecord::Migration[5.2]
  def change
    add_column :quotes, :install_fee, :decimal 
  end
end
