import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import styled from "styled-components"

const active = {
  // background: "0E3B43",
  color: "#312509",
  fontWeight: "bold",
  border: "#312509 6px solid"
}

const NavStyle = styled.div`
    display: flex;
    /* width: 35vh; */
    text-align: center;
    font-size: clamp(1.5rem, 3vw + 1rem, .5rem);
    align-items: center;
    justify-content: space-around;
`

const StyledLink = styled(NavLink)`
      width: 100%;
      background: #357266;
      border: #312509 6px solid;
      text-decoration: none;
      color: white;
  `


function NavBar({ currentUser, setCurrentUser }) {
  const history = useHistory()

  const handleSignInAlert = () => {
    alert("You must be logged in to access this page! Redirecting to sign up now...")
  }

  const handleLogout = () => {
    fetch("/logout", { method: "DELETE" })
      .then(r => r.json())
      .then(setCurrentUser())
      // null? instead of empty?
  }

  return (
    currentUser ?
      // NavBar for User that is logged in
      (
        <NavStyle>
          <StyledLink
            exact to="/"
            activeStyle={active}
          >
            Welcome Home, {currentUser.name}!
          </StyledLink>
          <StyledLink
            exact to="/creditcards"
            activeStyle={active}
          >
            Browse All Reward Cards
          </StyledLink>
          <StyledLink
            exact to="/savedcards"
            activeStyle={active}
          >
            My Saved Cards
          </StyledLink>
          <StyledLink
            exact to="/profile"
            activeStyle={active}
          >
            Edit {currentUser.name}'s Account
          </StyledLink>
          <StyledLink exact to="/" onClick={handleLogout}>
            Logout
          </StyledLink>
        </NavStyle>
      ) :
      (
        <NavStyle>
          <StyledLink
            exact to="/"
            activeStyle={active}
          >
            Welcome, Guest!
          </StyledLink>
          <StyledLink
            exact to="/creditcards"
            activeStyle={active}
          >
            Browse All Reward Cards
          </StyledLink>
          <StyledLink
            onClick={handleSignInAlert}
            exact to="/signup"
          >
            My Saved Cards
          </StyledLink>
          <StyledLink
            onClick={handleSignInAlert}
            exact to="/signup"
          >
            Edit Account Details
          </StyledLink>

        </NavStyle>
      )

  )
}

export default NavBar