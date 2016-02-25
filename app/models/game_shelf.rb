# == Schema Information
#
# Table name: game_shelves
#
#  id         :integer          not null, primary key
#  shelf_id   :integer          not null
#  game_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class GameShelf < ActiveRecord::Base
  validates :game_id, :shelf_id, presence: true
  validates :game_id, uniqueness: { scope: :shelf_id,
    message: "This game already exists on this shelf"}

    belongs_to :game
    belongs_to :shelf

end
