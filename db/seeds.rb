# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create :name => "Jenny", :email => "jenny@abc.com", :password => "pwjenny"
User.create :name => "David", :email => "david@abc.com", :password => "pwdavid"
User.create :name => "Will", :email => "will@abc.com", :password => "pwwill"
User.create :name => "Nicole", :email => "nicole@abc.com", :password => "pwnicole"
User.create :name => "Brenda", :email => "brenda@abc.com", :password => "pwbrenda"
User.create :name => "James", :email => "james@abc.com", :password => "pwjames"
User.create :name => "Alicia", :email => "alicia@abc.com", :password => "pwalicia"
User.create :name => "Michael", :email => "michael@abc.com", :password => "pwmichael"
User.create :name => "Kenny", :email => "kenny@abc.com", :password => "pwkenny"
User.create :name => "Benji", :email => "benji@abc.com", :password => "pwbenji"
User.create :name => "Gerald", :email => "gerald@xyz.com", :password => "pwgerald"
User.create :name => "Vera", :email => "vera@xyz.com", :password => "pwvera"
User.create :name => "John", :email => "john@xyz.com", :password => "pwjohn"
User.create :name => "Jane", :email => "jane@xyz.com", :password => "pwjane"
User.create :name => "Mark", :email => "mark@xyz.com", :password => "pwmark"
User.create :name => "Sunny", :email => "sunny@xyz.com", :password => "pwsunny"
p "USERS HAVE BEEN SEEDED"