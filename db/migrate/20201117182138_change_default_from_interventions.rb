class ChangeDefaultFromInterventions < ActiveRecord::Migration[5.2]
  def change
    change_column :interventions, :status, :string, :default => "Pending"
    change_column :interventions, :result, :string, :default => "Incomplete"
  end
end
