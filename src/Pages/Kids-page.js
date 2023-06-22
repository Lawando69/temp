import React from "react";
import { useNavigate } from "react-router-dom";
import { KidList } from '../ProductList/kidList.js';
import KidItem from '../Items/KidItem.js';
import banner from '../Assets/Offersbanner.png'
import '../CSS/Kids-page.css'

function Kid(){

    const Navigate = useNavigate()

    const Offers = () => {
        Navigate("/Offers")
    }
    return(
        <div className="Kid">
            <img src={banner} onClick={Offers} alt="Banner" />
            <div className="KidList">
                {KidList.map((menuItem, key) => {
                    return (
                        <KidItem
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

export default Kid