import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom"
import Login from '../Components/Login'
<<<<<<< HEAD
import styles from './../styles/styles.js'
=======
import logo from "../styles/logo.png"

function Home({ setCurrentUser, currentUser, setCreditCards }) {
>>>>>>> 4ea98da806d4361bdd738eb2aaf5871d7bddb1c3

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
    })
}

return (
  <>
    <div styel={styles.stacks}>
      <div class="container col-xl-10 col-xxl-8 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
          <div class="col-lg-7 text-center text-lg-start">
            <h1 style={styles.keeper} class="display-4 fw-bold lh-1 mb-3">card keeper</h1>
            <h3 style={styles.honey}>we've got the money for you honey</h3>
          </div>
          <div style={styles.stacks} class="checkbox mb-3">
          </div>
        </div>

      </div>


      {currentUser ? null : <div >

        <Login setCurrentUser={setCurrentUser} />
        <div style={styles.stacks}>
          need stacks? <button style={styles.submit} onClick={renderSignUpPage}>go here</button>
        </div> </div>}
      {/* <label style={styles.checkbox}>
        <input type="checkbox" value="remember-me" /> remember me
      </label> */}
      {/* {currentUser ? <button onClick={handleLogout}>Logout!</button> : null} */}
    </div>


  </>
)

export default Home