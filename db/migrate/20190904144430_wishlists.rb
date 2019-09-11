class Wishlists < ActiveRecord::Migration[5.2]
  def change
    create_table :wishlists do |t|
      t.text :item
      t.references :user
      t.references :event

      t.timestamps
    end
  end
end