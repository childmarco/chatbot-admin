class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string "email", limit: 50, null: false
      t.string "username", limit: 50, null: false
      t.string "pass", limit: 50, null: false
      t.string "role", limit: 50, default: "admin", null: false
      t.timestamps null: false
    end
  end
end
