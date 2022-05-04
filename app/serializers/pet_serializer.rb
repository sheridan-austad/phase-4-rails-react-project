class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :species, :breed, :bio, :image_url, :owner
  has_many :walkers,  serializer: UserSerializer
  belongs_to :owner,  serializer: UserSerializer
end
