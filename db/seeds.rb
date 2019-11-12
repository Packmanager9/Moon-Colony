# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

#Base.create({name: "Neoterrum", population: 0, happiness: 70, waste_management: 0, power_generation: 0, production: 0, housing: 0, luxury: 0})

=begin 
MaterialResource.create({name: "Helium"})
MaterialResource.create({name: "Uranium"})
MaterialResource.create({name: "Electricity"})
MaterialResource.create({name: "Organics"})
MaterialResource.create({name: "Metals"})
MaterialResource.create({name: "Metalloids"})
MaterialResource.create({name: "Credits"}) 
MaterialResource.create({name: "Population"}) 
=end


=begin
Location.create({name: "Earth"})
Location.create({name: "Moon"})
Location.create({name: "Ship"})
Location.create({name: "Space"})
=end

=begin
MatDistribution.create({resource_id: 1, location_id: 1, amount: 10000})
MatDistribution.create({resource_id: 2, location_id: 1, amount: 10000})
MatDistribution.create({resource_id: 8, location_id: 1, amount: 8000000000})
MatDistribution.create({resource_id: 3, location_id: 1, amount: 172000000000})
MatDistribution.create({resource_id: 4, location_id: 1, amount: 560000000000})
MatDistribution.create({resource_id: 5, location_id: 1, amount: 100000000000000})
MatDistribution.create({resource_id: 6, location_id: 1, amount: 1000000000000000})
=end

puts "done"