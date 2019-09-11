class EventsUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :events_users do |t|
      t.references :event
      t.references :user
      t.timestamps
    end
  end
end