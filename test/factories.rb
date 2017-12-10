FactoryBot.define do
  factory :active_account, class: Account do
    name        'Account 1'
    description 'this is account 1'
    note        'note about account 1'
    user_id     1
    active      true
  end

  factory :inactive_account, class: Account do
    name        'Account 1'
    description 'this is account 1'
    note        'note about account 1'
    user_id     1
    active      false
  end
end
