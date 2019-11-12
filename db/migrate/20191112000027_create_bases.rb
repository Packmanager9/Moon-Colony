class CreateBases < ActiveRecord::Migration[6.0]
  def change
    create_table :bases do |t|
      t.string :name
      t.integer :population
      t.integer :happiness
      t.integer :waste_management
      t.integer :power_generation
      t.integer :production
      t.integer :housing
      t.integer :luxury

      t.timestamps
    end
  end
end
