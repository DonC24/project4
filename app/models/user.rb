class User < ApplicationRecord
  has_one :event
  has_and_belongs_to_many :events

  has_many :sent_matches, :class_name => 'Match', :foreign_key => 'sender_id'
  has_many :received_matches, :class_name => 'Match', :foreign_key => 'recipient_id'



  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end