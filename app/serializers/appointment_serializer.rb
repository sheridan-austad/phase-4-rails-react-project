class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :walk_time, :walk_date, :comments, :pet_id, :walker, :pet
  has_one :pet
  has_one :owner
  has_one :walker
end
