class AddCategoryColumnToCreditCardsTable < ActiveRecord::Migration[7.0]
  def change
    add_column :credit_cards, :category, :string 
    add_column :credit_cards, :company, :string
  end
end
