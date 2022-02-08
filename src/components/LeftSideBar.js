import React from "react";
import Homepage from "../assets/Elements/Design-2_0039_Layer-5.png";
import Games from "../assets/Elements/Design-2_0037_Layer-7.png";
import Bonuses from "../assets/Elements/Design-2_0036_Layer-8.png";
import Rules from "../assets/Elements/Design-2_0035_Layer-9.png";
import Casino from "../assets/Elements/Design-2_0034_Layer-10.png";
import P2P from "../assets/Elements/Design-2_0038_Layer-6.png";
import Coinflip from "../assets/Elements/Design-2_0051_Layer-11.png";
import Blackjack from "../assets/Elements/Design-2_0050_Layer-12.png";
import Random from "../assets/Elements/Design-2_0049_Layer-13.png";
import "../styles/LeftSideBar.css";

const LeftSideBar = ()=>{
    return(
        <div className="left-side-bar">
            <div className="left-sidebar-div">
                {/* <img src={sidebar} style={{height:"60vh"}}/> */}
                <div className="bar">
                    <div className="bar-top"><img src={Homepage} />Home page</div>
                    <ul className="list-items">
                        <li><img src={Games} />Games</li>
                        <li><img src={Bonuses} />Bonuses</li>
                        <li><img src={Rules} />Rules</li>
                        <li><img src={Casino} />Casino</li>
                        <li><img src={P2P} />P2P Betting</li>
                        <p>Popular Games</p>
                        <li><img src={Coinflip} />Coinflip</li>
                        <li><img src={Blackjack} />Blackjack</li>
                        <li><img src={Random} />Random</li>
                    </ul>
                    <button>Read more...</button>
                </div>
            </div>
        </div>
    )
}

export default LeftSideBar