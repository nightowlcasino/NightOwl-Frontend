import React from "react";
import "../styles/Main.css";
import LeftSideBar from '../components/LeftSideBar';

const Coinflip = ()=>{
    return(
     <div class="table">
     <div classname="maincontent-wrapper">
       <div classname="table-row">
   <LeftSideBar />
        <div className="Hero">
           <p class="badge-text">Hot right now!</p>
            <div class="hero-heading">
                <h1-hero>Win $100 and <br />5 free spins!</h1-hero>
                </div>
               <div className="hero-content">
                    <p>Have fun in a decentralized way and enjoy the freedom of blockchain!</p>
            </div>
            <button class="hero-button">Hero Button</button>
        </div>
        </div>
    </div>
</div>
    )
}
export default Coinflip