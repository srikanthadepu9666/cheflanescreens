import React from "react";
import logo from '../assets/logo.svg';
import './header.css'
const Header = () => {

    return (
        <>
            <div className="header_container">
                <div className="header-logo">
                    <img src={logo} alt="img"></img>
                </div>
                <div className="buttons-container">
                    <button className="chef_btn"  onClick={()=>console.log("chef clicked")}>I am a chef </button>
                    <button className="chef_btn"  onClick={()=>console.log(" customer clicked")}>I am a customer </button>
                </div>
            </div>
        </>
    )
}

export default Header