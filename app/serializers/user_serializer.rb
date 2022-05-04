class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image_url, :bio, :role

  # one for the owner to see the email
  # one for the walker to not see the email
end
