import closeModalIcon from "../../assets/Elements/closeModal.svg";
import gameMascotImg from "../../assets/Elements/lotteryMascot.png";
import owlIcon from "../../assets/Elements/head.png";

import "./AddLiquidityModal.css";
import { useState } from "react";

const AddLiquidityModal = ({ showModal, setModalOff }) => {
  const [owlAmount, setOwlAmount] = useState("");
  function handleSubmitLiquidityAdd() {
    setModalOff(false);
  }
  return (
    <div className={`warning-modal-wrapper ${showModal ? "show" : "hide"}`}>
      <div id="overlay-popup-add-liquidity" style={{ margin: "0 auto" }}>
        <div id="overlay-close" onClick={() => setModalOff(false)} style={{justifyContent:"flex-end"}}>
          <img
            src={closeModalIcon}
            alt="Close this window"
            style={{ width: "30px", height: "30px" }}
          />
        </div>
        <div id="overlay-text">
          <span id="title" style={{ fontSize: "2.25em" }}>
            Add Liquidity
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span>
              Total OWL amount in the pool:
              <span
                style={{ display: "inline", fontSize: 18, color: "#d60a84" }}
              >
                13214729{" "}
              </span>
            </span>
            <img
              src={owlIcon}
              alt="Select heads"
              style={{ width: "30px", height: "30px" }}
            ></img>
          </div>
          <div id="owl-amount-input-wrapper">
            <input
              type="number"
              id="resultOwl"
              style={{ textAlign: "right" }}
              placeholder={`OWL amount`}
              value={owlAmount}
              onChange={(e) => setOwlAmount(e.target.value)}
            ></input>
          </div>
          <div style={{ textAlign: "center" }}>
            <button
              className="add-liq-button"
              onClick={() => {
                handleSubmitLiquidityAdd();
              }}
            >
              Submit
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

export default AddLiquidityModal;
