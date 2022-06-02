import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import styled from "styled-components"

const active = {
  // background: "0E3B43",
  color: "white",
  fontWeight: "bold",
  border: "white 6px solid"
}

const NavStyle = styled.div`
    display: flex;
    width: 100%;
    position: fixed;
    text-align: center;
    font-size: clamp(1.5rem, 3vw + 1rem, .5rem);
    align-items: center;
    justify-content: space-around;
`

const StyledLink = styled(NavLink)`
      width: 100%;
      height: 40px;
      background: transparent;
      border: white 6px solid;
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
            {currentUser.name} is a hot thing
          </StyledLink>
          <StyledLink
            exact to="/creditcards"
            activeStyle={active}
          >
            get stacks
          </StyledLink>
          <StyledLink
            exact to="/savedcards"
            activeStyle={active}
          >
            your deck
          </StyledLink>
          <StyledLink
            exact to="/profile"
            activeStyle={active}
          >
            change {currentUser.name}'s deets
          </StyledLink>
          <StyledLink style={{fontSize: '15px'}} exact to="/" onClick={handleLogout}>
            sad to see you go, but love to watch you leave ;)
          </StyledLink>
        </NavStyle>
      ) :
      (
        <NavStyle>
          <StyledLink
            exact to="/"
            activeStyle={active}
          >
            hey, hot thing
          </StyledLink>
          <StyledLink
            exact to="/creditcards"
            activeStyle={active}
          >
            get stacks
          </StyledLink>
          <StyledLink
            onClick={handleSignInAlert}
            exact to="/signup"
          >
            my deck
          </StyledLink>
          <StyledLink
            onClick={handleSignInAlert}
            exact to="/signup"
          >
            my deets
          </StyledLink>

        </NavStyle>
      )

  )
}

export default NavBar