Rails.application.routes.draw do
  namespace :api do
    resources :people
  end
end
