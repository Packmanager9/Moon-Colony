Rails.application.routes.draw do
  get 'bases', to: "bases#index"
  get 'bases/:id', to: "bases#show"
  get 'mat_distributions', to: "mat_distributions#index"
  get 'mat_distributions/:id', to: "mat_distributions#show"
  get 'locations', to: "locations#index"
  get 'material_resources', to: "material_resources#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
