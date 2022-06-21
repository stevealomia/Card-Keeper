import React from 'react'

function SavedCardDetails({ card, handleRemove }) {

    const { id, name, img_url, benefits, welcome_bonus } = card.credit_card

    return (
        <div
            className='single__saved__card'
            key={name}>
            <div className='saved__card__style'>
                <div className='saved__card__left'>
                    <h2>{name}</h2>
                    <img src={img_url} alt={name} />
                </div>
                <div className='saved__card__right'>
                    <div className='right__style'>
                        <h3>Benefits:</h3>
                        <p>{benefits}</p>
                    </div>
                    <div className='right__style'>

                        <h3>Welcome Bonus! </h3>
                        <p>{welcome_bonus}</p>
                    </div>
                </div>
            </div>
            <button id='remove__button' onClick={() => handleRemove(id)}>X</button>

        </div>
    )
}

export default SavedCardDetails