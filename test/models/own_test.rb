# == Schema Information
#
# Table name: owns
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  game_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class OwnTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
