Rails.application.routes.draw do

  resources :requests
  # resources :requests
  # resources :t_requests
  # resources :admin_users
  namespace :api do
    namespace :v1 do
      resources :line
      post '/callback' => 'line#callback'
    end
    # namespace :v2 do
    #   resources :line
    # end
  end


  namespace :admin do
    resource :request, :travel
  end

  scope module: 'user' do
    resource :activity
  end


  resources :users

  get '*path', to: 'application#error_404'

end
