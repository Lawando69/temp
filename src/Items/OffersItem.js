import React from "react";
import '../CSS/Offers-page.css'

function OffersItem({ image, name, originprice, price}) {
    return(
        <div className="OffersItem">
            <div style={{ backgroundImage: `url(${image})` }}> </div>
            <h3> {name} </h3>
            <span class="original-price"> £{originprice} </span>
            <a class="discounted-price"> £{price} </a>
        </div>
    )
}

export default OffersItem