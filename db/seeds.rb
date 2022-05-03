# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
sheridan = User.create(username: "sheridan95", password: "12345", email:"sheridanmaustad@gmail.com")
stacy = User.create(username: "heart", password: "password", email:"stacy@gmail.com")
spencer = User.create(username: "spenc.91", password: "password!", email:"spencer@gmail.com", role: 1)

fido = Pet.create(name: "Fido", age: 1, species: "dog",  breed: "Lab", owner: sheridan)
rover = Pet.create(name: "Rover", age: 2, species: "dog",  breed: "Golden", owner: sheridan)
spot = Pet.create(name: "Spot", age: 3, species: "dog",  breed: "Pit", owner: stacy)

Appointment.create(pet: fido, owner: sheridan, walker: spencer, walk_date: Date.tomorrow, walk_time: Time.now)
Appointment.create(pet: rover, owner: sheridan, walker: spencer, walk_date: Date.tomorrow, walk_time: Time.now)
Appointment.create(pet: spot, owner: stacy, walker: spencer, walk_date: Date.tomorrow, walk_time: Time.now)