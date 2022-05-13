require "pry"

class ApplicationController < ActionController::API
  include ActionController::Cookies
  
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :not_authorized
  
  before_action :authorize
  # comment out 7 if plan on building auth later on
  
  private

  def not_authorized
   render json: { errors: ["Not authorized"] }, status: :unauthorized 
  end 

  def authorize
    @current_user ||= User.find(session[:user_id])
    
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

end

# embed appointment form into the walker page/card
# or leave the form on the own and do dropdown for the walker with names
# use lab - material UI for cards
  # put the cards inside the container - UI
