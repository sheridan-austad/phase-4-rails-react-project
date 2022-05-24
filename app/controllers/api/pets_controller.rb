class Api::PetsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        pets = Pet.preload(:walkers)
        render json: pets
    end

    def create
      pet = @current_user.pets.create!(pet_params)
        render json: pet, status: :created
    end

    def show
        pets = Pet.find_by(id: params[:user_id])
        render json: pets
    end

    def delete
      pets = Pet.find_by(id: params[:user_id])
      pets.delete
    end

    private

  def pet_params
    params.permit(:name, :age, :species, :breed, :bio, :photo)
  end
end