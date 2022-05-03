class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.references :pet, null: false, foreign_key: true
      t.references :owner, null: false, foreign_key: {to_table: :users}
      t.references :walker, null: false, foreign_key: {to_table: :users}
      t.time :walk_time
      t.date :walk_date
      t.text :comments

      t.timestamps
    end
  end
end
