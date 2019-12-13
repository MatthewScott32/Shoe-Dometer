import React, { useState, Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class NavBar extends Component  {
    handleLogout= () => {
        this.props.clearUser();
        this.props.history.push('/login');
    }

    render() {
    return (
        <div>
        <Nav tabs>
            <NavItem>
            <NavLink className="nav-link" href="/home">Home</NavLink>
            </NavItem>
            <NavItem>
            <NavLink className="nav-link" href="/current-shoes">Current Shoes</NavLink>
            </NavItem>
            <NavItem>
            <NavLink className="nav-link" href="/shoes">Shoes</NavLink>
            </NavItem>
            <NavItem>
            <NavLink className="nav-link" href="/races">Races</NavLink>
            </NavItem>
            <NavItem>
            <NavLink className="nav-link" href="/register">Registration</NavLink>
            </NavItem>
            <NavItem>
            <NavLink className="nav-link" href="/login">Login</NavLink>
            </NavItem>
            <NavItem>
            <NavLink className="nav-link" onClick={this.handleLogout} href="/login">Logout</NavLink>
            </NavItem>
        </Nav>
        </div>
    );
 }
}

export default NavBar;