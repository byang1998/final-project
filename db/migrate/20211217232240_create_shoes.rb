class CreateShoes < ActiveRecord::Migration[6.1]
  def change
    create_table :shoes do |t|
      t.string :title
      t.string :image
      t.string :desc
      t.integer :rating
      t.integer :price

      t.timestamps
    end
  end
end
