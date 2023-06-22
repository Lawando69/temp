import React from "react";
import '../CSS/Kids-page.css';

function KidItem({ image, name, price}) {
    return(
        <div className="kidItem">
            <div style={{ backgroundImage: `url(${image})` }}> </div>
            <h3> {name} </h3>
            <a class="price"> £{price} </a>
        </div>
    )
}

export default KidItem