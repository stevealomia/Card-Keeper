import React from 'react'
import { NavLink } from 'react-router-dom'

const active = {
  opacity: 1,
  backgroundColor: "grey",
  fontWeight: "bold",
  color: "white",
  border: "white 3px solid"
}


function NavBar({ currentUser, setCurrentUser }) {

  const handleSignInAlert = () => {
    alert("You must be logged in to access this page! Redirecting to sign up now...")
  }

  const handleLogout = () => {
    fetch("/logout", { method: "DELETE" })
      .then(r => r.json())
      .then(setCurrentUser())
  }

  return (
    currentUser ?
      // NavBar for User that is logged in
      (
        <div className="nav__style">
          <NavLink
            className="nav__tab home__tab"
            exact to="/"
            activeStyle={active}
          >
            {currentUser.name}'s Home
          </NavLink>
          <NavLink
            className="nav__tab cards__tab"
            exact to="/creditcards"
            activeStyle={active}
          >
            Browse Rewards
          </NavLink>
          <NavLink
            className="nav__tab saved__tab"
            exact to="/savedcards"
            activeStyle={active}
          >
            My Saved Cards
          </NavLink>
          <NavLink
            className="nav__tab profile__tab"
            exact to="/profile"
            activeStyle={active}
          >
            {currentUser.name}'s Profile
          </NavLink>
          <NavLink
            className="nav__tab logout__tab"
            exact to="/"
            onClick={handleLogout}
          >
            Logout
          </NavLink>
        </div>
      ) :
      (
        <div className="nav__style">
          <NavLink
            className="nav__tab home__tab"
            exact to="/"
            activeStyle={active}
          >
            Home
          </NavLink>
          <NavLink

            className="nav__tab cards__tab"
            exact to="/creditcards"
            activeStyle={active}
          >
            Browse Rewards
          </NavLink>
          <NavLink
            className="nav__tab saved__tab"
            onClick={handleSignInAlert}
            exact to="/signup"
          >
            My Saved Cards
          </NavLink>
          <NavLink
            className="nav__tab profile__tab"
            onClick={handleSignInAlert}
            exact to="/signup"
          >
            Details
          </NavLink>

        </div>
      )

  )
}

export default NavBar