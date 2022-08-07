import closeModalIcon from "../../assets/Elements/closeModal.svg";


import "./CoinflipModal.css";

const CoinflipModal = ({ showModal, setModalOff, gameMascotImg }) => {
  return (
    <div className={`warning-modal-wrapper ${showModal ? "show" : "hide"}`}>
      <div id="overlay-popup-coinflip" style={{ margin: "0 auto" }}>
        <div id="overlay-close" onClick={() => setModalOff(false)} >
          <img
            src={closeModalIcon}
            alt="Close this window"
            style={{ width: "30px", height: "30px" }}
          />
        </div>
        <div id="overlay-text">
          <span id="title">CoinFlip</span>
          <span className="subtitle">Description</span>
          <span id="subtitle-text">
          CoinFlip is a game where you can test your luck by betting on either Heads or Tails. If it lands on your selection, you win!</span>
          <span className="subtitle">More information:</span>
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
