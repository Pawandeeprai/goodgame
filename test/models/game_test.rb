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

require 'test_helper'

class GameTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
