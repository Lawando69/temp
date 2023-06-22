import React from "react";
import { useNavigate } from "react-router-dom";
import { MenList } from '../ProductList/MenList.js';
import MenItem from '../Items/MenItem.js';
import banner from '../Assets/Offersbanner.png'
import '../CSS/Men-page.css'

function Men(){

    const Navigate = useNavigate()

    const Offers = () => {
        Navigate("/Offers")
    }
    return(
        <div className="Men">
            <img src={banner} onClick={Offers} alt="Banner" />
            <div className="MenList">
                {MenList.map((menuItem, key) => {
                    return (
                        <MenItem
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

export default Men