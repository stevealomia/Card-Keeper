import './App.css'; 
import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from "./pages/NavBar"
import Home from "./pages/Home"
import AllCards from "./pages/AllCards"
import User from "./pages/User"
import Signup from './Components/Signup'
// import Login from './Components/Login.js'
import SingleCard from './pages/SingleCard';

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [creditCards, setCreditCards] = useState([])
  const [selectedCard, setSelectedCard] = useState()

  useEffect(() => {
      fetch('/credit_cards')
          .then((r) => r.json())
          .then((cards) => setCreditCards(cards))
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
        <Route exact path="/creditCards">
          <AllCards grabSelectedCard={grabSelectedCard} creditCards={creditCards} />
        </Route>
        <Route path="/creditCards/:id">
          <SingleCard selectedCard={selectedCard}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
