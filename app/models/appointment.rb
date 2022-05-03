class Appointment < ApplicationRecord
  belongs_to :pet
  belongs_to :owner, class_name: "User"
  belongs_to :walker,  class_name: "User"
end
