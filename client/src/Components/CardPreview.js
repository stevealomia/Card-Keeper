import React from "react"
import { NavLink } from 'react-router-dom'
function CardPreview({ card }) {
    return (
        <div>
            <NavLink
                to={`./cardoffer/${card.id}`}>
                <img src={card.img_url} />
            </NavLink>
            <h4>
                {card.name}
            </h4>
            <div>
                {card.description}
            </div>
        </div>
    )
}

export default CardPreview