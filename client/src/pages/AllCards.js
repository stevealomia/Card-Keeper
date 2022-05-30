import React, { useState, useEffect } from "react"
import CardPreview from "../Components/CardPreview"


function AllCards() {
    const [creditCards, setCreditCards] = useState([])

    useEffect(() => {
        fetch('/credit_cards')
            .then((r) => r.json())
            .then((x) => setCreditCards(x))
    }, [])
    console.log(creditCards)


    const cardList = data.length ? data.map((card) =>
            <CardPreview card={card} />

    ) : null


    return (
        <div>
        
                <div style={{display:'flex', overflowY:'hidden', overflowX:'auto'}}>
                {renderCards}
                </div>
       
        </div>
    )
}
export default AllCards