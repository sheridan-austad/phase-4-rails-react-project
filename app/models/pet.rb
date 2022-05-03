class Pet < ApplicationRecord
    belongs_to :owner, class_name: "User"
    has_many :appointments
    has_many :walkers, through: :appointments,  source: :walker
end
