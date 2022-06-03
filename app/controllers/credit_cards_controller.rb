class CreditCardsController < ApplicationController
    skip_before_action :authorized, only: [:index, :show]

    def index
        render json: CreditCard.all, status: :ok
    end

    def show
        credit_card = CreditCard.find_by(id: params[:id])
        render json: credit_card, status: :ok
    end
end
