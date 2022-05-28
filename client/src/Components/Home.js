import React, { useState } from 'react'
import {useHistory} from "react-router-dom"
import Login from './Login'


function Home({ setCurrentUser }) {
  // const [showSignUp, setShowSignUp] = useState(false)
  const history = useHistory()

  // Toggle Sign Up Form
  const signUpForm = () => {
    history.push("/signup")
    // setShowSignUp(!showSignUp)
  }

  // Log User Out
  const handleLogout = () => {
    fetch("/logout", { method: "DELETE" })
      .then(r => r.json())
      .then(setCurrentUser())
  }


  {/* ACTUALLY WILL RETURN HOME PAGE AND HAVE THIS CONDITIONAL LOGIC IN IT!!!!! */ }
  
  // <br />
  // <button onClick={handleLogout}>Logout!</button>
  
  
  return (
    <div>
      Welcome here we will dislay what this webist does. feel free to click the links above and navigate around

      <Login setCurrentUser={setCurrentUser} />
      Don't have an account? <button onClick={signUpForm}>Click to Sign Up!</button>
    </div>
  )
}

export default Home