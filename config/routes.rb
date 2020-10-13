Rails.application.routes.draw do
  root 'static_pages#index'
  get 'static_pages/quote'
  get 'static_pages/residential'
  get 'static_pages/corporate'
  get 'static_pages/login'
  get 'static_pages/backoffice'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
