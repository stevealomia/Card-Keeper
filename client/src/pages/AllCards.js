import React from "react"
import CardPreview from "../Components/CardPreview"

function AllCards({creditCards, grabSelectedCard}) {
    console.log(creditCards)

    const renderCards = creditCards.map((card) => <CardPreview grabSelectedCard={grabSelectedCard} card={card} />)

    return (
            <div style={{ display: 'flex', overflowY: 'hidden', overflowX: 'auto' }}>
                <h1> Click on a Card to Learn More!</h1>
                {renderCards}
            </div>
    )
}

export default AllCards