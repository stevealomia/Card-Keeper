# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts '💳 Seeding cards...'

CreditCard.create!(img_url: 'https://icm.aexp-static.com/Internet/Acquisition/US_en/AppContent/OneSite/category/cardarts/platinum-card.png',
    name: 'American Express Platinum', 
    description: 'Premium Travel and experiences', benefits: '5x points on flights.  Up tp $200 on Uber cash per year.  Access to over 10+ Centurion lounge and Premium lounges around the world', annual_fee: '$695', welcome_bonus: '125,000 points after spending $6000 in the first 6 months', apr: '16.74% to 23.74 %')

CreditCard.create!(img_url: 'https://icm.aexp-static.com/Internet/Acquisition/US_en/AppContent/OneSite/category/cardarts/gold-card.png',
    name: 'American Express Gold', 
    description: 'Enjoy eating at your favorites restaurants', benefits: '4x points on restaurants around the world -4x points at supermarkets in US - $120 on Uber cash', annual_fee: 250, welcome_bonus: '75,000 points after spending $4000 in the first 6 months', apr: '16.74% to 23.74 %')

CreditCard.create!(img_url: 'https://creditcards.chase.com/K-Marketplace/images/cardart/world_of_hyatt_card.png',
    name: 'World of Hyatt Credit Card', 
    description: 'Turn every purchase into more free nights with up to 9 Points total for Hyatt stays', benefits: '4 Bonus Points per $1 spent at Hyatt hotels, participating Small Luxury Hotels of the world and eligible Lindblad Expedetions. Plus, 5 Base Points from Hyatt per eligible $1 spent for being a World of Hyatt member.', annual_fee: 95, welcome_bonus:'60,000 Bonus Points after you spend $3,000 on purchases in your first 3 months from account opening. Plus, up to 30,000 More Bonus Points by earning 2 Bonus Points total per $1 spent in the first 6 months', apr: '16.24% - 23.24%')

CreditCard.create!(img_url: 'https://icm.aexp-static.com/Internet/Acquisition/US_en/AppContent/OneSite/category/cardarts/blue-cash-preferred.png',
    name: 'American Express Blue Cash Preferred', 
    description: 'Get the most out of your favorite supermarket', benefits: '6% cashback at US supermarkets', annual_fee: 95, welcome_bonus: '$0 annual fee waive for the first year, $350 back after spending $3000 in the first 6 months', apr: '16.74% to 23.74 %')

CreditCard.create!(img_url: 'https://icm.aexp-static.com/Internet/Acquisition/US_en/AppContent/OneSite/category/cardarts/gold-delta-skymiles.png',
    name: 'Delta SkyMiles Gold American Express Card', 
    description: 'Enjoy the SkyMiles benefits when you travel with Delta', benefits: 'First Checked Bag Free, $100 Delta Flight Credit, 2X Miles at Restaurants and at U.S. Supermarkets', annual_fee: 0, welcome_bonus: ' 75,000 Bonus Miles after spending $2,000 in purchases within the first 3 months.', apr: '14.74% to 24.74 %')

CreditCard.create!(img_url: 'https://creditcards.chase.com/K-Marketplace/images/cardart/sapphire_preferred_card.png',
    name: 'Chase Sapphire Preferred', 
    description: 'Travel with style  ', benefits: '5x points on travel purchases, 3x on dining, 3x on streaming services, travel partners', annual_fee: 95, welcome_bonus: '80,000 points after spending $4000 in the first 3 months', apr: '16.24% to 23.24 %')

CreditCard.create!(img_url: 'https://creditcards.chase.com/K-Marketplace/images/cardart/sapphire_reserve_card.png',
    name: 'Chase Sapphire Reserve', 
    description: 'Experiences traveling and life with a premium touch', benefits: '$300 dollars on travel credit, 10x on hotels after the $300 credit, 10x total points on Chase Dining purchases with Ultimate Rewards, 3x on dining and groceries, travel partners', annual_fee: 550, welcome_bonus: '80,000 points after spending $4000 in the first 3 months', apr: '16.24% to 23.24 %')

