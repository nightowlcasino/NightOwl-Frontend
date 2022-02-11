import React from "react";
import "../styles/Main.css";
import LeftSideBar from '../components/LeftSideBar';

const Main = ()=>{
    return(
     <div class="table">
     <div classname="maincontent-wrapper">
       <div classname="table-row">
            <LeftSideBar />
        <div className="Hero">
           <p class="badge-text">Hot now text</p>
            <div class="hero-heading">
                <h1>TEST!</h1>
                </div>
               <div className="hero-content">
                    <p>Lorem Ipsum text</p>
            </div>
            <button class="hero-button">Hero Button</button>
        </div>
        </div>
    </div>
    </div>
    )
}
export default Main