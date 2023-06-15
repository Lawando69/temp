import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../Assets/logo.png";
import ReorderIcon from '@mui/icons-material/Reorder';
import '../Styles/NavBar.css'


function NavBar(){
    const [openLinks, setOpenLinks] = useState(false);

    const reOrderButton = () => {
        setOpenLinks(!openLinks)
    }

    return(
        
        <div className="Navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <img src={logo} />
                <div className="hiddenLinks">
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
            <div className="rightSide">
                <NavLink to="/"> Home </NavLink>
                <NavLink to="Offers"> Offers </NavLink>
                <NavLink to="Men"> Men </NavLink>
                <NavLink to="Women"> Women </NavLink>
                <NavLink to="Kids"> Kids </NavLink>
                <NavLink to="Custom-design"> Custom design</NavLink>
                <NavLink to="About"> About </NavLink>
                <NavLink to="Contact"> Contact </NavLink>
                <button onClick={reOrderButton}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    )
}

export default NavBar