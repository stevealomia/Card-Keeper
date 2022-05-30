import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

function SingleCard({selectedCard} ) {

    const {id, img_url, name, description, benefits, apr, annual_fee, welcome_bonus} = selectedCard
    // const [card, setCard] = useState()
    // console.log(card)
    // const { id } = useParams()

    // useEffect(() => {
    //     fetch(`/credit_cards/${id}`)
    //         .then((r) => r.json())
    //         .then(card => {
    //             console.log(card)
    //             setCard(card)})
    // }, [])

    // console.log(selectedCard)

    const addToFavorites = () => {
        console.log("hi!")
        // make a post request to /favorite_cards
    }

    // const showCardDetails = () => {

    // }

    return (
        <div key={id}>
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