class PetSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  # shows what is allowed under pets
  attributes :id, :name, :age, :species, :breed, :bio, :photo, :owner, :walkers
  # has many walkers, 
  has_many :walkers
  belongs_to :owner,  serializer: UserSerializer

  def photo
    return nil unless object.photo.attached?
    object.photo.blob.attributes.slice('filename', 'byte_size').merge(url: rails_blob_path(object.photo, only_path: true)).tap { |attrs| attrs['name'] = attrs.delete('filename') }
  end
end
