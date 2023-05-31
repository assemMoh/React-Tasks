import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink, Outlet } from 'react-router-dom'

export function MyNavigation() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">My Gallery</Navbar.Brand>
            <Nav className="justify-content-end">
                <NavLink className="nav-link" to="/home">Home</NavLink>
                <NavLink className="nav-link" to="/viewCars">Products</NavLink>
                <NavLink className="nav-link" to="/login">Login</NavLink>
                <NavLink className="nav-link" to="/filter">Filter</NavLink>
                {/* <NavLink className="nav-link" to="/2">Car details</NavLink> */}
            </Nav>
            </Container>
        </Navbar>
        <Outlet />
    </div>
  )
}
