import React from "react";
import { NavLink } from "react-router-dom"
import logo from ""

function NavBar(){
    return(
        <div className="Nav-Bar">
          <NavLink to="/"> Home </NavLink>
          <NavLink to="Offers"> Offers </NavLink>
          <NavLink to="Men"> Men </NavLink>
          <NavLink to="Women"> Women </NavLink>
          <NavLink to="Kids"> Kids </NavLink>
          <NavLink to="Custom-design"> Custom design</NavLink>
          <NavLink to="About"> About </NavLink>
          <NavLink to="Contact"> Contact </NavLink>
        </div>
    )
}

export default NavBar