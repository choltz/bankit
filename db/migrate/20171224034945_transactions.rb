class Transactions < ActiveRecord::Migration[5.1]
  def change
    create_table :transactions do |t|
      t.datetime :transaction_at
      t.text     :payee
      t.text     :category
      t.text     :memo
      t.decimal  :outflow
      t.decimal  :inflow
      t.timestamps
    end

    add_index :transactions, :transaction_at
    add_index :transactions, :payee
    add_index :transactions, :category
    add_index :transactions, :outflow
    add_index :transactions, :inflow
  end
end
