import React, { useEffect, useState } from 'react'
import SavedCardDetails from "./SavedCardDetails"

function SavedCardsContainer() {
    const [favorites, setFavorites] = useState([])
    const [category, setCategory] = useState("All")


    const filteredByCategory = category === "All" ? favorites : favorites.filter(card => card.credit_card.category === category)

    useEffect(() => {
        fetch("/favorite_cards")
            .then(r => r.json())
            .then(savedCards => setFavorites(savedCards))
    }, [])

    const removeFromFavorites = (id) => {
        console.log(id)
        fetch(`/favorite_cards/${id}`, { method: "DELETE" })
            .then(data => {
                const newFavorites = favorites.filter(card => card.credit_card_id !== id)
                setFavorites(newFavorites)
            })
    }

    const renderFavorites = filteredByCategory.length > 0 ? filteredByCategory.map(card => <SavedCardDetails key={card.id} handleRemove={removeFromFavorites} card={card} />) : "You don't have any saved cards under this category! Please add some to your favorites to see them here!"

    return (
        <div>
            <h1>Your Saved Wallet</h1>
            <form>
                <select onChange={e => setCategory(e.target.value)} value={category}>
                    <option value="All">All</option>
                    <option value="Travel">Travel</option>
                    <option value="Dining">Dining</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Cash Back">Cash Back</option>
                </select>
            </form>

            {renderFavorites}
        </div>
    )
}

export default SavedCardsContainer