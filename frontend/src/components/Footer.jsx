import "../styles/Footer.css";
import React from 'react';
import { FaHome, FaMailBulk,FaFacebook,FaInstagram } from "react-icons/fa";

const Footer = () => {
    return(
        <div className="footer">
            <div className ="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{color: "#fff", marginRight:"2rem"}} />
                        <div>
                            <p> 123 hdsushuds </p>
                            <p> Brazil </p>
                        </div>
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem"}}/>
                            DSJHJHAS@GMAIL.COM
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About he company</h4>
                    <p>Essa é uma empress organizacional, sem fins lucrativos, que tem a intencçao de ajudar bla bla bal</p>
                    <div className="social">
                        <FaFacebook
                            size={20}
                            style={{ color: "#fff",
                            marginRight: "2rem"}}/>
                        <FaInstagram
                            size={20}
                            style={{ color: "#fff",
                            marginRight: "2rem"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
