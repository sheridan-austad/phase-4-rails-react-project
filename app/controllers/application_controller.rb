require "pry"

class ApplicationController < ActionController::API
  include ActionController::Cookies
  
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  # I believe line 8 is kicking in before I get to the appointments
  rescue_from ActiveRecord::RecordNotFound, with: :not_authorized
  # line 7 sends a not_authorized message, without it the code says cannot find by the ID
  
  before_action :authorize
  # helper-method breaks it
  # helper_method :logged_in?
  # comment out 7 if plan on building auth later on


  private

  def require_login
    unless @current_user
      render json: {errors: ["You must be logged in to access this section"]}
  end
end
  
  def not_authorized
    render json: { errors: ["Not authorized"] }, status: :unauthorized 
  end 
  
  def authorize
    @current_user ||= User.find(session[:user_id])
    
  end
  
  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end
  # this logged_in and the helper_method breaks it
  # def logged_in?
  #     @current_user != nil
  # end
end

# embed appointment form into the walker page/card
# or leave the form on the own and do dropdown for the walker with names
# use lab - material UI for cards
  # put the cards inside the container - UI
