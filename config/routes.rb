Rails.application.routes.draw do
  # top-level routes should all resolve to home; the client-side router will
  # handle that.
  get '/'             => 'home#index'
  get '/budget'       => 'home#index'
  get '/reports'      => 'home#index'
  get '/accounts'     => 'home#index'
  get '/accounts/:id' => 'home#index'

  get 'api/accounts/active' => 'accounts#active'
end
