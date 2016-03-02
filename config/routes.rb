Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :update] do
      resources :shelves, only: [:index, :create, :destroy, :show, :update]
    end
    resources :game_shelves
    resources :sessions, only: [:index, :create, :destroy]
    resources :games, only: [:index, :show] do
      resources :reviews
    end
    resources :owns, only: [:index, :show, :create, :destroy]
    resources :favorites, only: [:index, :show, :create, :destroy]
    resources :searches
  end
end
