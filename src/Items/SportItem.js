import React from "react";
import '../CSS/Sport-page.css';

function SportItem({ image, name, price}) {
    return(
        <div className="SportItem">
            <div style={{ backgroundImage: `url(${image})` }}> </div>
            <h3> {name} </h3>
            <a class="price"> £{price} </a>
        </div>
    )
}

export default SportItem