Rails.application.routes.draw do
  
  resources :quotes
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
  get 'my_quotes' => 'quotes#index', as: :my_quotes
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
