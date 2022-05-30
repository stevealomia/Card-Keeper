import React from 'react'


function SingleCard({ selectedCard, addToFavorites }) {

    const { img_url, name, description, benefits, apr, annual_fee, welcome_bonus } = selectedCard

    return (
        <div key={name}>
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