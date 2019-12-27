import React, {Component} from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem} from "reactstrap";
import {NavLink} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Homework-64</NavbarBrand>
                    <NavbarToggler />
                    <Collapse  navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink to="/task1">Task-1</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/task2">Task-2</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/task3">Task-3</NavLink>
                            </NavItem>
                        </Nav>
                        <NavbarText>Adilet uulu Nuradil</NavbarText>
                    </Collapse>
                </Navbar>
            </header>
        );
    }
}

export default Header;