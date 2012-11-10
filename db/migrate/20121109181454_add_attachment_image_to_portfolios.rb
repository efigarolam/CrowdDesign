class AddAttachmentImageToPortfolios < ActiveRecord::Migration
  def change
    change_table :portfolios do |t|
      t.attachment :image
    end
  end

end
