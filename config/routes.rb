Rails.application.routes.draw do
  root to: 'pages#root'
  get 'pages/root'

  namespace :api do
    resources :people
  end
end
