# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


5.times do |no|
  User.create(
    email: "sample#{no}@gmail.com",
    phoneNumber: "XXXXXXXXXXX",
    firstName: "admin#{no}",
    lastName: "admin#{no}",
    pass: "admin#{no}",
    role: "admin",
  )
end