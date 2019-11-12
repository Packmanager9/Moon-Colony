class Location < ApplicationRecord
    has_many :mat_distributions
    has_many :material_resources, through: :mat_distributions
end
