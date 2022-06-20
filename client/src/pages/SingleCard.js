import React, { useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import Error from "../styles/Error"


function SingleCard({ currentUser }) {
  let locate = useLocation()
  console.log(locate.state)
  const selectedCard = locate.state

  const [error, setError] = useState()

  const history = useHistory()

  const goBack = () => {
    history.push("/creditcards")
  }




  const addToFavorites = () => {
    if (currentUser) {
      const configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          user_id: currentUser.id,
          credit_card_id: selectedCard.id
        })
      }

      fetch("/favorite_cards", configObj)
        .then(r => {
          if (r.ok) {
            r.json().then((cards) => {
              setError(null)
              alert("Card has been added to your favorites!")
            })
          } else {
            r.json().then(err => setError(err.errors))
          }
        })
    } else {
      alert("You need an Account to add this card to your Wallet!  Redirecting to Sign Up Page...")
      history.push("/signup")
    }
  }

  const { img_url, name, description, benefits, apr, annual_fee, welcome_bonus, category } = selectedCard

  const renderError = <Error key={error}>{error}</Error>

  return (
    <div className='single__card__container'>
      <button onClick={goBack}>Go Back</button>
      <div className='single__card'>
        <div className='single__card__left'>
          <h1>{name}</h1>
          <img src={img_url} alt={name} />
          <h2>This is a {category} Rewards Card</h2>
        </div>
        <div className='single__card__right' key={name}>
          {error ? renderError : null}
          <h2>{description}</h2>
          <h3>Benefits: {benefits}</h3>
          <h3>Welcome Bonus! {welcome_bonus}</h3>
          <h4>APR: {apr}</h4>
          <h5>Annual Fee:  ${annual_fee} </h5>
          <button onClick={addToFavorites}>Add to my Wallet!</button>
        </div>
      </div>
    </div>
  )
}

export default SingleCard