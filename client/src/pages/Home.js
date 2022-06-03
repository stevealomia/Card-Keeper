import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom"
import Login from '../Components/Login'
import styles from './../styles/styles.js'
import NavBar from './NavBar'
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
        null
          :
          <>
            <Login setCurrentUser={setCurrentUser} />
            <div style={styles.stacks}> ready to make it rain? <button style={styles.submit} onClick={renderSignUpPage}>get started here</button>
            </div>
          </>
        }
      </div>
    </>
  )
}

export default Home