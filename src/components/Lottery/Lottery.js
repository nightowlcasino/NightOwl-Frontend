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
import PurchaseTicketModal from "../Modals/PurchaseTicketModal";
import silverCup from "../../assets/Elements/silverCup.png";
import goldCup from "../../assets/Elements/goldCup.png";
import bronzeCup from "../../assets/Elements/bronzeCup.png";

function Lottery({ setIsLoading }) {
  const [informationAboutGameIsPressed, setInformationAboutGameIsPressed] =
    useState(false);
  const [purchaseTicketPressed, setPurchaseTicketPressed] = useState(false);
  return (
    <>
      <LotteryModal
        showModal={informationAboutGameIsPressed}
        setModalOff={setInformationAboutGameIsPressed}
      />
      <PurchaseTicketModal
        showModal={purchaseTicketPressed}
        setModalOff={setPurchaseTicketPressed}
      />
      <div style={{ width: "100%" }}>
        <div
          className="info-btn-container"
          style={{ marginLeft: "94%", marginBottom: "5vh" }}
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
            maxWidth: 1100,
            margin: "0 auto",
            display: "block",
            pointerEvents: informationAboutGameIsPressed ? "none" : "",
          }}
        >
          <div
            style={{ textAlign: "center", margin: "auto", maxWidth: "100%" }}
          >
            <div>
              <p
                style={{
                  fontSize: 44,
                  fontWeight: "bold",
                  marginBottom: 8,
                  marginTop: 10,
                }}
              >
                Night Owl's Blakiston Lottery
              </p>
            </div>
            <div>
              <p style={{ fontSize: 21, marginBottom: 40 }}>
                The rules are simple, purchase a ticket to enter the draw. You
                can win a combination of{" "}
                <span style={{ color: "#ed3da7" }}>Bronze</span>,{" "}
                <span style={{ color: "#ed3da7" }}>Silver</span>, or{" "}
                <span style={{ color: "#ed3da7" }}>Gold</span> prizes. The lucky
                winner who wins Bronze or Silver in combination with the Gold
                prize will win the{" "}
                <span style={{ color: "#ed3da7" }}>
                  King's Prize jackpot!
                  <br />
                  <br />
                </span>
                <span>
                  The draw will automatically begin once{" "}
                  <span style={{ color: "#ed3da7" }}>5,000</span> tickets are
                  purchased. Only <span style={{ color: "#ed3da7" }}>X</span>{" "}
                  tickets left. Good luck!
                </span>
              </p>
            </div>
          </div>

          <div className="jackpot-box">
            <div>
              <img
                width={150}
                height={100}
                style={{
                  paddingLeft: 20,
                  paddingRight: 20,
                  objectFit: "cover",
                }}
                src={image1}
              />
            </div>
            <div style={{ width: "100%", textAlign: "center" }}>
              <p
                style={{
                  fontSize: "2.25em",
                  fontWeight: "bold",
                  margin: "20px",
                }}
              >
                King's Jackpot
              </p>
              <div>
                <p style={{ fontSize: "14px", margin: 0 }}>Currently at:</p>
                <div className="prize-amount">
                  <p
                    style={{
                      fontSize: "38px",
                      margin: 0,
                      color: "#ed3da7",
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
                style={{
                  paddingLeft: 20,
                  paddingRight: 20,
                  objectFit: "cover",
                }}
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
                  color: "#CD7F32",
                }}
              >
                Bronze
              </p>
              <div style={{ textAlign: "center", width: "100%" }}>
                <img
                  src={bronzeCup}
                  height={65}
                  width={65}
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
                  color: "#c2c2c2",
                }}
              >
                Silver
              </p>
              <div style={{ textAlign: "center", width: "100%" }}>
                <img
                  src={silverCup}
                  height={65}
                  width={65}
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
                  color: "#FFD700",
                }}
              >
                Gold
              </p>
              <div style={{ textAlign: "center", width: "100%" }}>
                <img
                  src={goldCup}
                  height={65}
                  width={65}
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
            <button
              className="ticket-button"
              onClick={() => setPurchaseTicketPressed(true)}
            >
              Get Ticket Here
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lottery;
