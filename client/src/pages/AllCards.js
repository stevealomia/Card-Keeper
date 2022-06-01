import React from "react"
import CardPreview from "../Components/CardPreview"
import Error from '../styles/Error'


function AllCards({ creditCards, grabSelectedCard, addToFavorites, error }) {
    console.log(creditCards)
    console.log(error)

    const renderCards = creditCards.map((card) => <CardPreview key={card.id} addToFavorites={addToFavorites} grabSelectedCard={grabSelectedCard} card={card} />)

    const renderError = <Error key={error}>{error}</Error>

    return (
        <>
            <h3> Click on a Card to Learn More!</h3>
            <p> Click the "Filters" to select your preferred rewards type. You can also select specific card issuers to browse.</p>
            {error ? renderError : null}
            <div style={{ display: 'flex', overflowY: 'hidden', overflowX: 'auto' }}>
                {renderCards}
            </div>
        </>
    )
}

export default AllCards