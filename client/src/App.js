import './App.css';
import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from "./pages/NavBar"
import Home from "./pages/Home"
import AllCards from "./pages/AllCards"
import User from "./pages/User"
import Signup from './Components/Signup'
// import Login from './Components/Login.js'
import CardOffer from './pages/CardOffer';

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  // Authorize User is logged in
  useEffect(() => {
    fetch("/auth")
      .then(res => {
        if (res.ok) {
          res.json().then(user => setCurrentUser(user))
        }
      })
  }, [])

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
        <Route exact path="/allcards">
          <AllCards />
        </Route>
        <Route path="/cardoffer">
          <CardOffer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
