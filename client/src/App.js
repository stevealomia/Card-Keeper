import './App.css';
import React, { useEffect, useState } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import NavBar from "./Components/NavBar"
import Home from "./Components/Home"
import AllCards from "./Components/AllCards"
import User from "./Components/User"
import Signup from './Components/Signup.js'
import Login from './Components/Login.js'

function App() {
// require('react-dom');
// window.React2 = require('react');
// console.log(window.React1 === window.React2);

  const [currentUser, setCurrentUser] = useState("")
  const [showSignUp, setShowSignUp] = useState(false)
  // const history = useHistory()

// Authorize User is logged in
  useEffect(() => {
    fetch("/auth")
      .then(res => {
        if (res.ok) {
          res.json().then(user => setCurrentUser(user))
        }
      })
  }, [])

  // Log User Out
  const handleLogout = () => {
    fetch("/logout", { method: "DELETE" })
      .then(r => r.json())
      .then(setCurrentUser(""))
  }

  // Toggle Sign Up Form
  const signUpForm = () => {
    // history.push("/signup")
    setShowSignUp(!showSignUp)
  }

  if (!currentUser) return (
    <>
      <Login setCurrentUser={setCurrentUser} />
      Don't have an account? <button onClick={signUpForm}>Click to Sign Up!</button>
      {showSignUp ? <Signup setCurrentUser={setCurrentUser} /> : null}
    </>)

  return (
    <div className="App">

      <h1>Hi {currentUser.name}!</h1>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/profile">
          <User setCurrentUser={setCurrentUser} userDetails={currentUser}/>
        </Route>
        <Route exact path="/allCards">
          <AllCards />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>


      {/* <Signup /> */}
      {/* <Login setCurrentUser={setCurrentUser}/> */}

      <br />
      <button onClick={handleLogout}>Logout!</button>
    </div>
  );
}

export default App;
