class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :species, :breed, :bio, :"image_url--no-test-framework"
end