class GameShelf < ActiveRecord::Base
  validates :game_id, :shelf_id, presence: true
  validates :game_id, uniqueness: { scope: :shelf_id,
    message: "This game already exists on this shelf"
    }

    belongs_to :game
    belongs_to :shelf

end
