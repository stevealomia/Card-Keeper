import React from "react"
import { useHistory } from 'react-router-dom'

function CardPreview({ card, grabSelectedCard, addToFavorites }) {
    const history = useHistory()

    const showCardDetails = (id, card) => {
        grabSelectedCard(card)
        history.push(`/creditcards/${id}`, card)
    }

    return (
        <div className="card__container__card" onClick={() => showCardDetails(card.id, card)}>
            <div>
                <h2>{card.name}</h2>
                <img style={{ height: "200px" }} src={card.img_url} alt={card.name} />
            </div>
            <div>
                <h2>{card.category} Rewards!</h2>
                <h4>{card.description}</h4>
            <button onClick={(e) => addToFavorites(e, card)}>Add to my Wallet!</button>
            </div>
        </div>
    )
}

export default CardPreview