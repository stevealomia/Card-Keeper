import React, { useState, useEffect } from 'react'

function CardOffer() {
    const [card, setCard] = useState()
    useEffect(() => {
        const urlLocation = window.location.href.replace('http://localhost:4000/cardoffer/', '')
        fetch(`/credit_cards/${urlLocation}`)
        .then((r) => r.json())
        .then(data => setCard(data))
    }, [card])

    return (
        <div>
            <div>
                {card?.name}
            </div>
            <div>
                {card?.description}
            </div>
            <div>
                {card?.benefits}
            </div>
            <div>
                {card?.annual_fee}
            </div>
            <div>
                {card?.apr}
            </div>
            <div>
                {card?.welcome_bonus}
            </div>
        </div>
    )
}

export default CardOffer