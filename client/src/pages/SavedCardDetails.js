import React from 'react'

function SavedCardDetails({card, handleRemove}) {

    const {id, name, img_url, benefits, welcome_bonus} = card.credit_card

    return (
        <div className='saved__cards__container' key={name}>
            <h1>{name}</h1>
            <img src={img_url} alt={name} />
            <h3>Benefits: {benefits}</h3>
            <h3>Welcome Bonus! {welcome_bonus}</h3>
            <button onClick={() =>handleRemove(id)}>Remove from Favorites</button>
        </div>
    )
}

export default SavedCardDetails