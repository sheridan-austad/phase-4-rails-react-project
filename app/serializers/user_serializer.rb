class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image_url, :bio, :role, :name
  has_many :pets,  serializer: PetSerializer
  has_many :pets_to_walk,  serializer: PetSerializer
  # one for the owner to see the email
  # one for the walker to not see the email

  # if you are a walker only get get pets to walk, otherwise get all your pets
end
