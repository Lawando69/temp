import React from "react";
import { NavLink } from "react-router-dom"
import logo from "../Assets/logo.png"
import '../Styles/NavBar.css'

function NavBar(){
    return(
        
        <div className="Nav-Bar">
            <div className="Left-Side">
                <img src={logo} />
            </div>
            <div className="Right-Side">
                <NavLink to="/"> Home </NavLink>
                <NavLink to="Offers"> Offers </NavLink>
                <NavLink to="Men"> Men </NavLink>
                <NavLink to="Women"> Women </NavLink>
                <NavLink to="Kids"> Kids </NavLink>
                <NavLink to="Custom-design"> Custom design</NavLink>
                <NavLink to="About"> About </NavLink>
                <NavLink to="Contact"> Contact </NavLink>
            </div>
        </div>
    )
}

export default NavBar