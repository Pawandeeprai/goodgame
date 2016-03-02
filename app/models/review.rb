# == Schema Information
#
# Table name: reviews
#
#  id          :integer          not null, primary key
#  rating      :integer          not null
#  review_text :text
#  user_id     :integer          not null
#  game_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Review < ActiveRecord::Base
  validates :rating, :user_id, :game_id, presence: true
  validates :user_id, uniqueness: {scope: :game_id,
    message: "you can only review a game once"}

  belongs_to :game
end
