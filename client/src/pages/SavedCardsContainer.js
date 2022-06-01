import React, { useEffect, useState } from 'react'
import SavedCardDetails from "./SavedCardDetails"

function SavedCardsContainer() {
    const [favorites, setFavorites] = useState([])

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

    const renderFavorites = favorites.length > 0 ? favorites.map(card => <SavedCardDetails key={card.id} handleRemove={removeFromFavorites} card={card} />) : "You don't have any saved cards, please add some to your favorites to see them here!"

    return (
        <div>
            <h1>Your Saved Wallet</h1>
            {renderFavorites}
        </div>
    )
}

export default SavedCardsContainer