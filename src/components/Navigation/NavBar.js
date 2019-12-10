import React, { useState, Component } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

class NavBar extends Component  {
    render() {
    return (
        <div>
        <Nav tabs>
            <NavItem>
            <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="#">Current Shoe</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="#">Shoes</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="#">Races</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="#">Login</NavLink>
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