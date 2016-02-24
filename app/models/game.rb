# == Schema Information
#
# Table name: games
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  console      :string           not null
#  description  :text             not null
#  coverimg_url :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Game < ActiveRecord::Base
  validates :title, :console, :description, :coverimg_url, presence: true
end
