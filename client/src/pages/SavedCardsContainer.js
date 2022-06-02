import React, { useEffect, useState } from 'react'
// import styles from '../styles/styles'
import SavedCardDetails from "./SavedCardDetails"
import styles from "./../styles/styles.js"

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

    const renderFavorites = filteredByCategory.length > 0 ? filteredByCategory.map(card => <SavedCardDetails key={card.id} handleRemove={removeFromFavorites} card={card} />) : <h3>oh no, you haven't saved any cards yet! fix it: save cards + get money honey</h3>

    return (
        <div style={styles.savedWallet}>
            <h1 style={{fontSize: 'xxx-large'}}>your deck</h1>
            <form>
                <select onChange={e => setCategory(e.target.value)} value={category}>
                    <option value="All">Browse Your Cards By Perks</option>
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