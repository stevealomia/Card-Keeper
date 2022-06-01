import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom"
import Login from '../Components/Login'

function Home({ setCurrentUser, currentUser, setCreditCards }) {

  const history = useHistory()

  useEffect(() => {
    fetch('/credit_cards')
      .then((r) => r.json())
      .then((cards) => {
        console.log(cards)
        setCreditCards(cards)
      })
  }, [])


  const renderSignUpPage = () => {
    history.push("/signup")
  }



  // Log User Out
  const handleLogout = () => {
    fetch("/logout", { method: "DELETE" })
      .then(r => r.json())
      .then(setCurrentUser())
  }

  return (
    <>
      {/* Think this could be a cool logo or graphic */}
      <h1 className="display-4 fw-bold lh-1 mb-3">Card Keeper</h1>
      <h2>Your number one resource to hunt for the credit card that matches your lifestyle!  </h2>

      {currentUser ?
        <div>
          <h1>Welcome back, {currentUser.name}!</h1>

          <h3>So glad you made it!  Let's get started...</h3>
          <p>  Click on the "Browse All Reward Cards" tab and use our favorites tool to add and compare rewards credit cards and find the right match based on benefits that matter most to you! </p>
          <button onClick={handleLogout}>Logout</button>
        </div>
        :
        <div>
          <p>Log in below and let's rack up some rewards!</p>
          <Login setCurrentUser={setCurrentUser} />
          Don't have an account? <button onClick={renderSignUpPage}>Click to Sign Up!</button>
        </div>}
    </>
  )
}

export default Home