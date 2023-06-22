import React from "react";
import { useNavigate } from "react-router-dom";
import { SportList } from '../ProductList/SportList.js';
import SportItem from '../Items/SportItem.js';
import banner from '../Assets/Offersbanner.png'
import '../CSS/Sport-page.css'

function Sport(){

    const Navigate = useNavigate()

    const Offers = () => {
        Navigate("/Offers")
    }
    return(
        <div className="Sport">
            <img src={banner} onClick={Offers} alt="Banner" />
            <div className="SportList">
                {SportList.map((menuItem, key) => {
                    return (
                        <SportItem
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

export default Sport