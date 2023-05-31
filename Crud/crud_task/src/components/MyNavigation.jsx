import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export function MyNavigation() {
  return (
    <div>
        <Navbar bg="dark" >
        <Container>
          <NavLink className="nav-link fs-3 text-light">My Gallery</NavLink>
          <Nav className="ms-auto fs-5">
            <NavLink className="nav-link text-light" to="/home">Home</NavLink>
            <NavLink className="nav-link text-light" to="/cars">Cars</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
