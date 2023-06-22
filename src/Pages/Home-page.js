import React from "react";
import { useNavigate } from "react-router-dom";
import banner from '../Assets/Offersbanner.png'
import { HomeList } from '../ProductList/HomeList.js'
import HomeItem from '../Items/HomeItem.js'
import '../CSS/Home-page.css'

function Home(){

    const Navigate = useNavigate()

    const Offers = () => {
        Navigate("/Offers")
    }
    return(
        <div className="Home">
            <img src={banner} onClick={Offers} alt="Banner" />
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