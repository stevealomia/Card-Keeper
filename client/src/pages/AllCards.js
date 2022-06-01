import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import CardPreview from "../Components/CardPreview"
import Error from '../styles/Error'


function AllCards({ creditCards, grabSelectedCard, addToFavorites, error }) {
    // FIGURE OUT HOW TO RENDER CC UPON REFRESH
    // let locate = useLocation()
    // const creditCards = locate.state
    // console.log(locate.state)
    const [category, setCategory] = useState("All")


    const filteredByCategory = category === "All" ? creditCards : creditCards.filter(card => card.category === category)

    const renderCards = filteredByCategory.map((card) => <CardPreview key={card.id} addToFavorites={addToFavorites} grabSelectedCard={grabSelectedCard} card={card} />)

    const renderError = <Error key={error}>{error}</Error>

    return (
        <>
            <form>
                <select onChange={e => setCategory(e.target.value)} value={category}>
                    <option value="All">All</option>
                    <option value="Travel">Travel</option>
                    <option value="Dining">Dining</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Cash Back">Cash Back</option>
                </select>
            </form>
            <h3> Click on a Card to Learn More!</h3>
            <p> Click the "Filters" to select your preferred rewards type. You can also select specific card issuers to browse.</p>
            {error ? renderError : null}
            <div style={{ display: 'flex', overflowY: 'hidden', overflowX: 'auto' }}>
                {renderCards}

            </div>
        </>
    )
}

export default AllCards