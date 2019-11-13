class CreateBases < ActiveRecord::Migration[6.0]
  def change
    create_table :bases do |t|
      t.string :name
      t.integer :population
      t.integer :happiness
      t.integer :waste_management
      t.integer :solar_power
      t.integer :nuclear_power
      t.integer :material_production
      t.integer :food_production
      t.integer :housing
      t.integer :luxury
      t.string :misc

      t.timestamps
    end
  end
end
