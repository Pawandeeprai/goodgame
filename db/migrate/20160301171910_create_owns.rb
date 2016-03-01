class CreateOwns < ActiveRecord::Migration
  def change
    create_table :owns do |t|
      t.integer :user_id, null: false
      t.integer :game_id, null: false
      t.timestamps null: false
    end
    add_index :owns, :user_id
    add_index :owns, :game_id
  end
end
