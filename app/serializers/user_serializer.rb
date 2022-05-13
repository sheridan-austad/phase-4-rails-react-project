class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :avatar, :bio, :role, :name
  has_many :pets,  serializer: PetSerializer
  has_many :pets_to_walk,  serializer: PetSerializer
  # one for the owner to see the email
  # one for the walker to not see the email
  def avatar
    return nil unless object.avatar.attached?
    object.avatar.blob.attributes.slice('filename', 'byte_size').merge(url: object.avatar).tap { |attrs| attrs['name'] = attrs.delete('filename') }
  end
  # if you are a walker only get get pets to walk, otherwise get all your pets
end
