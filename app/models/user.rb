class User < ApplicationRecord
  # has_many :appointments
  
  has_secure_password

  validates :username, presence: true, uniqueness: true
  enum role: %i(client walker admin)

end
