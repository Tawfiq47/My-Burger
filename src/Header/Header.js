import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import './Header.css'
import Logo from '../assets/logo.png';


const Header = () => {
    return (
        <div className="Navigation">
            <Navbar style={{ background: "#D70F64", height: "60px" }}>
                <NavbarBrand href="#" className="mr-auto ml-md-5 Brand"><img src={Logo} alt="Logo" width="90px" /></NavbarBrand>
                <Nav className="mr-md-5">
                    <NavItem>
                        <NavLink exact to="/" className="NavLink">Burger Bulder</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="/orders" className="NavLink">Orders</NavLink>
                    </NavItem>  

                </Nav>
            </Navbar>
        </div>
    )
}

export default Header