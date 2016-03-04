class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :name, null: false
      t.string :picture_url, default: "http://icons.iconarchive.com/icons/treetog/i/128/Floppy-Small-icon.png"
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamps null: false
    end
    add_index :users, :username
  end
end
