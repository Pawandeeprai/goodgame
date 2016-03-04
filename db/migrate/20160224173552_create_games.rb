class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :image, null: false
      t.integer :bgg_id, null: false
      t.integer :minplayers
      t.integer :maxplayers
      t.integer :yearpublished
      t.integer :playtime

      t.timestamps null: false
    end
    add_index :games, :bgg_id
  end
end
