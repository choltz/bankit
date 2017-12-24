class Account < ActiveRecord::Base
  has_many :transactions

  scope :active, -> { where( active: true ) }
end
