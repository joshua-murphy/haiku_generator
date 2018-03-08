Rails.application.routes.draw do
  namespace :api do
    get "haiku", to: "words#haiku"
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
