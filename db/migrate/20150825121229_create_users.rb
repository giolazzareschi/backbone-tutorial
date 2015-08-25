class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :firstname, :default => ""
      t.string :lastname, :default => ""
      t.integer :age, :default => 0

      t.timestamps null: false
    end
  end
end
