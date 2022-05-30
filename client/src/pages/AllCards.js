import React, { useState, useEffect } from "react"
import CardPreview from "../Components/CardPreview"


function AllCards() {
    const [data, setData] = useState([])


    useEffect(() => {
        fetch('/credit_cards')
            .then((r) => r.json())
            .then((x) => setData(x))
    }, [])
    // console.log(data)


    const cardList = data.length ? data.map((card) =>
            <CardPreview card={card} />

    ) : null


    return (
        <div>
        
                <div style={{display:'flex', overflowY:'hidden', overflowX:'auto'}}>
                {cardList}
                </div>
       
        </div>
    )
}
export default AllCards