class User < ApplicationRecord
  has_many :created_appointments, class_name: "Appointment", foreign_key: :owner_id
  has_many :owned_appointments, class_name: "Appointment", foreign_key: :walker_id
  has_many :pets, foreign_key: :owner_id
  has_many :pets_to_walk, through: :owned_appointments, source: :pet
  has_one_attached :avatar,  dependent: :destroy
  
  has_secure_password

  scope :walkers, -> {where(role: 1)}
  scope :owners, -> {where(role: 0)}
  validates :username, presence: true, uniqueness: true, length: {in: 3..20}
  validates :password, length: {in: 3..50}
  validates :email, presence: true, uniqueness: true, format: {with: /\A(?<username>[^@\s]+)@((?<domain_name>[-a-z0-9]+)\.(?<domain>[a-z]{2,}))\z/i}

  # validations - 3 => line 7, and two on line 10
  # don't use 3rd part auth
  enum role: %i(owner walker admin)

end