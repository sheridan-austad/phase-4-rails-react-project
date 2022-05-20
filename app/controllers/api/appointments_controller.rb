class Api::AppointmentsController < ApplicationController
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
        appointment = Appointment.find_by(id: params[:id])
        appointment.delete
      end

      def show
        appointment = Appointment.find_by!(id: params[:id])
        render json: appointment
      end
end
