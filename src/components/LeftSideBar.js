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
              
                    <div className="list-items">
                        <a href="#"><img src={Homepage} />Home page</a>
                        <a href="#"><img src={Games} />Games</a>
                        <a href="#"><img src={Bonuses} />Bonuses</a>
                        <a href="#"><img src={Rules} />Rules</a>
                        <a href="#"><img src={Casino} />Casino</a>
                        <a href="#"><img src={P2P} />P2P Betting</a>
                        <span class="popgames">Popular Games</span>
                        <a href="#"><img src={Coinflip} />Coinflip</a>
                        <a href="#"><img src={Blackjack} />Blackjack</a>
                        <a href="#"><img src={Random} />Random</a>
                    </div>
                
                    <div align="center" class="caret">
                        <a href="#">▼</a>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSideBar