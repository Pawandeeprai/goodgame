# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  name            :string           not null
#  picture_url     :string           default("http://icons.iconarchive.com/icons/treetog/i/128/Floppy-Small-icon.png")
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

module UsersHelper
end
