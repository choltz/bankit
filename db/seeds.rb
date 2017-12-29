# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

account_data = (1..3).zip(['checking', 'credit card', 'savings'])

account_data.each do |count, type|
  account = Account.create! name:         "Account #{count}",
                            description:  "account description #{count}",
                            note:         "Notes about the account #{count}",
                            account_type: type,
                            user_id:      1,
                            active:       true

  (1..9).each do |n|
    Transaction.create! account:        account,
                        transaction_at: DateTime.now,
                        payee:          "Payee #{account.id} #{n}",
                        category:       "Category #{account.id} #{n}",
                        memo:           "Memo #{account.id} #{n}",
                        outflow:        10.00
  end

  Transaction.create! account:        account,
                      transaction_at: DateTime.now,
                      payee:          'Payee 11',
                      category:       'Category 11',
                      memo:           'Memo 11',
                      inflow:         10.00
end
