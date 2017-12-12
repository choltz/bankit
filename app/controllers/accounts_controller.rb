class AccountsController < ApplicationController
  def active
    render json: Account.active
  end
end
