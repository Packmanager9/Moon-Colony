# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

Base.create({name: "Neoterrum", population: 0, happiness: 70, waste_management: 0, power_generation: 0, production: 0, housing: 0, luxury: 0})

=begin 
MaterialResource.create({name: "Helium"})
MaterialResource.create({name: "Uranium"})
MaterialResource.create({name: "Electricity"})
MaterialResource.create({name: "Organics"})
MaterialResource.create({name: "Metals"})
MaterialResource.create({name: "Metalloids"})
MaterialResource.create({name: "Credits"}) 
=end

MaterialResource.create({name: "Population"}) 
=begin
Location.create({name: "Earth"})
Location.create({name: "Moon"})
Location.create({name: "Ship"})
Location.create({name: "Space"})
=end

#MatDistribution.create()

