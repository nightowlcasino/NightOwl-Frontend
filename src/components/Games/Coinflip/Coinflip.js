import React, { useState } from "react";
import "./Coinflip.css";
import sigUSDicon from "../../../assets/Elements/SigUSD.svg";

const Coinflip = () => {

  function rewardMinusHouseFee(value) {
    return value + (value - (value * 0.025));
  }

  function handleBetPlaced() {
    console.log("bet placed");
  }

  const [sideSelected, setSideSelected] = useState("Heads");
  const [bettingAmount, setBettingAmount] = useState("");
  console.log(sideSelected);
  return (
    <div id="coinflip-game-wrapper">
      <div id="coinflip-content-wrapper">
        <div id="coinflip-content">
          <div className="coinflip-header">
            <h1>CoinFlip</h1>
          </div>
          <div className="coinflip-select-bet">
            <img
              src={sigUSDicon}
              alt="Select heads"
              onClick={() => setSideSelected("Heads")}
              style={
                sideSelected == "Heads"
                  ? {
                      width: "115px",
                      height: "115px",
                      filter: "drop-shadow(0px 5px 3px #ab0d82)",
                      WebkitFilter: "drop-shadow(0px 5px 3px #ab0d82)",
                    }
                  : { width: "90px", height: "90px" }
              }
            />
            <img
              src={sigUSDicon}
              alt="Select tails"
              onClick={() => setSideSelected("Tails")}
              style={
                sideSelected == "Tails"
                  ? {
                      width: "115px",
                      height: "115px",
                      filter: "drop-shadow(0px 5px 3px #ab0d82)",
                      WebkitFilter: "drop-shadow(0px 5px 3px #ab0d82)",
                    }
                  : { width: "90px", height: "90px" }
              }
            />
          </div>
          <h3>
            <span style={{ color: "#d70a84" }}>Selected: </span>
            {sideSelected}
          </h3>
          <div className="coinflip-input">
            <div id="coinflip-input-amount-input">
              <input
                type="number"
                placeholder={`OWL amount`}
                value={bettingAmount}
                onChange={(e) => setBettingAmount(e.target.value)}
              />
            </div>
          </div>
          <h3>
            <span style={{ color: "#d70a84" }}>Possible reward: </span>
            {rewardMinusHouseFee(Number(bettingAmount))} OWL
          </h3>
          <div id="bet-button-wrapper">
            <button onClick={handleBetPlaced}>Place bet</button>
          </div>
        </div>
      </div>
      <div id="coin-wrapper">
        <div id="platform">
          <div id="coin"></div>
        </div>
      </div>
    </div>
  );
};

export default Coinflip;
