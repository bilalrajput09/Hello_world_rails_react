Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root 'greetings#index'
  get '/rand_greeting', to: 'greetings#rand_greetings'
end
