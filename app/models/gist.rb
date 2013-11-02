class Gist < ActiveRecord::Base
  attr_accessible :owner_id, :title

  validates :owner_id, :title, :presence => true

  belongs_to :owner,
             :foreign_key => :owner_id,
             :primary_key => :id,
             :class_name => "User"

  has_one :favorite
end
