import React from "react";
import '../CSS/About-page.css';
import Product01 from '../Assets/AboutList1.png'
import Product02 from '../Assets/AboutList2.png'

function About(){
    return(
        <div className="About">
            <h1>About Us</h1>
            <div className="About-content">
                <p>
                    Welcome to T-Shirt, your one-stop destination for all things trendy and stylish! We are a dedicated online store that specializes in bringing you an irresistible collection of t-shirts that will make you stand out from the crowd. Our passion for fashion and love for comfortable clothing have driven us to curate a diverse range of designs, colors, and sizes to cater to every individual's unique taste and preference. Whether you're looking for witty slogans, eye-catching graphics, or minimalist elegance, we've got you covered. Each t-shirt is crafted with care, using high-quality fabrics that guarantee both durability and comfort. At T-Shirt, we believe that expressing your personality through fashion should be fun and effortless, and our goal is to provide you with a seamless shopping experience. Join us on this exciting journey and explore our exceptional collection of t-shirts that are designed to make a statement.
                </p>
            </div>
            <div className="Bottom-part">
                
                <img className="First_image" src={Product01} alt="Image" />
                <img className="Second_image" src={Product02} alt="Image" />

            </div>
            <div className="FeedbackSec">
                    <button className="FeedbackButton">
                    <a href="https://forms.office.com/e/rt6ztLvafS">
                        Leave a Feedback
                    </a>
                </button>
            </div>
        </div>
    )
}

export default About