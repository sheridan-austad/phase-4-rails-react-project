class PetSerializer < ActiveModel::Serializer
  # shows what is allowed under pets
  attributes :id, :name, :age, :species, :breed, :bio, :photo, :owner
  # has many walkers, 
  has_many :walkers,  serializer: UserSerializer
  belongs_to :owner,  serializer: UserSerializer

  def photo
    return nil unless object.photo.attached?
    object.photo.blob.attributes.slice('filename', 'byte_size').merge(url: object.photo).tap { |attrs| attrs['name'] = attrs.delete('filename') }
  end
end
