import React from "react";
import { OffersList } from '../ProductList/OffersList.js';
import OffersItem from '../Items/OffersItem.js';
import '../CSS/Offers-page.css';

function Offers(){

    return(
        <div className="Offers">
            <div className="OffersList">
                {OffersList.map((menuItem, key) =>{
                    return (
                        <OffersItem
                            key={key}
                            image={menuItem.image}
                            name={menuItem.name}
                            originprice={menuItem.originprice}
                            price={menuItem.price}
                        />
                    );
                })}
            </div>
        </div>
        
    )
}

export default Offers