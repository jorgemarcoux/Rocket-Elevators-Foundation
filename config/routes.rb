Rails.application.routes.draw do
  
  mount RailsAdmin::Engine => '/backoffice', as: 'rails_admin'

  root to: 'static_pages#index'
  get 'static_pages/quote'
  get 'static_pages/residential'
  get 'static_pages/corporate'
  get 'static_pages/login'


  devise_for :users,
  :path_prefix => '',
  path: 'u',
  path_names: {
    sign_in: 'sign_in',
    sign_out: 'sign_out',
    password: 's',
    confirmation: 'v'
  }
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
