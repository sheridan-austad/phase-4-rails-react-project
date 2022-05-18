class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :username, :avatar, :bio, :role, :name, :appointments
  has_many :pets,  serializer: PetSerializer
  has_many :pets_to_walk,  serializer: PetSerializer
  # one for the owner to see the email
  # one for the walker to not see the email
  def avatar
    return nil unless object.avatar.attached?
    # binding.pry
    object.avatar.blob.attributes.slice('filename', 'byte_size').merge(url: rails_blob_path(object.avatar, only_path: true)).tap { |attrs| attrs['name'] = attrs.delete('filename') }
  end

  def appointments
    self.object.owner? ? self.object.created_appointments : self.object.owned_appointments
  end
  # if you are a walker only get get pets to walk, otherwise get all your pets
  def walker
    return nil unless self.object.walker
  end
end
