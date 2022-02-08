import React from "react";
import logo from "../assets/Elements/logo.png";
import "../styles/Header.css";

const Header = ()=>{
    return(
        <div className="header">
            <div className="sidebar-logo">
                <img src={logo} style={{height:"8vh"}} />
            </div>
            <div className="header-right">
                <input id='search-game' type="text" placeholder="Search games..." />
                <button className="connect-wallet">Connect Wallet</button>
            </div>
        </div>
    )
}

export default Header