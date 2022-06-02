import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom"
import Login from '../Components/Login'
import styles from './../styles/styles.js'
function Home({ setCurrentUser, currentUser, setCreditCards }) {


  const history = useHistory()



  const renderSignUpPage = () => {
    history.push("/signup")
  }


  return (
    <>
      <div style={styles.home}>
        <h1 style={styles.keeper} className="display-4 fw-bold lh-1 mb-3">card keeper</h1>
        <h3 style={styles.honey}>we've got the money for you honey</h3>

        {currentUser ?
          <div>
            <h1>Welcome back, {currentUser.name}!</h1>

            <h3>So glad you made it!  Let's get started...</h3>
            <p>  Click on the "Browse All Reward Cards" tab and use our favorites tool to add and compare rewards credit cards and find the right match based on benefits that matter most to you! </p>
          </div>
          :
          <>
            <Login setCurrentUser={setCurrentUser} />
            <div style={styles.stacks}> need stacks? <button style={styles.submit} onClick={renderSignUpPage}>go here</button>
            </div>
          </>
        }
      </div>
    </>
  )
}

export default Home