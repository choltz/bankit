account_data = (1..3).zip(['checking', 'credit card', 'savings'])

account_data.each do |count, type|
  account = Account.create! name:         "Account #{count}",
                            description:  "account description #{count}",
                            note:         "Notes about the account #{count}",
                            account_type: type,
                            user_id:      1,
                            active:       true

  (1..39).each do |n|
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

Category::DEFAULT.each do |name|
  Category.create! name: name
end
