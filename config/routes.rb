Rails.application.routes.draw do
  get 'onepage/index'
  devise_for :users
  resources :events
  get '/matches/:id' => 'matches#show'
  post '/matches' => 'matches#create'
  patch '/matches/:id' => 'matches#update'
  root 'onepage#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end