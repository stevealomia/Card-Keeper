import React from "react"


function CardDetails({ card }) {
    return (
        <div>
            <img src={card.img_url} />

                <h4>
                 {card.name}
                </h4>
        
            <div>
                {card.description}
            </div>
        </div>
    )
}

export default CardDetails