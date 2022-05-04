class User < ApplicationRecord
  has_many :created_appointments, class_name: "Appointment", foreign_key: :owner_id
  has_many :owned_appointments, class_name: "Appointment", foreign_key: :walker_id
  has_many :pets, foreign_key: :owner_id
  has_many :pets_to_walk, through: :owned_appointments, source: :pet
  
  has_secure_password

  scope :walkers, -> {where(role: 1)}
  validates :username, presence: true, uniqueness: true
  # valdates :password, 
  # limits the password
  # validations - 3 => line 7, and two on line 10
  # don't use 3rd part auth
  enum role: %i(client walker admin)

end
