class User < ApplicationRecord
  has_many :created_appointments, class_name: "Appointment", foreign_key: :owner_id
  has_many :owned_appointments, class_name: "Appointment", foreign_key: :walker_id
  has_many :pets, foreign_key: :owner_id
  has_many :pets_to_walk, through: :owned_appointments, source: :pet
  
  has_secure_password

  validates :username, presence: true, uniqueness: true
  enum role: %i(client walker admin)

end
