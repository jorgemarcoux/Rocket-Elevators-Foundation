Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/backoffice', as: 'rails_admin'
  resources :addresses, only: %i[index]

  resources :leads

  resources :quotes, only: %i[user_quotes new create]

  resources :interventions do
    get :get_build_request, on: :collection
    get :get_batt_request, on: :collection
    get :get_col_request, on: :collection
    get :get_elev_request, on: :collection

  end

  root to: 'static_pages#index'
  get 'static_pages/residential'
  get 'static_pages/corporate'
  get 'static_pages/interventions'
  get 'static_pages/elevator_media'

  devise_for :users,
             controllers: {
               registrations: 'users/registrations', sessions: 'users/sessions'
             },
             path_names: {
               sign_in: 'sign_in',
               sign_out: 'sign_out',
               password: 's',
               confirmation: 'v'
             }

  get 'my_quotes' => 'quotes#user_quotes', as: :my_quotes
  get 'my_leads' => 'leads#user_leads', as: :my_leads

  #To create new intervention entry
  post '/interventions' => 'interventions#create'

  #AJAX request controller route
  # get '/ajax-request' => 'interventions#get_ajax_request'

  resource :messages do
    collection { post 'reply' }
  end
end
