class Portfolio < ActiveRecord::Base
  attr_accessible :description, :release_date, :title, :image
  has_attached_file :image, :styles => { :medium => "320x205>", :large => "1000x700>" }
end
