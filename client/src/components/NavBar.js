import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/api/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <Wrapper>
      <Logo>
        <Link to="/home">Dog Walker</Link>
      </Logo>
      <Nav>
        {/* ternary - if there is a user, display it,
        if not suggest sign in */}
        <Button as={Link} to="/profile">
          Profile
        </Button>
        <Button as={Link} to="/pets/:petId/appointments/new">
          Appointments
        </Button>
        <Button as={Link} to="/walkers">
          Find a walker
        </Button>
        <Button as={Link} to="/pets/new">
          Add a New Animal
        </Button>
        <Button variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const Logo = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color: teal;
  margin: 0;
  line-height: 1;
  position: inherit;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: right;
  right: 8px;
`;

export default NavBar;
