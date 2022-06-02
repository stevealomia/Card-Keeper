// FIX  REFRESEH USER PROFILE SO I DONT LOSE STATE
// Single card reroute when not logged in

import './App.css';
import React, { useEffect, useState } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
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

  const history = useHistory()

  // Authorize User is logged in
  useEffect(() => {
    fetch("/auth")
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            setCurrentUser(user)
            // window.localStorage.setItem("logged-in-user", JSON.stringify(currentUser))
          })
        }
      })
  }, [])



  // useEffect(()=> {
  //   fetch("/users")
  //   .then(res => {
  //     if (res.ok) {
  //       res.json().then(user => setCurrentUser(user))
  //     }
  //   })
  // })

  useEffect(() => {
    fetch('/credit_cards')
      .then((r) => r.json())
      .then((cards) => {
        setCreditCards(cards)
      })
  }, [])

  const grabSelectedCard = (card) => {
    setSelectedCard(card)
  }

  const addToFavorites = (e, card) => {
    e.stopPropagation()
    console.log(currentUser)
    if(currentUser){
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
    }else{
      alert("You need an Account to add this card to your Wallet!  Redirecting to Sign Up Page...")
      history.push("/signup")
    }
  }

  // We will need this for every top level child based on if we want user to see this only upon login
  // if (!currentUser)


  return (
    <div>
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
            setCreditCards={setCreditCards}
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
            currentUser={currentUser} 
            />
        </Route>
        <Route exact path="/editprofile">
          <EditProfile setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path="/signup">
          <Signup
            setCurrentUser={setCurrentUser} />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
