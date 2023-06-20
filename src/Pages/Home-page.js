import React from "react";
import { useNavigate } from "react-router-dom";
import banner from '../Assets/Home-banner.png'
import '../CSS/Home-page.css'

function Home(){

    const Navigate = useNavigate()

    const Sport = () => {
        Navigate("/Sport")
    }
    return(
        <div className="Home">
            <img className="Home-banner" src={banner} onClick={Sport} alt="Banner" />
            <div className="HeaderContainer">
                <h1> </h1>
            </div>
        </div>
    )
}

export default Home