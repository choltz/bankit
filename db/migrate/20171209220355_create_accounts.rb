class CreateAccounts < ActiveRecord::Migration[5.1]
  def change
    create_table :accounts do |t|
      t.text    :name
      t.text    :description
      t.text    :note
      t.integer :user_id
      t.boolean :active

      t.timestamps
    end

    add_index :accounts, :name
    add_index :accounts, :user_id
  end
end
