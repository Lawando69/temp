import React from "react";
import '../CSS/Men-page.css';

function MenItem({ image, name, price}) {
    return(
        <div className="WomenItem">
            <div style={{ backgroundImage: `url(${image})` }}> </div>
            <h3> {name} </h3>
            <a class="price"> £{price} </a>
        </div>
    )
}

export default MenItem