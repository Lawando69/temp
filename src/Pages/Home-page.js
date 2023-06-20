import React from "react";
import { useNavigate } from "react-router-dom";
import banner from '../Assets/Home-banner.png'
import '../CSS/Home-page.css'
import { HomeList } from '../ProductList/HomeList.js'
import HomeItem from '../Components/HomeItem.js'
import '../CSS/Home-page.css'

function Home(){

    const Navigate = useNavigate()

    const Sport = () => {
        Navigate("/Sport")
    }
    return(
        <div className="Home">
            <img src={banner} onClick={Sport} alt="Banner" />
            <div className="HomeList">
               {HomeList.map((menuItem, key) => {
                    return (
                        <HomeItem
                            key={key}
                            image={menuItem.image} 
                            name={menuItem.name} 
                            price={menuItem.price} 
                        />
                    );
               })} 
            </div>
        </div>
    )
}

export default Home