class CreateGameShelves < ActiveRecord::Migration
  def change
    create_table :game_shelves do |t|
      t.integer :shelf_id, null: false
      t.integer :game_id, null: false

      t.timestamps null: false
    end
    add_index :game_shelves, :game_id
    add_index :game_shelves, :shelf_id 
  end
end
