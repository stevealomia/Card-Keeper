import React from 'react'
import { NavLink } from 'react-router-dom'
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
    padding: 25px;
    text-align: center;
    font-size: clamp(1.5rem, 3vw + 1rem, .5rem);
    align-items: center;
    margin-bottom: 30px;
    justify-content: space-around;
`

const StyledLink = styled(NavLink)`
      width: 100%;
      padding: 12px;
      margin:  6px 6px;
      background: #357266;
      border: #312509 6px solid;
      text-decoration: none;
      color: white;
  `


function NavBar({ currentUser, setCurrentUser }) {

  const handleLogout = () => {
    fetch("/logout", { method: "DELETE" })
      .then(r => r.json())
      .then(setCurrentUser())
  }

  return (
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
  )
}

export default NavBar