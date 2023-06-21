import React from "react";
import '../CSS/Women-page.css';

function WomenItem({ image, name, price}) {
    return(
        <div className="WomenItem">
            <div style={{ backgroundImage: `url(${image})` }}> </div>
            <h3> {name} </h3>
            <a class="price"> £{price} </a>
        </div>
    )
}

export default WomenItem