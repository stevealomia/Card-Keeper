import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Error from "../styles/Error"


function SingleCard({ currentUser }) {
    const [error, setError] = useState()
    let locate = useLocation()

    const selectedCard = locate.state
    console.log(locate.state)

    const addToFavorites = () => {
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                user_id: currentUser.id,
                credit_card_id: selectedCard.id
            })
        }

        fetch("/favorite_cards", configObj)
            .then(r => {
                if (r.ok) {
                    r.json().then((cards) => {
                        console.log(cards)
                        alert("Card has been added to your favorites!")
                    })
                } else {
                    r.json().then(err => setError(err.errors))
                }
            })
    }

    const { img_url, name, description, benefits, apr, annual_fee, welcome_bonus } = selectedCard
    const renderError = <Error key={error}>{error}</Error>

    return (
        <div key={name}>
            {error ? renderError : null}
            <img src={img_url} alt={name} />
            <h1>{name}</h1>
            <h2>{description}</h2>
            <h3>Benefits: {benefits}</h3>
            <h3>Welcome Bonus! {welcome_bonus}</h3>
            <h4>APR: {apr}</h4>
            <h5>Annual Fee:  ${annual_fee} </h5>
            <button onClick={addToFavorites}>Add to my Wallet!</button>
        </div>
    )
}

export default SingleCard