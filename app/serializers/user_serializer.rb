class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :username, :avatar, :bio, :role, :name, :appointments
  has_many :pets,  serializer: PetSerializer
  has_many :pets_to_walk,  serializer: PetSerializer
  

  # showing an image for the logged in user if there is one
  # if there isn't one, just showing the profile
  def avatar
    return nil unless object.avatar.attached?
    # binding.pry
    object.avatar.blob.attributes.slice('filename', 'byte_size').merge(url: rails_blob_path(object.avatar, only_path: true)).tap { |attrs| attrs['name'] = attrs.delete('filename') }
  end

  # showing the attributes for the appointment
  def appointments
    appts = self.object.owner? ? self.object.created_appointments : self.object.owned_appointments
    appts.map{|appt| {appointment: appt, walker: appt.walker, owner: appt.owner}}
  end
end
