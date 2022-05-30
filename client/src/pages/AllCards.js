import React, { useState, useEffect } from "react"
import CardDetails from "../Components/CardDetails"

function AllCards() {
    const [creditCards, setCreditCards] = useState([])

    useEffect(() => {
        fetch('/credit_cards')
            .then((r) => r.json())
            .then((x) => setCreditCards(x))
    }, [])
    console.log(creditCards)


    const renderCards = creditCards.map((card) => <CardDetails card={card} />)


    return (
        <div>
                <div style={{display:'flex', overflowY:'hidden', overflowX:'auto'}}>
                {renderCards}
                </div>
        </div>
    )
}
export default AllCards