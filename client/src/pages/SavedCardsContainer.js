import React, { useEffect, useState } from 'react'
import SavedCardDetails from "./SavedCardDetails"

function SavedCardsContainer() {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        fetch("/favorite_cards")
            .then(r => r.json())
            .then(savedCards => setFavorites(savedCards))
    }, [])

    console.log(favorites)
    const renderFavorites = favorites.map(card => <SavedCardDetails card={card}/>)

    return (
        <div>
            <h1>Your Saved Wallet</h1>
            {renderFavorites}
        </div>
    )
}

export default SavedCardsContainer