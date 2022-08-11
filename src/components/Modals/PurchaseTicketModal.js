import "./PurchaseTicketModal.css";
import closeModalIcon from "../../assets/Elements/closeModal.svg";
import gameMascotImg from "../../assets/Elements/lotteryMascot.png";
import { useState } from "react";
import lottery_icon_white from "../../assets/Elements/lottery4.svg";
import lottery_icon_pink from "../../assets/Elements/lottery4pink.svg";

const PurchaseTicketModal = ({ showModal, setModalOff }) => {
  const [bettingAmount, setBettingAmount] = useState("");

  function calculateOwl() {
    return Math.floor(bettingAmount * 120);
  }

  function handleTicketPurchase() {
    const totalTicketsPurchased = calculateOwl();
    console.log("ticket purchased");
  }

  return (
    <div className={`warning-modal-wrapper ${showModal ? "show" : "hide"}`}>
      <div id="overlay-popup-purchase-ticket" style={{ margin: "0 auto" }}>
        <div id="overlay-close" onClick={() => setModalOff(false)}>
          <img
            src={closeModalIcon}
            alt="Close this window"
            style={{ width: "30px", height: "30px" }}
          />
        </div>
        <div id="overlay-text">
          <span id="title" style={{ fontSize: "2.25em" }}>
            Purchase a lottery ticket
          </span>
          <div className="purchase-ticket-input">
            <div id="purchase-ticket-input-amount">
              <img src={lottery_icon_pink} style={{ width: 30, height: 30, marginRight: "1em" }} />
              <input
                type="number"
                style={{textAlign: "center"}}
                placeholder={`Tickets amount`}
                value={bettingAmount}
                onChange={(e) => setBettingAmount(e.target.value)}
              />
              <img src={lottery_icon_pink} style={{ width: 30, height: 30, marginLeft: "1em" }} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <span style={{ fontSize: "1.5em", }}>{calculateOwl()}</span>{" "}
              <span style={{ color: "#d70a84", fontSize: "1.5em" }}>OWL</span>
            </div>
            <div style={{ textAlign: "center" }}>
              <button
                className="ticket-button"
                onClick={handleTicketPurchase()}
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={gameMascotImg} id="mascotImg" alt="mascotImg" />
      </div>
    </div>
  );
};

export default PurchaseTicketModal;
