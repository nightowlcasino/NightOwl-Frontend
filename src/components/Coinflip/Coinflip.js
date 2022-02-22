import React from "react";
import "./Coinflip.css";
import image from "../../assets/Elements/coinflip-pyramid.png";

const Coinflip = () => {
  return (

    <main className="coinflip-container-main">
      <div className="coinflip-div">
        <h1>
          <span style={{ color: "#d70a84" }}>Head </span>
          <span>/ Tail</span>
        </h1>

        <div className="below-head">
          <p>
            selected <span>{"Head"}</span>
          </p>
          <p>
            reward <span>{"20,000"}</span>
          </p>
        </div>

        <p>Please set a bet amount</p>

        <div className="coinflip-calc">
          <h1>−</h1>
          <input type="text" pattern="[^a-zA-Z]+" />
          <span>OWL</span>
          <h1>+</h1>
        </div>

        <button>Place bet</button>

        <p>Transaction ID: {}</p>
      </div>

      <div className="coinflip-image-container">
        <img src={image} style={{width:"100%"}} />
      </div>
    </main>
  );
};
export default Coinflip;
