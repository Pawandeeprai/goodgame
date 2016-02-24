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

require 'test_helper'

class ShelvesControllerTest < ActionController::TestCase
  # test "the truth" do
  #   assert true
  # end
end
