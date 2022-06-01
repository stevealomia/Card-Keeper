import React from "react"
import { useHistory } from 'react-router-dom'

function CardPreview({ card, grabSelectedCard, addToFavorites }) {
    const history = useHistory()

    const showCardDetails = (id, card) => {
        grabSelectedCard(card)
        history.push(`/creditcards/${id}`, card)
    }

    return (
        <div onClick={() => showCardDetails(card.id, card)}>
            <img src={card.img_url} alt={card.name} />
            <h2>{card.name}</h2>
            <h4>{card.description}</h4>
            <button onClick={(e) => addToFavorites(e, card)}>Add to my Wallet!</button>
        </div>
    )
}

export default CardPreview