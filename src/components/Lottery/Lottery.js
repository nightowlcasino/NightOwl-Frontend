import React, { useState, useContext } from "react";
import axios from "axios";
import StateContext from "../Context";
//import { WalletContext } from "../Header/Header";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import infoLogo from "../../assets/Elements/infologo.svg";
import "./Lottery.css";
import "../BodyContent/BodyContent.css";
import image1 from "../../assets/Elements/Design-2_0000_Layer-21.png";
import lotteryMascot from "../../assets/Elements/lotteryMascot.png";
import LotteryModal from "../Modals/LotteryModal";

function Lottery({ setIsLoading }) {
  const [informationAboutGameIsPressed, setInformationAboutGameIsPressed] =
    useState(false);
  return (
    <>
    <LotteryModal gameMascotImg={lotteryMascot} showModal={informationAboutGameIsPressed} setModalOff={setInformationAboutGameIsPressed}/>
    <div style={{ width: "100%" }}>
      <div
        className="info-btn-container"
        style={{ marginLeft: "94%", marginBottom: "9vh" }}
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
      <div
        style={{
          color: "white",
          width: "100%",
          maxWidth: 1000,
          margin: "0 auto",
          display: "block",
          pointerEvents: informationAboutGameIsPressed ? "none" : "",
        }}
      >
        <div style={{ textAlign: "center", margin: "auto", maxWidth: 700 }}>
          <div>
            <p
              style={{
                fontSize: 48,
                fontWeight: "bold",
                marginBottom: 8,
                marginTop: 10,
              }}
            >
              Night Owl's Blakiston Lottery
            </p>
          </div>
          <div>
            <p style={{ fontSize: 22, marginBottom: 40 }}>
              The rules are simple, purchase a ticket to enter the draw. You can
              win a combination of{" "}
              <span style={{ color: "fuchsia" }}>Bronze</span>,{" "}
              <span style={{ color: "fuchsia" }}>Silver</span>, or{" "}
              <span style={{ color: "fuchsia" }}>Gold</span> prizes. The lucky
              winner who wins Bronze, Silver, or Gold prizes may win the{" "}
              <span style={{ color: "fuchsia" }}>jackpot!</span>
            </p>
          </div>
        </div>

        <div className="jackpot-box">
          <div>
            <img
              width={150}
              height={100}
              style={{ paddingLeft: 20, paddingRight: 20, objectFit: "cover" }}
              src={image1}
            />
          </div>
          <div style={{ width: "100%", textAlign: "center" }}>
            <p style={{ fontSize: 20, fontWeight: "bold" }}>King's Jackpot</p>

            <div>
              <p style={{ fontSize: "14px", margin: 0 }}>Currently at:</p>
              <div className="prize-amount">
                <p
                  style={{
                    fontSize: "38px",
                    margin: 0,
                    color: "fuchsia",
                    fontWeight: "bolder",
                    marginRight: 2,
                    letterSpacing: 2,
                  }}
                >
                  500,000.00
                </p>
                <p>OWL</p>
              </div>
            </div>
          </div>
          <div>
            <img
              width={150}
              height={100}
              style={{ paddingLeft: 20, paddingRight: 20, objectFit: "cover" }}
              src={image1}
            />
          </div>
        </div>

        <div className="tier-boxes">
          <div className="tier-box">
            <p
              style={{
                textAlign: "center",
                fontSize: 24,
                fontWeight: "bold",
                marginTop: 16,
              }}
            >
              Bronze
            </p>
            <div style={{ textAlign: "center", width: "100%" }}>
              <img
                src={image1}
                height={40}
                width={40}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="bronze-silver-gold">
              <div style={{ textAlign: "center" }}>
                <p style={{ marginBottom: 4 }}>375 Winners</p>
                <p style={{ fontWeight: 600, marginTop: 4 }}>Free play</p>
              </div>
              <div style={{ width: 20 }}></div>
              <div style={{ textAlign: "center" }}>
                <p style={{ marginBottom: 4 }}>80 Winners</p>
                <p style={{ fontWeight: 600, marginTop: 4 }}>
                  500 <span style={{ fontSize: 12 }}>OWL</span>
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: 20 }}></div>

          <div className="tier-box">
            <p
              style={{
                textAlign: "center",
                fontSize: 24,
                fontWeight: "bold",
                marginTop: 16,
              }}
            >
              Silver
            </p>
            <div style={{ textAlign: "center", width: "100%" }}>
              <img
                src={image1}
                height={40}
                width={40}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="bronze-silver-gold">
              <div style={{ textAlign: "center" }}>
                <p style={{ marginBottom: 4 }}>10 Winners</p>
                <p style={{ fontWeight: 600, marginTop: 4 }}>
                  2,000 <span style={{ fontSize: 12 }}>OWL</span>
                </p>
              </div>
              <div style={{ width: 20 }}></div>
              <div style={{ textAlign: "center" }}>
                <p style={{ marginBottom: 4 }}>1 Winner</p>
                <p style={{ fontWeight: 600, marginTop: 4 }}>
                  20,000 <span style={{ fontSize: 12 }}>OWL</span>
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: 20 }}></div>

          <div className="tier-box">
            <p
              style={{
                textAlign: "center",
                fontSize: 24,
                fontWeight: "bold",
                marginTop: 16,
              }}
            >
              Gold
            </p>
            <div style={{ textAlign: "center", width: "100%" }}>
              <img
                src={image1}
                height={40}
                width={40}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="bronze-silver-gold">
              <div style={{ textAlign: "center" }}>
                <p style={{ marginBottom: 4 }}>1 Winner</p>
                <p style={{ fontWeight: 600, marginTop: 4 }}>
                  75,000 <span style={{ fontSize: 12 }}>OWL</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <button className="ticket-button">Get Ticket Here</button>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default Lottery;
