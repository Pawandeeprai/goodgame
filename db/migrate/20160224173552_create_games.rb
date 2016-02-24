class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :title, null: false
      t.string :console, null: false
      t.text :description, null: false
      t.string :coverimg_url, null: false
      
      t.timestamps null: false
    end
  end
end
