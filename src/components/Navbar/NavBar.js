import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky='top'>
                <Navbar.Brand><NavLink to='/'>My Blog</NavLink></Navbar.Brand>
                <Nav>
                    <NavLink to='/' exact activeStyle={{ color: '#4e5559' }}>Quotes</NavLink>
                </Nav>
                <Nav style={{float: 'right'}}>
                    <NavLink to='/add-quote' exact activeStyle={{ color: '#4e5559' }}>Submit new quote</NavLink>
                </Nav>
            </Navbar>
        </>
    )
}

export default NavBar;
