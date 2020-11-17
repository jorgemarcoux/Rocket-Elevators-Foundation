class ChangeAuthorFromInterventions < ActiveRecord::Migration[5.2]
  def change
    change_column :interventions, :author, :bigint
  end
end
