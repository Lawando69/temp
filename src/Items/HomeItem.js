import React from "react";
import '../CSS/Home-page.css'

function HomeItem({ image, name, price}) {
    return(
        <div className="HomeItem">
            <div style={{ backgroundImage: `url(${image})` }}> </div>
            <h3> {name} </h3>
            <a> £{price}</a>
        </div>
    )
}

export default HomeItem