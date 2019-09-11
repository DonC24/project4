class Wishlist < ActiveRecord::Base
  belongs_to :user
  belongs_to :event

  validates :item, presence: true
end