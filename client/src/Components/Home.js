import React from 'react'
import { useHistory } from "react-router-dom"
import Login from './Login'

function Home({ setCurrentUser, currentUser }) {
  const history = useHistory()

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
      {currentUser ? null : <div>
        Welcome here we will dislay what this webist does. feel free to click the links above and navigate around
        <Login setCurrentUser={setCurrentUser} />
        Don't have an account? <button onClick={renderSignUpPage}>Click to Sign Up!</button>
      </div>}
      {currentUser ? <button onClick={handleLogout}>Logout!</button> : null}
    </>
  )
}

export default Home