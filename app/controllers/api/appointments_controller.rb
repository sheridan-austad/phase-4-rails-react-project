class Api::AppointmentsController < ApplicationController
    def index
        appointments = @current_user.walker? ? @current_user.owned_appointments : @current_user.created_appointments
        render json: appointments
    end

    def create
        appointments = Appointment.find_by(username: params[:username])
        render json: appointments
      end
end
