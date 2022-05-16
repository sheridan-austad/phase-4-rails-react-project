class Api::UsersController < ApplicationController
  skip_before_action :authorize, only: [:create, :index]

# after the router has determined which controller to use for the request,
# the controller is responsible for making sense of the request
# and producing the appropriate output


  def create
    # generate new user instance using User model class method 'create' with user_params (defined below),
    # assigning new instance to 'user'
    user = User.create!(user_params)
    # setting the just created user to the current session logged in user via the id
    session[:user_id] = user.id
    # rendering it in json which the computer and you are able to read
    render json: user, status: :created
  end

  # displaying the current user
  def show
    render json: @current_user
  end
  
  # getting the walkers under the user model
  def index
    users = User.walkers
    render json: users,  status: 200
  end

  # getting the owners under the user model
  def index
    users = User.owners
    render json: users,  status: 200
  end

  private

  # defining the params that we are using to create a user
  def user_params
    params.permit(:username, :password, :password_confirmation, :bio, :email, :role, :name, :avatar)
  end

end
