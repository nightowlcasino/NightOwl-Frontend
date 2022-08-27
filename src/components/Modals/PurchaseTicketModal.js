import "./PurchaseTicketModal.css";
import closeModalIcon from "../../assets/Elements/closeModal.svg";
import gameMascotImg from "../../assets/Elements/lotteryMascot.png";
import { useEffect, useState } from "react";
import downArrows from "../../assets/Elements/downArrow.svg";
import owlIcon from "../../assets/Elements/head.png";
import ticketIcon from "../../assets/Elements/lottery4pink.svg";
const PurchaseTicketModal = ({ showModal, setModalOff }) => {
  const [ticketAmount, setTicketAmount] = useState("");
  const [owlAmount, setOwlAmount] = useState("");

  function handleOwlAmountChange(e) {
    setOwlAmount(e);
  }

  function handleTicketAmountChange(e) {
    setTicketAmount(e);
  }

  useEffect(() => {
    if (owlAmount < 120) {
      setTicketAmount(0);
    } else {
      setTicketAmount(calculateTickets);
    }
  }, [owlAmount]);

  useEffect(() => {
    if (ticketAmount == 0) {
      setOwlAmount(0);
    } else setOwlAmount(calculateOwl);
  }, [ticketAmount]);

  function calculateOwl() {
    return Math.floor(ticketAmount * 120);
  }

  function calculateTickets() {
    return Math.floor(owlAmount / 120);
  }

  function handleTicketPurchase() {
    console.log("ticket purchased");
  }

  return (
    <div className={`warning-modal-wrapper ${showModal ? "show" : "hide"}`}>
      <div id="overlay-popup-purchase-ticket" style={{ margin: "0 auto" }}>
        <div id="overlay-close" onClick={() => setModalOff(false)} style={{justifyContent:"flex-end"}}>
          <img
            src={closeModalIcon}
            alt="Close this window"
            style={{ width: "30px", height: "30px" }}
          />
        </div>
        <div id="overlay-text">
          <span id="title" style={{ fontSize: "2.25em" }}>
            Purchase a Lottery Ticket
          </span>
          <div className="purchase-ticket-input">
            <div className="conversion-explained">
              <span style={{fontSize: "12px"}}>{"1 "}</span>
              <img src={ticketIcon} style={{width:22, height:22}}></img>
              <span style={{fontSize: "12px"}}>= 120</span>
              <img src={owlIcon} style={{width:22, height:22}}></img>
            </div>
            <div id="purchase-ticket-input-amount">
              <input
                type="number"
                id="inputTicket"
                style={{ textAlign: "right" }}
                placeholder={`Tickets amount`}
                value={ticketAmount}
                onChange={(e) => handleTicketAmountChange(e.target.value)}
              ></input>
            </div>
            <div id="input-separator-wrapper-lottery">
              <div id="input-seperator-lottery">
                <img
                  src={downArrows}
                  alt="Switch tokens"
                  style={{ width: "25px", height: "25px" }}
                />
              </div>
            </div>
            <div id="purchase-ticket-input-amount">
              <input
                type="number"
                id="resultOwl"
                style={{ textAlign: "right" }}
                placeholder={`OWL amount`}
                value={owlAmount}
                onChange={(e) => handleOwlAmountChange(e.target.value)}
              ></input>
            </div>
            {/* <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <span style={{ fontSize: "1.5em" }}>{calculateOwl()}</span>{" "}
              <span style={{ color: "#d70a84", fontSize: "1.5em" }}>OWL</span>
            </div> */}
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
