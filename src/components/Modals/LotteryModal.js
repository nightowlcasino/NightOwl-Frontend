import closeModalIcon from "../../assets/Elements/closeModal.svg";
import gameMascotImg from "../../assets/Elements/lotteryMascot.png";

import "./CoinflipModal.css";

const LotteryModal = ({ showModal, setModalOff }) => {
  return (
    <div className={`warning-modal-wrapper ${showModal ? "show" : "hide"}`}>
      <div id="overlay-popup-lottery" style={{ margin: "0 auto" }}>
        <div id="overlay-close" onClick={() => setModalOff(false)} style={{justifyContent:"flex-end"}}>
          <img
            src={closeModalIcon}
            alt="Close this window"
            onClick={() => setModalOff(false)}
            style={{ width: "30px", height: "30px" }}
          />
        </div>
        <div id="overlay-text">
          <span id="title" style={{fontSize: "2.25em"}}>Blakiston Lottery</span>
          <span className="subtitle" style={{color: "#ed3da7"}}>Description</span>
          <span id="subtitle-text">
            Blakiston Lottery is a game where you can purchase tickets and win prizes if selected in the draw! 
          </span>
          <span className="subtitle" style={{color: "#ed3da7"}}>More information:</span>
          <span id="subtitle-text">
            A player can buy multiple tickets that are entered into a draw.
            5,000 tickets will be sold in total. The rules are simple, win a
            bronze or silver prize <b>AND</b> the gold prize, and you get the King's
            Prize jackpot!<br/><br/>If there is no winner for the King's Prize, the pot
            gets bigger and bigger! The next draw will have the pot up for
            grabs.<br/><br/>If you are a winner of a combination of bronze, silver, gold,
            or jackpot, you will be awarded the sum of all prizes.<br/><br/> There will be
            many winners per draw!
          </span>
        </div>
      </div>
      <div>
        <img src={gameMascotImg} id="mascotImg" alt="mascotImg" />
      </div>
    </div>
  );
};

export default LotteryModal;
