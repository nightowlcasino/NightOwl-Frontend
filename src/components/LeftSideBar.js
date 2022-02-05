import React from "react";
import logo from "../assets/Elements/logo.png";
import sidebar from "../assets/Elements/Design-2_0058_Rounded-Rectangle-5.png";
import "../styles/LeftSideBar.css"

const LeftSideBar = ()=>{
    return(
        <div className="left-side-bar">
            <div className="sidebar-logo">
                <img src={logo} style={{height:"8vh"}} />
            </div>

            <div className="left-sidebar-div">
                {/* <img src={sidebar} style={{height:"60vh"}}/> */}
                <div className="bar">
                    <div className="bar-top">Home Page</div>
                    <ul className="list-items">
                        <li>Games</li>
                        <li>Bonuses</li>
                        <li>Rules</li>
                        <li>Casino</li>
                        <li>P2P Betting</li>
                        <p>Popular Games</p>
                        <li>Coinflip</li>
                        <li>Blackjack</li>
                        <li>Random</li>
                    </ul>
                    <button>Read more...</button>
                </div>
            </div>
        </div>
    )
}

export default LeftSideBar