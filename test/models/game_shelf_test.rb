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

require 'test_helper'

class GameShelfTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
