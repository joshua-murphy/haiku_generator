class CreateWordLists < ActiveRecord::Migration[5.1]
  def change
    create_table :word_lists do |t|
      t.string :words, array: true, default: []

      t.timestamps
    end
    add_index :word_lists, :words, using: 'gin'
  end
end