CreditCard.create!(img_url: 'https://creditcards.chase.com/K-Marketplace/images/cardart/freedom_unlimited_card.png',
    name: 'Chase freedom unlimited', 
    description: 'Cash back on your favorite categories', benefits: '5% cash back on travel purchased through Chase, 3% on dining including takeout and drugstores, and 1.5% on all other purchases.', annual_fee: 0, welcome_bonus: '$200 bonus after you spend $500 on purchases in the first 3 months', apr: '0% intro APR for 15 months, after 16.24% to 23.24 %')


CreditCard.create!(img_url: 'https://creditcards.chase.com/K-Marketplace/images/cardart/amazon_card.png',
    name: 'Amazon Prime Rewards Visa Signature Card', 
    description: 'Being a prime member is always getting more', benefits: '5% Back at Amazon.com and Whole Foods Market with an eligible Prime membership, 2% Back at restaurants, gas stations and drugstores and 1% Back on all other purchases.', annual_fee: 0, welcome_bonus:'Amazon Gift Card Bonus will be instantly loaded into your Amazon.com account', apr: '14.49% - 22.49%')
   

CreditCard.create!(img_url: 'https://creditcards.chase.com/K-Marketplace/images/cardart/world_of_hyatt_card.png',
    name: 'World of Hyatt Credit Card', 
    description: 'Turn every purchase into more free nights with up to 9 Points total for Hyatt stays', benefits: '4 Bonus Points per $1 spent at Hyatt hotels, participating Small Luxury Hotels of the world and eligible Lindblad Expedetions. Plus, 5 Base Points from Hyatt per eligible $1 spent for being a World of Hyatt member.', annual_fee: 95, welcome_bonus:'60,000 Bonus Points after you spend $3,000 on purchases in your first 3 months from account opening. Plus, up to 30,000 More Bonus Points by earning 2 Bonus Points total per $1 spent in the first 6 months', apr: '16.24% - 23.24%')

CreditCard.create!(img_url: 'https://creditcards.chase.com/K-Marketplace/images/cardart/united_explorer_card.png',
    name: 'UnitedSM Explorer Card', 
    description: 'Be part of the club that include awesome benefits whenever you travel with United', benefits: '2x miles on United purchases, dining, and hotel stays. Plus, enjoy a free first checked bag and other great United travel benefits.', annual_fee: 0, welcome_bonus:'70,000 bonus miles after qualifying purchases.', apr: '16.74% - 23.74%')

CreditCard.create!(img_url: 'https://www.creditcards.com/ext/cdn.prodstatic.com/shared/images/cards/500x315/discover-it-cashback-match-012518.png',
    name: 'Discover IT Cashback', 
    description: 'Get 5% cash back rewards at your favorite categories throughout the year', benefits: '5% cash back on Grocery stores, Fitness Club & Gym, Target, Restaurants, Paypal, Amazon and digital wallets', annual_fee: 0, welcome_bonus: "Cashback Match, get an unlimited dollar-for-dollar match of all the cash back you've earned at the end of your first year, automatically.", apr: '12.24% to 23.24%')

CreditCard.create!(img_url: 'https://ecm.capitalone.com/WCM/card/products/savorone-card-art.png',
    name: 'Capital One Savor', 
    description: 'Travel around the world and get No Foreign transaction Fees on your favorite categories.', benefits: '3% cash back on dining, entertainment, popular streaming services & at grocery stores', annual_fee: 0, welcome_bonus: "200 cash bonus once you spend $500 on purchases within the first 3 months from account opening", apr: '12.24% to 23.24%')

    puts "Seeding Users"
User.create!(name: "test", email: "test@test.com", password: "test", credit_score: 500, age: 40)



puts '✅ Done seeding!'