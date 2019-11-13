# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
    
# rescue => exception
# end
Base.create({name: "Neoterrum", population: 0, happiness: 60, waste_management: 0, solar_power: 0, nuclear_power: 0, material_production: 0, food_production: 0, housing: 0, luxury: 0, misc: 0})

#1
MaterialResource.create({name: "Helium"})
#2
MaterialResource.create({name: "Uranium"})
#3
MaterialResource.create({name: "Electricity"})
#4
MaterialResource.create({name: "Organics"})
#5
MaterialResource.create({name: "Metals"})
#6
MaterialResource.create({name: "Metalloids"})
#7
MaterialResource.create({name: "Credits"}) 
#8
MaterialResource.create({name: "Population"}) 


loc1 = Location.create({name: "Earth"})
Location.create({name: "Moon"})
Location.create({name: "Ship"})
Location.create({name: "Space"})

mat1 = MatDistribution.create({material_resource_id: res1.id, location_id: loc1.id, amount: 10000})
MatDistribution.create({material_resource_id: 2, location_id: 1, amount: 10000})
MatDistribution.create({material_resource_id: 8, location_id: 1, amount: 8000000000})
MatDistribution.create({material_resource_id: 3, location_id: 1, amount: 172000000000})
MatDistribution.create({material_resource_id: 4, location_id: 1, amount: 560000000000})
MatDistribution.create({material_resource_id: 5, location_id: 1, amount: 10000000000000})
MatDistribution.create({material_resource_id: 6, location_id: 1, amount: 100000000000000})

MatDistribution.create({material_resource_id: 1, location_id: 2, amount: 0})
MatDistribution.create({material_resource_id: 2, location_id: 2, amount: 0})
MatDistribution.create({material_resource_id: 8, location_id: 2, amount: 0})
MatDistribution.create({material_resource_id: 3, location_id: 2, amount: 0})
MatDistribution.create({material_resource_id: 4, location_id: 2, amount: 0})
MatDistribution.create({material_resource_id: 5, location_id: 2, amount: 0})
MatDistribution.create({material_resource_id: 6, location_id: 2, amount: 0})

MatDistribution.create({material_resource_id: 1, location_id: 3, amount: 0})
MatDistribution.create({material_resource_id: 2, location_id: 3, amount: 0})
MatDistribution.create({material_resource_id: 8, location_id: 3, amount: 0})
MatDistribution.create({material_resource_id: 3, location_id: 3, amount: 0})
MatDistribution.create({material_resource_id: 4, location_id: 3, amount: 0})
MatDistribution.create({material_resource_id: 5, location_id: 3, amount: 0})
MatDistribution.create({material_resource_id: 6, location_id: 3, amount: 0})
MatDistribution.create({material_resource_id: 7, location_id: 3, amount: 25000})

puts MatDistribution.all

puts "done"