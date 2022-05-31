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
                console.log(newFavorites)
                setFavorites(newFavorites)
            })
    }

    // console.log(favorites)
    const renderFavorites = favorites.map(card => <SavedCardDetails key={card.id} handleRemove={removeFromFavorites} card={card} />)

    return (
        <div>
            <h1>Your Saved Wallet</h1>
            {renderFavorites}
        </div>
    )
}

export default SavedCardsContainer