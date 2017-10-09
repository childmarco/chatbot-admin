Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :line
      post '/callback' => 'line#callback'
    end
    namespace :v2 do
      resources :line
    end
  end

  resources :users

  get '*path', to: 'application#error_404'

end
