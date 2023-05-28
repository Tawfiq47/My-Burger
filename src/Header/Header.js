import React from "react"; 
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap"; 
import './Header.css'
import Logo from '../assets/logo.png';


const Header = () => {
    return (
        <div className="Navigation">
         <Navbar style={{background:"#D70F64", height:"60px"}}>
            <NavbarBrand href="#" className="mr-auto ml-md-5 Brand"><img src={Logo} alt="Logo" width="90px"/></NavbarBrand>
            <Nav className="mr-md-5">
                <NavItem>
                    <NavLink className="NavLink" href="#">Home</NavLink>
                </NavItem>
            </Nav>
         </Navbar>
        </div>
    )
}

export default Header