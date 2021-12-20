class CreateShoetimes < ActiveRecord::Migration[6.1]
  def change
    create_table :shoetimes do |t|
      t.integer :user_id
      t.integer :shoe_id

      t.timestamps
    end
  end
end
