class FavoriteCardsController < ApplicationController
    skip_before_action :authorized

    def index 
        current_user = User.find_by!(id: session[:user_id])
        favorites = current_user.favorite_cards
        render json: favorites, status: :ok
    end

    def create 
        render json: FavoriteCard.create!(card_params), status: :created
    end

    def destroy
        # debugger
        current_user = User.find_by!(id: session[:user_id])
        favorites = current_user.favorite_cards
        # debugger
        deleted_card = favorites.find_by(credit_card_id: params[:id])
        deleted_card.destroy
        head :no_content
    end

    private

    def card_params
        params.permit(:user_id, :credit_card_id)
    end

end
