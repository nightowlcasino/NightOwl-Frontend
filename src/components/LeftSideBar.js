import React from "react";
import logo from "../assets/Elements/Design-2_0033_Layer-4.png";
import sidebar from "../assets/Elements/Design-2_0058_Rounded-Rectangle-5.png";
import "../styles/LeftSideBar.css"

const LeftSideBar = ()=>{
    return(
        <div className="left-side-bar">
            <div className="sidebar-logo">
                <img src={logo} style={{height:"8vh"}} />
            </div>

            <div className="left-sidebar-div">
                <img src={sidebar} style={{height:"60vh"}}/>
            </div>
        </div>
    )
}

export default LeftSideBar