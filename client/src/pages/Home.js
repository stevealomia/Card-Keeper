import React from 'react'
import { useHistory } from "react-router-dom"
import Login from '../Components/Login'

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
      <div class="container col-xl-10 col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 text-center text-lg-start">
        <h1 class="display-4 fw-bold lh-1 mb-3">Choose What Is Best For You!</h1>
        
        
      </div>
      
          <div class="checkbox mb-3">
          
          </div>
         
      </div>
    </div>
  
  
      {currentUser ? null : <div>
        Join Us, to find the best credit cards for you!
        <Login  setCurrentUser={setCurrentUser} />
        Don't have an account? <button onClick={renderSignUpPage}>Click to Sign Up!</button>
      </div>}
      <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
      {currentUser ? <button onClick={handleLogout}>Logout!</button> : null}
    </>
  )
}

export default Home