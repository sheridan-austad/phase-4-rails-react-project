class Appointment < ApplicationRecord
  belongs_to :pet
  belongs_to :owner
  belongs_to :walker
end
