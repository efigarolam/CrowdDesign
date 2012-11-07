class Portfolio < ActiveRecord::Base
  attr_accessible :description, :release_date, :title
end
