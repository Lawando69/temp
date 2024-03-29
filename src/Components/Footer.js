import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../Styles/Footer.css'

function Footer(){
    return(
        <div className="Footer">
            <div className="SocialMedia">
                <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
                <a> &copy; 2023 T-shirts.com </a>
            </div>
        </div>
    )
}

export default Footer