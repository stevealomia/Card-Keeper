import React from "react"
import { NavLink, useHistory } from 'react-router-dom'
import SingleCard from "../pages/SingleCard"

function CardPreview({ card, grabSelectedCard, addToFavorites }) {
    const history = useHistory()

    const showCardDetails = (id, card) => {
        grabSelectedCard(card)
        history.push(`/creditCards/${id}`, card)

    }

    return (
        <div
            onClick={() => showCardDetails(card.id, card)}
        >
            <img src={card.img_url} alt={card.name} />
            <h2>{card.name}</h2>

            <h4>{card.description}</h4>
            <button onClick={(e) => addToFavorites(e, card)}>Add to my Wallet!</button>
        </div>
    )
}

export default CardPreview