class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.text :name
      t.datetime :eventdate

      t.timestamps
    end
  end
end
