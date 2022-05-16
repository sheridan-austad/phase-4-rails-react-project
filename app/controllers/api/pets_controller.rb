class Api::PetsController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]

    def index
        pets = Pet.preload(:walkers)
        render json: pets
    end

    def create
        pets = Pet.create!(pet_params)
        render json: pet, status: :created
    end
    # def index
    #     pets = Pet.preload(:owners)
    #     render json: pets
    # end

    private

  def pet_params
    params.permit(:name, :age, :species, :breed, :bio, :photo)
  end
end