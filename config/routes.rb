Rails.application.routes.draw do
  
  
  resources :shoetimes, only: [:index, :show, :create, :destroy]
  resources :shoes, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:index, :show, :create]

  
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
