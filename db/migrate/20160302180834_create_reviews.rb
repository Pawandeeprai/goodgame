class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :rating, null: false
      t.text :review_text
      t.integer :user_id, null: false
      t.integer :game_id, null: false

      t.timestamps null: false
    end
    add_index :reviews, :user_id
    add_index :reviews, :game_id
  end
end
