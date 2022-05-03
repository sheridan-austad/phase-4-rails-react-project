# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_05_03_193806) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appointments", force: :cascade do |t|
    t.bigint "pet_id", null: false
    t.bigint "owner_id", null: false
    t.bigint "walker_id", null: false
    t.time "walk_time"
    t.date "walk_date"
    t.text "comments"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["owner_id"], name: "index_appointments_on_owner_id"
    t.index ["pet_id"], name: "index_appointments_on_pet_id"
    t.index ["walker_id"], name: "index_appointments_on_walker_id"
  end

  create_table "pets", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.string "species"
    t.string "breed"
    t.text "bio"
    t.string "image_url"
    t.bigint "owner_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["owner_id"], name: "index_pets_on_owner_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "image_url"
    t.string "bio"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "role", default: 0
    t.string "email"
  end

  add_foreign_key "appointments", "pets"
  add_foreign_key "appointments", "users", column: "owner_id"
  add_foreign_key "appointments", "users", column: "walker_id"
  add_foreign_key "pets", "users", column: "owner_id"
end
