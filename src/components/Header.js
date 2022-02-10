import React from "react";
import logo from "../assets/Elements/logo.png";
import 'boxicons'
import wallet from "../assets/Elements/Design-2_0026_Layer-17.png"
import "../styles/Header.css";

const Header = ()=>{
    return(
        <div className="header">
            <div className="sidebar-logo">
                <img src={logo} style={{height:"8vh"}} />
            </div>

            <div className="header-right">
                
                <div className="search-bar">
                    <input id='search-game' type="text" placeholder="Search games..." />
                    <box-icon id="search-game-icon" name='search'></box-icon>
                </div>

                <div className="connect-wallet">
                    <img className="connect-wallet-icon" src={wallet}/>
                    <button className="connect-wallet-button">Connect Wallet</button>
                </div>

            </div>
        </div>
    )
}

export default Header