import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <hr
                style={{
                width: "90%",
                marginTop: 20
            }}/>
            <span className="name">
                Made by{" "}
                <a href="https://github.com/itsyash009" target="__blank">
                    Yash Baranwal
                </a>
            </span>
            <div className="iconContainer">
               
                    <a href="https://www.instagram.com/itsyash009/" target="__blank">
                        <i className=" insta fab fa-instagram"></i>
                    </a>
    
               
                    <a href="https://my-portfolio-922a3.web.app/" target="__blank">
                        <i className=" portfolio fas fa-user-secret"></i>
                    </a>
          
               
                    <a href="https://www.linkedin.com/in/yash-baranwal-0b784a1a9/" target="__blank">
                        <i className=" Linkedin fab fa-linkedin fa-2x"></i>
                    </a>
         
            </div>
        </div>
    );
};

export default Footer;
