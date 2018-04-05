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

ActiveRecord::Schema.define(version: 20180124033849) do

  create_table "accounts", force: :cascade do |t|
    t.text "name"
    t.text "description"
    t.text "account_type"
    t.text "note"
    t.integer "user_id"
    t.boolean "active"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_accounts_on_name"
    t.index ["user_id"], name: "index_accounts_on_user_id"
  end

  create_table "categories", force: :cascade do |t|
    t.text "name"
  end

  create_table "transactions", force: :cascade do |t|
    t.integer "account_id", null: false
    t.datetime "transaction_at", null: false
    t.text "payee", null: false
    t.text "category"
    t.text "memo"
    t.decimal "outflow"
    t.decimal "inflow"
    t.datetime "deleted_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["account_id"], name: "index_transactions_on_account_id"
    t.index ["category"], name: "index_transactions_on_category"
    t.index ["deleted_at"], name: "index_transactions_on_deleted_at"
    t.index ["inflow"], name: "index_transactions_on_inflow"
    t.index ["outflow"], name: "index_transactions_on_outflow"
    t.index ["payee"], name: "index_transactions_on_payee"
    t.index ["transaction_at"], name: "index_transactions_on_transaction_at"
  end

end
