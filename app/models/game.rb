# == Schema Information
#
# Table name: games
#
#  id            :integer          not null, primary key
#  title         :string           not null
#  description   :text             not null
#  image         :string           not null
#  bgg_id        :integer          not null
#  minplayers    :integer
#  maxplayers    :integer
#  yearpublished :integer
#  playtime      :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Game < ActiveRecord::Base
  validates :title,  :description, :image, :bgg_id, presence: true

  has_many :reviews

  def rating
    self.reviews.average(:rating)
  end
end
