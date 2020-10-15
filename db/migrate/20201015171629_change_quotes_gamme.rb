class ChangeQuotesGamme < ActiveRecord::Migration[5.2]
  def change
    rename_column :quotes, :gamme, :prod_line
  end
end
