class Api::PetsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        pets = Pet.preload(:walkers)
        render json: pets
    end

    def create
      pet = @current_user.pets.create!(pet_params)
      # binding.pry
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