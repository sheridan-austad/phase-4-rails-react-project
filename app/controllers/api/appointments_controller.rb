class Api::AppointmentsController < ApplicationController
  # skip_before_action :authorize, only: [:create]

  # gets all the appointments, based on if the user is a walker with owned appointments
  # or an owner with created appointments
  def index
      appointments = @current_user.walker? ? @current_user.owned_appointments : @current_user.created_appointments
      render json: appointments
    end

    # creates an appointment, which includes all the params from the created_appointments
  def create
      walker = User.find_by!(name: params[:walker_name])
      # .where gives an array so .first to get the first element in the array
      pet = Pet.where(id: params[:pet_id], owner_id: @current_user.id).first
      appointment = @current_user.created_appointments.create!(walk_time: params[:walk_time], walk_date: params[:walk_date], comments: params[:comments], walker: walker, pet: pet)
      render json: appointment
    end
    
    # deletes an appointment based on the id
    def destroy
      appointment = Appointment.find_by!(id: params[:id])
      appointment.delete
    end
    
    # gets a specific appointment based on the appointment id
    # renders the response in json
    def show
      appointment = Appointment.find(params[:id])
      render json: appointment
    end

    def update
      appointment = Appointment.find_by!(id: params[:id])
      appointment.update!(comments: params[:comments])
      render json: appointment
    end
end