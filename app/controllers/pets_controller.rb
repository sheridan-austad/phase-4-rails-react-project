class PetsController < ApplicationController
    def index
        pets = Pet.all(include: :users)
        render json: pets
    end
end