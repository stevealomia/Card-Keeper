class FavoriteCardsController < ApplicationController

    def create 
        render json: FavoriteCard.create!(card_params), status: :created
    end

    def index 
        render json: FavoriteCard.all, status: :ok
    end

    private

    def card_params
        params.permit(:user_id, :credit_card_id)
    end

end
