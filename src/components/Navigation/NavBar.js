import React, { useState, Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class NavBar extends Component  {
    render() {
    return (
        <div>
        <Nav tabs>
            <NavItem>
            <NavLink className="nav-link" href="/">Home</NavLink>
            </NavItem>
            <NavItem>
            <NavLink className="nav-link" href="/current-shoes">Current Shoes</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="#">Shoes</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="#">Races</NavLink>
            </NavItem>
            <NavItem>
            <NavLink className="nav-link" href="/login">Login</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="#">Registration</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="#">Logout</NavLink>
            </NavItem>
        </Nav>
        </div>
    );
 }
}

export default NavBar;