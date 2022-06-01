import './App.css';
import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from "./pages/NavBar"
import Home from "./pages/Home"
import AllCards from "./pages/AllCards"
import User from "./pages/User"
import Signup from './Components/Signup'
import SingleCard from './pages/SingleCard'
import SavedCardsContainer from "./pages/SavedCardsContainer"
import EditProfile from "./Components/EditProfile"

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [creditCards, setCreditCards] = useState([])
  const [selectedCard, setSelectedCard] = useState()
  const [error, setError] = useState()

  // Authorize User is logged in
  useEffect(() => {
    fetch("/auth")
      .then(res => {
        if (res.ok) {
          res.json().then(user => setCurrentUser(user))
        }
      })

  }, [])

  const grabSelectedCard = (card) => {
    setSelectedCard(card)
  }

  const addToFavorites = (e, card) => {
    e.stopPropagation()
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        user_id: currentUser.id,
        credit_card_id: card.id
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
  }

  if (!currentUser) return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home
            setCurrentUser={setCurrentUser}
            currentUser={currentUser} />
        </Route>
        <Route exact path="/signup">
          <Signup
            setCurrentUser={setCurrentUser} />
        </Route>
      </Switch>
    </div>
  )

  return (
    <div className="App">
      <NavBar
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      <Switch>
        <Route exact path="/">
          <Home
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
            setCreditCards={setCreditCards}
          />
        </Route>
        <Route exact path="/creditcards">
          <AllCards
            error={error}
            grabSelectedCard={grabSelectedCard}
            creditCards={creditCards}
            addToFavorites={addToFavorites} />
        </Route>
        <Route exact path="/savedcards">
          <SavedCardsContainer />
        </Route>
        <Route path="/creditcards/:id">
          <SingleCard
            currentUser={currentUser}
          />
        </Route>
        <Route exact path="/profile">
          <User
            setCurrentUser={setCurrentUser}
            userDetails={currentUser} />
        </Route>
        <Route exact path="/editprofile">
          <EditProfile setCurrentUser={setCurrentUser} />
        </Route>?
      </Switch>
    </div>
  );
}

export default App;
