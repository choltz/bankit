class Transactions < ActiveRecord::Migration[5.1]
  def change
    create_table :transactions do |t|
      t.integer  :account_id, null: false
      t.datetime :transaction_at, null: false
      t.text     :payee, null: false
      t.text     :category
      t.text     :memo
      t.decimal  :outflow
      t.decimal  :inflow
      t.datetime :deleted_at
      t.timestamps
    end

    add_index :transactions, :account_id
    add_index :transactions, :transaction_at
    add_index :transactions, :payee
    add_index :transactions, :category
    add_index :transactions, :outflow
    add_index :transactions, :inflow
    add_index :transactions, :deleted_at
  end
end
