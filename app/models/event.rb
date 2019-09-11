class Event < ApplicationRecord
  belongs_to :user
  has_and_belongs_to_many :users

  validates :name, presence: true
  validates :eventdate, presence: true
end