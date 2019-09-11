class Matches < ActiveRecord::Migration[5.2]
  def change
    create_table :matches do |t|
      t.references :sender, foreign_key: { to_table: 'users' }
      t.references :recipient, foreign_key: { to_table: 'users' }
      t.references :event

      t.timestamps
    end
  end
end