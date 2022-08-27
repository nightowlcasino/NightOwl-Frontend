import closeModalIcon from "../../assets/Elements/closeModal.svg";
import gameMascotImg from "../../assets/Elements/lotteryMascot.png";
import owlIcon from "../../assets/Elements/head.png";

import "./WithdrawLiquidityModal.css";
import { useState } from "react";

const WithdrawLiquidityModal = ({ showModal, setModalOff }) => {
  const [owlAmount, setOwlAmount] = useState("");
  function handleSubmitLiquidityWithdraw() {
    setModalOff(false);
  }
  return (
    <div className={`warning-modal-wrapper ${showModal ? "show" : "hide"}`}>
      <div id="overlay-popup-withdraw-liquidity" style={{ margin: "0 auto" }}>
        <div id="overlay-close" onClick={() => setModalOff(false)} style={{justifyContent:"flex-end"}}>
          <img
            src={closeModalIcon}
            alt="Close this window"
            style={{ width: "30px", height: "30px" }}
          />
        </div>
        <div id="overlay-text">
          <span id="title" style={{ fontSize: "2.25em" }}>
            Withdraw Liquidity
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              color: "white",
              width: "70%",
              margin: "0 auto",
            }}
          >
            <div>
              <span style={{ fontSize: 19 }}>Liquidity Provided</span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{ fontSize: 17, color: "#d60a84", cursor: "pointer" }}
                  onClick={() => setOwlAmount(1321379)}
                >
                  13214729
                </span>
                <img
                  src={owlIcon}
                  alt="Select heads"
                  style={{ width: "30px", height: "30px" }}
                ></img>
              </div>
            </div>
            <div>
              <span style={{ fontSize: 19 }}>OWL Unlocked in</span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: 17, color: "#d60a84" }}>10</span>
              </div>
            </div>
          </div>
          <div id="owl-amount-input-wrapper">
            <input
              type="number"
              id="resultOwl"
              style={{ textAlign: "right" }}
              placeholder={`Withdrawal amount`}
              value={owlAmount}
              onChange={(e) => setOwlAmount(e.target.value)}
            ></input>
          </div>
          <div style={{ textAlign: "center" }}>
            <button
              className="withdraw-button"
              onClick={() => {
                handleSubmitLiquidityWithdraw(false);
              }}
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>
      <div>
        <img src={gameMascotImg} id="mascotImg" alt="mascotImg" />
      </div>
    </div>
  );
};

export default WithdrawLiquidityModal;
