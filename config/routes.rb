NewAuthDemo::Application.routes.draw do
  resources :users, :only => [:create, :new, :show] do
    resources :gists, :only => [:index, :create] do
      resource :favorite, :only => [:create, :destroy]
    end
  end
  resources :gists, :only => [:destroy, :show, :update]
  resource :session, :only => [:create, :destroy, :new]

  resources :favorite, :only => [:index]

  root :to => "Root#root"
end
