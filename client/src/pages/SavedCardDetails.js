import React from 'react'

function SavedCardDetails({card}) {

    const {name, img_url, benefits, welcome_bonus} = card
    
    return (
        <div key={name}>
            <img src={img_url} alt={name} />
            <h1>{name}</h1>
            <h3>Benefits: {benefits}</h3>
            <h3>Welcome Bonus! {welcome_bonus}</h3>
        </div>
    )
}

export default SavedCardDetails