import React from "react";
import footerimg from "../images/cta-bg.jpg";
import "../allcss/Footer.css";
const Footer=()=>{
    return(
        <div className="footer">
            <img src={footerimg} alt="footer" className="footer__img"/>
            <span className="copyright">copyright @ 2023 programmer Bikash Panda. All rights Reserved.</span>
        </div>
    )
}
export default Footer;