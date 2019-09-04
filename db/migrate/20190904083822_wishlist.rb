class Wishlist < ActiveRecord::Migration[5.2]
  def change
    create_table :wishlists do |t|
      t.text :item
      t.references :user

      t.timestamps
    end
  end
end