class Api::AppointmentsController < ApplicationController
  skip_before_action :authorize, only: [:create]

  def index
      appointments = @current_user.walker? ? @current_user.owned_appointments : @current_user.created_appointments
      render json: appointments
    end

  def create
      walker = User.find_by!(name: params[:walker_name])
      current_user = User.find(params[:user_id])
      pet = current_user.pets.find_by!(id: params[:pet_id])
      # binding.pry
      appointment = current_user.created_appointments.create!(walk_time: params[:walk_time], walk_date: params[:walk_date], comments: params[:comments], walker: walker, pet: pet)
      render json: appointment
    end
    
  def destroy
      appointments = Appointment.find_by(id: params[:appointment_id])
      # @current_user - can we find the appt. searching by the appt_id not the user_id
      appointments = current_user.appointments.find_by!(id: params[:appointment_id])
      appointments.delete
    end

  def show
      appointments = Appointment.find_by(id: params[:user_id])
      appointments = current_user.appointments.find_by!(id: params[:appointment_id])
      render json: appointments
    end
end
