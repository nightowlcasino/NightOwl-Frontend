import closeModalIcon from "../../assets/Elements/closeModal.svg";
import gameMascotImg from "../../assets/Elements/coinflipMascot.png";

import "./CoinflipModal.css";

const CoinflipModal = ({ showModal, setModalOff }) => {
  return (
    <div className={`warning-modal-wrapper ${showModal ? "show" : "hide"}`}>
      <div id="overlay-popup-coinflip" style={{ margin: "0 auto" }}>
        <div id="overlay-close" >
        <span><span style={{display:"inline", color:"#d70a84"}}>House edge:</span> 2.5%</span>
          <img
            src={closeModalIcon}
            onClick={() => setModalOff(false)}
            alt="Close this window"
            style={{ width: "30px", height: "30px" }}
          />
        </div>
        <div id="overlay-text">
          <span id="title" style={{fontSize: "2.25em"}}>CoinFlip</span>
          <span className="subtitle" style={{color: "#ed3da7"}}>Description</span>
          <span id="subtitle-text">
          CoinFlip is a game where you can test your luck by betting on either Heads or Tails. If it lands on your selection, you win!</span>
          <span className="subtitle" style={{color: "#ed3da7"}}>More information:</span>
          <span id="subtitle-text">
          CoinFlip is a simple game where you can bet on either Heads or Tails. You can place a bet on either one of these two options. The Coin is tossed, and if it lands on your selection, you win the bet! This game has an included house edge of 2.6%. </span>
        </div>
      </div>
      <div>
        <img src={gameMascotImg} id="mascotImg" alt="mascotImg"/>
      </div>
    </div>
  );
};

export default CoinflipModal;
