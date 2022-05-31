import './App.css';
import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from "./pages/NavBar"
import Home from "./pages/Home"
import AllCards from "./pages/AllCards"
import User from "./pages/User"
import Signup from './Components/Signup'
// import Login from './Components/Login.js'
import SingleCard from './pages/SingleCard'
import SavedCardsContainer from "./pages/SavedCardsContainer"

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [creditCards, setCreditCards] = useState([])
  const [selectedCard, setSelectedCard] = useState()

  useEffect(() => {
    fetch('/credit_cards')
      .then((r) => r.json())
      .then((cards) => {
        // console.log(cards)
        setCreditCards(cards)
      })
  }, [])

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
    setSelectedCard(card)
    console.log(card)
    // make a post request to /favorite_cards
  }
  console.log(selectedCard)


  if (!currentUser) return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home setCurrentUser={setCurrentUser} currentUser={currentUser} />
        </Route>
        <Route exact path="/signup">
          <Signup setCurrentUser={setCurrentUser} />
        </Route>
      </Switch>
    </div>
  )

  return (
    <div className="App">
      <h1>Hi {currentUser.name}!</h1>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home setCurrentUser={setCurrentUser} currentUser={currentUser} />
        </Route>
        <Route exact path="/profile">
          <User setCurrentUser={setCurrentUser} userDetails={currentUser} />
        </Route>
        <Route exact path="/savedcards">
          <SavedCardsContainer />
        </Route>
        <Route exact path="/creditcards">
          <AllCards 
          grabSelectedCard={grabSelectedCard} 
          creditCards={creditCards} addToFavorites={addToFavorites} />
        </Route>
        <Route path="/creditcards/:id">
          <SingleCard currentUser={currentUser} selectedCard={selectedCard} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
