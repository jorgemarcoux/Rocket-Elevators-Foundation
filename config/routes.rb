Rails.application.routes.draw do
  
  root to: 'static_pages#index'
  get 'static_pages/quote'
  get 'static_pages/residential'
  get 'static_pages/corporate'
  get 'static_pages/login'


  devise_for :users,
  :path_prefix => '',
  path: '',
  path_names: {
    sign_in: 'signin',
    sign_out: 'signout',
    password: 'secret',
    confirmation: 'verification',
    registration: 'register',
    sign_up: 'signup'
  }
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
