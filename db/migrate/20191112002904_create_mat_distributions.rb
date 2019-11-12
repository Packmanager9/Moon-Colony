class CreateMatDistributions < ActiveRecord::Migration[6.0]
  def change
    create_table :mat_distributions do |t|
      t.integer :resource_id
      t.integer :location_id
      t.integer :amount

      t.timestamps
    end
  end
end
