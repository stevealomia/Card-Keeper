import React from "react"
import CardPreview from "../Components/CardPreview"
import styles from '../styles/styles.js'
function AllCards({ creditCards, grabSelectedCard, addToFavorites }) {
    console.log(creditCards)

    const renderCards = creditCards.map((card) => <CardPreview key={card.id} addToFavorites={addToFavorites} grabSelectedCard={grabSelectedCard} card={card} />)

    return (
        <div style={{ display: 'flex', overflowY: 'hidden', overflowX: 'auto' }}>
            <h1> Click on a Card to Learn More!</h1>
            {renderCards}
        </div>
    )
}

export default AllCards