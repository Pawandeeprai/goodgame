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
end
