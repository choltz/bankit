class TransactionsController < ApplicationController
  def index
    render json: Transaction.where(account_id: params[:id])
  end
end
