class GreetingsController < ApplicationController
  def index; end

  def rand_greetings
    random_message = Message.all.sample
    render json: random_message
  rescue StandardError
    render json: { error: 'User not found' }, status: :bad_request
  end
end
