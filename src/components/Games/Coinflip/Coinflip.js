import React, { useState } from "react";
import { useMatomo } from '@datapunt/matomo-tracker-react'
import "./Coinflip.css";
import headIcon from "../../../assets/Elements/head.png";
// import headIcon from "../../../assets/Elements/headpermant.svg";
import tailsIcon from "../../../assets/Elements/tails.png";
import infoLogo from "../../../assets/Elements/infologo.svg";
import CoinflipModal from "../../Modals/CoinflipModal";
import coinflipMascot from "../../../assets/Elements/coinflipMascot.png";

const Coinflip = () => {
  // Track page view
	const { trackPageView, trackEvent } = useMatomo()

  const [informationAboutGameIsPressed, setInformationAboutGameIsPressed] =
    useState(false);

  function rewardMinusHouseFee(value) {
    return value + (value - value * 0.025);
  }

  function handleBetPlaced() {
    console.log("bet placed");
  }

  const [sideSelected, setSideSelected] = useState("Heads");
  const [bettingAmount, setBettingAmount] = useState("");


	// Track page view
	React.useEffect(() => {
	  trackPageView()
	}, [])

  return (
    <div style={{ width: "100%" }}>
      <div
        className="info-btn-container"
        style={{ marginLeft: "94%", marginBottom: "6vh" }}
      >
        <button
          type="button"
          id="info-btn"
          onClick={() => {
            setInformationAboutGameIsPressed(true);
          }}
        >
          <span className="btn-label">
            <img
              src={infoLogo}
              alt="Game info"
              style={{ width: "30px", height: "30px" }}
            />
          </span>
        </button>
      </div>
      <div id="coinflip-game-wrapper">
        <CoinflipModal
          showModal={informationAboutGameIsPressed}
          setModalOff={setInformationAboutGameIsPressed}
        />
        <div
          id="coinflip-content-wrapper"
          style={{ pointerEvents: informationAboutGameIsPressed ? "none" : "" }}
        >
          <div id="coinflip-content">
            <div className="coinflip-header">
              <h1>CoinFlip</h1>
            </div>
            <div className="coinflip-select-bet">
              <img
                src={headIcon}
                className="coinflip-select-bet-img"
                alt="Select heads"
                onClick={() => setSideSelected("Heads")}
                style={
                  sideSelected === "Heads"
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
                src={tailsIcon}
                className="coinflip-select-bet-img"
                alt="Select tails"
                onClick={() => setSideSelected("Tails")}
                style={
                  sideSelected === "Tails"
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
                  id="coinflip-search"
                  style={{ textAlign: "right" }}
                  placeholder={`OWL amount`}
                  value={bettingAmount}
                  onChange={(e) => setBettingAmount(e.target.value)}
                />
              </div>
            </div>
            <h3>
              <span style={{ color: "#d70a84" }}>Possible Reward: </span>
              {rewardMinusHouseFee(Number(bettingAmount))} OWL
            </h3>
            <div id="bet-button-wrapper">
              <button onClick={handleBetPlaced}>Place Bet</button>
            </div>
          </div>
        </div>
        <div id="coin-wrapper">
          <div id="platform">
            <div id="coin"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coinflip;
