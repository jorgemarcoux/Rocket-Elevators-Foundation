Rails.application.routes.draw do
  
  resources :quotes , only: [:user_quotes, :new, :create]
  mount RailsAdmin::Engine => '/backoffice', as: 'rails_admin'

  root to: 'static_pages#index'
  get 'static_pages/residential'
  get 'static_pages/corporate'




  devise_for :users,
  :controllers => { registrations: 'registrations'},
  :path_prefix => '',
  path: 'u',
  path_names: {
    sign_in: 'sign_in',
    sign_out: 'sign_out',
    password: 's',
    confirmation: 'v'
  }

  # devise_for :users, skip: [:sessions]
  # as :user do
  # get 'signin', to: 'devise/sessions#new', as: :new_user_session
  # post 'signin', to: 'devise/sessions#create', as: :user_session
  # delete 'signout', to: 'devise/sessions#destroy', as: :destroy_user_session
  # end


  get 'my_quotes' => 'quotes#user_quotes', as: :my_quotes
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
