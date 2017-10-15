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

ActiveRecord::Schema.define(version: 20171014121243) do

  create_table "requests", force: :cascade do |t|

    t.belongs_to :request, index: true

    t.integer  "user_id",    limit: 4
    t.integer  "plan_id",    limit: 4
    t.datetime "request_date",           null: false
    t.datetime "",           null: false

    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
  end

  add_index "requests", ["user_id"], name: "index_requests_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",      limit: 50,                   null: false
    t.string   "username",   limit: 50,                   null: false
    t.string   "pass",       limit: 50,                   null: false
    t.string   "role",       limit: 50, default: "admin", null: false
    t.datetime "created_at",                              null: false
    t.datetime "updated_at",                              null: false
  end

  add_foreign_key "requests", "users"







end
