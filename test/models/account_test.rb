require 'test_helper'

class AccountTest < ActiveSupport::TestCase
  context 'Acccount tests' do
    should 'return active records' do
      (1..5).each { FactoryBot.create(:active_account) }
      (1..5).each { FactoryBot.create(:inactive_account) }

      assert_equal 5, Account.active.count
    end
  end
end
