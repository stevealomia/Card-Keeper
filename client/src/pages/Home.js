import React from 'react'
import { useHistory } from "react-router-dom"
import Login from '../Components/Login'
function Home({ setCurrentUser, currentUser }) {

  const history = useHistory()

  const renderSignUpPage = () => {
    history.push("/signup")
  }

  return (
    <>
      <div className='home'>
        <div className="main__title">
          <h1 >Card Keeper</h1>
          <h4> We've got the money for you honey</h4>
        </div>
        <div>

        </div>
        <div className='home__info'>
          <p className='home__info__left'>Card Keeper is here to find the best credit card deals online and allow you to save the cards that best fit your lifetstyle.  We are dedicated to finding the best bonus offers upon credit card approval! So get out there and start saving!</p>
          <div className='home__info__right'>
            <h2>Ready to Collect?</h2>
            {currentUser ? <p>Browse our Rewards Cards Above!</p> : <p>Log In and Browse our Rewards Cards Above!</p>}
          </div>

        </div>
        {currentUser ?
          null :
          <div className="login__container">
            <Login setCurrentUser={setCurrentUser} />
            <h1>or</h1>
            <div className='signup__link'>  <button onClick={renderSignUpPage}>Sign up here!</button>
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default Home