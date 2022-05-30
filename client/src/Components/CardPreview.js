import React from "react"
import { NavLink, useHistory } from 'react-router-dom'
import SingleCard from "../pages/SingleCard"

function CardPreview({ card, grabSelectedCard }) {
    const history = useHistory()

    const showCardDetails = (id, card) => {
        grabSelectedCard(card)
        // console.log(id)
        // fetch(`/credit_cards/${id}`)
        // .then((r) => r.json())
        // .then(data => {
        //     console.log(data)
            history.push(`/creditCards/${id}`, card)
            // return <SingleCard card={card} />
        // })
    }

    const addToFavorites = () => {
        console.log("hi!")
        // make a post request to /favorite_cards
    }


    return (
        <div 
        onClick={() => showCardDetails(card.id, card)}
        >
            <img src={card.img_url} alt={card.name} />
            <h2>{card.name}</h2>

            <h4>{card.description}</h4>
            <button onClick={addToFavorites}>Add to my Wallet!</button>
        </div>
    )
}

export default CardPreview