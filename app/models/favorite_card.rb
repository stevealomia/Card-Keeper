class FavoriteCard < ApplicationRecord
  belongs_to :user
  belongs_to :credit_card

  validates :user, uniqueness: { scope: :credit_card, message: "has already saved this card to their Favorites!"}


end
