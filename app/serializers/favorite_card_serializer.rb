class FavoriteCardSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :credit_card_id

  belongs_to :user_id
  belongs_to :credit_card
end
