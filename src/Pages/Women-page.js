import React from "react";
import { useNavigate } from "react-router-dom";
import { WomenList } from '../ProductList/WomenList.js';
import WomenItem from '../Items/WomenItem.js';
import banner from '../Assets/Offersbanner.png'
import '../CSS/Women-page.css'

function Women(){

    const Navigate = useNavigate()

    const Offers = () => {
        Navigate("/Offers")
    }
    return(
        <div className="Women">
            <img src={banner} onClick={Offers} alt="Banner" />
            <div className="WomenList">
                {WomenList.map((menuItem, key) => {
                    return (
                        <WomenItem
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

export default Women