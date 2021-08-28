import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Links.css';

const Links = () => {
    return (
        <>
            <Navbar bg="secondary" variant="dark" className="flex-column nav">
                <Nav className="flex-column nav">
                    <NavLink to='/' exact activeStyle={{ color: '#c6cacc' }}> All Quotes</NavLink>
                    <NavLink to='/quotes/star-wars'  activeStyle={{ color: '#c6cacc' }}>Star Wars</NavLink>
                    <NavLink to='/quotes/famous-people'  activeStyle={{ color: '#c6cacc' }}>Famous people</NavLink>
                    <NavLink to='/quotes/saying'  activeStyle={{ color: '#c6cacc' }}>Saying</NavLink>
                    <NavLink to='/quotes/humor'  activeStyle={{ color: '#c6cacc' }}>Humor</NavLink>
                    <NavLink to='/quotes/motivational'  activeStyle={{ color: '#c6cacc' }}>Motivational</NavLink>
                </Nav>
            </Navbar>
        </>
    )
}

export default Links;
