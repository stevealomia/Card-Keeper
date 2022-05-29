class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :email, :credit_score

  has_many :favorite_cards
end
