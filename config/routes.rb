Rails.application.routes.draw do
  get '/material_resources', to: "material_resources#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
