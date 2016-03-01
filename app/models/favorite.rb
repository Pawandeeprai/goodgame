# == Schema Information
#
# Table name: favorites
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  game_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Favorite < ActiveRecord::Base
  validates :game_id, :user_id, presence: true
  validates :game_id, uniqueness: { scope: :user_id,
    message: "This game already exists on this shelf"}

  belongs_to :user
  belongs_to :favorite_game,
    class_name: "Game",
    foreign_key: :game_id,
    primary_key: :id


end
