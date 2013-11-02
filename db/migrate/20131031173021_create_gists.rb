class CreateGists < ActiveRecord::Migration
  def change
    create_table :gists do |t|
      t.string :title, :null => false
      t.integer :owner_id, :null => false

      t.timestamps
    end
  end
end
