class Api::PetsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        pets = Pet.preload(:walkers)
        render json: pets
    end
end