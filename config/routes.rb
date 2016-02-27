Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create] do
      resources :shelves, only: [:index, :create, :destroy, :show]
    end
    resources :game_shelves
    resources :sessions, only: [:index, :create, :destroy]
    resources :games, only: [:index, :show]
  end
end
