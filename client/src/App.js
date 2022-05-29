import './App.css';
import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from "./Components/NavBar"
import Home from "./Components/Home"
import AllCards from "./Components/AllCards"
import User from "./Components/User"
import Signup from './Components/Signup.js'
// import Login from './Components/Login.js'

function App() {
  const [currentUser, setCurrentUser] = useState("")

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
        <Route exact path="/allCards">
          <AllCards />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
