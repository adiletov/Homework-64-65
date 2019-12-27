import React from 'react';
import {Nav, Navbar, NavItem, NavLink} from "reactstrap";
import logo from '../../Assets/img/apple.png';
import './Header.css';
import {NavLink as RouterNavLink} from "react-router-dom";

const Header = () => {
    return (
        <Navbar color="light" light expand="md">
            <img className="Logo-img" src={logo} alt="apple"/>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink className="link" tag={RouterNavLink} to="/pages/home">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="link" tag={RouterNavLink} to="/pages/about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="link" tag={RouterNavLink} to="/pages/contact">Contact</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="link" tag={RouterNavLink} to="/pages/musik">Musik</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="link" tag={RouterNavLink} to="/pages/admin">Admin</NavLink>
                    </NavItem>
                </Nav>
        </Navbar>
    );
};

export default Header;