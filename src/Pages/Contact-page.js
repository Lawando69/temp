import React from "react";
import ContactForm from "../Contact/Contact.js"
import "../CSS/Contact-page.css"

export default function Contact(){

    return(
        <div className="Contact">
            <div className="Contactform">
                <div>
                    <div className="Opening-hours">
                    <h1> Opening hours: </h1>
                        <p>
                            Mon - Fri  8 am - 8 pm
                        </p>
                        <p>
                            Sat  11 am - 7 pm
                        </p>
                        <p>
                            Sun 11 am - 5 pm
                        </p>
                    </div>
                    <div className="Address">
                    <h1> Address: </h1>
                        <p>
                            123 high way,
                        </p>
                        <p>
                            Uxbridge,
                        </p>
                        <p>
                            UB8 9NA
                        </p>
                    </div>
                </div>
                <ContactForm/>
                <div className="Map">
                    <iframe
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAHtXUDubRYudMVGGZ-vdlX9MX0O6UJpms
                            &q=272%20Gunnersbury%20Ave,%20Chiswick,%20London%20W4%205QB">
                    </iframe>
                </div>
            </div>
        </div>
    );
}






    
     
        
            