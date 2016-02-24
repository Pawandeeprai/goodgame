Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users do
      resources :shelves
    end
    resources :sessions
    resources :games
  end
end
