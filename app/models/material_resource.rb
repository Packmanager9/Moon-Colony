class MaterialResource < ApplicationRecord
    has_many :mat_distributions
    has_many :locations, through: :mat_distributions
end
