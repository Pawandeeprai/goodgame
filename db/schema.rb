# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160301171910) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "favorites", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "game_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "favorites", ["game_id"], name: "index_favorites_on_game_id", using: :btree
  add_index "favorites", ["user_id"], name: "index_favorites_on_user_id", using: :btree

  create_table "game_shelves", force: :cascade do |t|
    t.integer  "shelf_id",   null: false
    t.integer  "game_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "game_shelves", ["game_id"], name: "index_game_shelves_on_game_id", using: :btree
  add_index "game_shelves", ["shelf_id"], name: "index_game_shelves_on_shelf_id", using: :btree

  create_table "games", force: :cascade do |t|
    t.string   "title",        null: false
    t.string   "console",      null: false
    t.text     "description",  null: false
    t.string   "coverimg_url", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "owns", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "game_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "owns", ["game_id"], name: "index_owns_on_game_id", using: :btree
  add_index "owns", ["user_id"], name: "index_owns_on_user_id", using: :btree

  create_table "shelves", force: :cascade do |t|
    t.string   "title",      null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",                                                                                           null: false
    t.string   "name",                                                                                               null: false
    t.string   "picture_url",     default: "http://icons.iconarchive.com/icons/treetog/i/128/Floppy-Small-icon.png"
    t.string   "password_digest",                                                                                    null: false
    t.string   "session_token",                                                                                      null: false
    t.datetime "created_at",                                                                                         null: false
    t.datetime "updated_at",                                                                                         null: false
  end

end
