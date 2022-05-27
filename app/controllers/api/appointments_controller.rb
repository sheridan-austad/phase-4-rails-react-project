class Api::AppointmentsController < ApplicationController
  # skip_before_action :authorize, only: [:create]

  def index
      appointments = @current_user.walker? ? @current_user.owned_appointments : @current_user.created_appointments
      render json: appointments
    end

  def create
      walker = User.find_by!(name: params[:walker_name])
      # .where gives an array so .first to get the first element in the array
      pet = Pet.where(id: params[:pet_id], owner_id: @current_user.id).first
      # binding.pry
      appointment = @current_user.created_appointments.create!(walk_time: params[:walk_time], walk_date: params[:walk_date], comments: params[:comments], walker: walker, pet: pet)
      render json: appointment
    end
    
  def destroy
      appointments = Appointment.find_by(id: params[:appointment_id])
      # @current_user - can we find the appt. searching by the appt_id not the user_id
      appointments = current_user.appointments.find_by!(id: params[:appointment_id])
      appointments.delete
    end

  def show
      appointments = Appointment.find_by(id: params[:appointment_id])
      appointments = current_user.appointments.find_by!(id: params[:appointment_id])
      render json: appointments
    end
end


# it still says not authorized, even though I am logged in as the user #1... ditto for delete. If I
# cannot get the appointments, I cannot delete them.