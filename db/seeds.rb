# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


5.times do |no|
  User.create(
    email:       "sample#{no}@gmail.com",
    phoneNumber: "XXXXXXXXXXX",
    firstName:   "admin#{no}",
    lastName:    "admin#{no}",
    pass:        "admin#{no}",
    role:        "admin",
  )
end

100.times do |no|
  Request.create(
    userId:      sprintf("%04d", no),
    planId:      sprintf("%04d", no),
    requestDate: DateTime.now.strftime("%Y-%m-%d %H:%M:%S"),
  )
end


3.times do |no|
  3.times do |id|
    Request.create(
      userId:      sprintf("%04d", no),
      planId:      "#{id}#{no}",
      requestDate: DateTime.now.strftime("%Y-%m-%d %H:%M:%S"),
    )
  end
end
