import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom"
import Login from '../Components/Login'
import logo from "../styles/logo.png"

function Home({ setCurrentUser, currentUser, setCreditCards }) {

  const history = useHistory()

  useEffect(() => {
    fetch('/credit_cards')
      .then((r) => r.json())
      .then((cards) => {
        setCreditCards(cards)
      })
  }, [])

  const renderSignUpPage = () => {
    history.push("/signup")
  }

  const loginAsGuest = () => {
    fetch('/guest')
    .then((r) => r.json())
    .then(data => {
      setCurrentUser(data)
      history.push("/")
    } )
  }

  return (
    <>
      {/* Think this could be a cool logo or graphic */}
      <img src={logo}/>
      <h2>Your number one resource to hunt for the credit card that matches your lifestyle!  </h2>

      {currentUser ?
        <div>
          <h1>Welcome back, {currentUser.name}!</h1>

          <h3>So glad you made it!  Let's get started...</h3>
          <p>  Click on the "Browse All Reward Cards" tab and use our favorites tool to add and compare rewards credit cards and find the right match based on benefits that matter most to you! </p>
        </div>
        :
        <div>
          <p>Log in below and let's rack up some rewards!</p>
          <p>Just Browsing? </p>
            <button onClick={loginAsGuest}>Sign in as guest! </button>
          <Login setCurrentUser={setCurrentUser} />
          Don't have an account? <button onClick={renderSignUpPage}>Click to Sign Up!</button>
        </div>}
    </>
  )
}

export default Home