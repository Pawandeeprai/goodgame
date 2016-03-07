# == Schema Information
#
# Table name: shelves
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Shelf < ActiveRecord::Base
  validates :title, :user_id, presence: true

  has_many :game_shelves, dependent: :destroy
  has_many :games, :through => :game_shelves

  # TODO reafactor this later
  def self.generate_shelves(user)
    new_user = User.find_by_username(user.username)
    shelf_one = Shelf.new(user_id: new_user.id, title: "played")
    shelf_one.save
    shelf_two = Shelf.new(user_id: new_user.id, title: "want to play")
    shelf_two.save
  end
end
