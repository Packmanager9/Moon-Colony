Rails.application.routes.draw do
  resources :bases, only: [:index, :show]
  resources :mat_distributions
  resources :locations, only: [:index, :show]
  resources :material_resources, only: [:index, :show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
