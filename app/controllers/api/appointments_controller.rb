class Api::AppointmentsController < ApplicationController
    def index
        appointments = Appointment.all
        render json: appointments
    end

    def create
        appointments = Appointment.find_by(username: params[:username])
        render json: appointments
      end
end
