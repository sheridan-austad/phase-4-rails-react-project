class Api::AppointmentsController < ApplicationController
  #  skip_before_action :require_login, only: [:delete, :show]

  def index
        appointments = @current_user.walker? ? @current_user.owned_appointments : @current_user.created_appointments
        render json: appointments
    end

    def create
        # binding.pry
        walker = User.find_by!(name: params[:walker_name])
        pet = @current_user.pets.find_by!(name: params[:pet_name])
        appointment = @current_user.created_appointments.create!(walk_time: params[:walk_time], walk_date: params[:walk_date], comments: params[:comments], walker: walker, pet: pet)
        render json: appointment
      end
    
      def delete
        appointments = Appointment.find_by(id: params[:user_id])
        appointments.delete
      end

      def show
        appointments = Appointment.find_by(id: params[:user_id])
        render json: appointments
      end
end
