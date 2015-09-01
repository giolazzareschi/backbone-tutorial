Rails.application.routes.draw do
  devise_for :users
  get 'users/index'

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'welcome#index'

  scope '/api' do
    resources :users
  end

  # must be here
  get "*path" => redirect("/")
end
