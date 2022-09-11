import "./KYAModal.css";
import closeModalIcon from "../../assets/Elements/closeModal.svg";
import gameMascotImg from "../../assets/Elements/rouletteMascot.png";

const KYAModal = ({ showModal, setModalOff }) => {
  function handleKyaAccepted() {
    setModalOff(true);
    localStorage.setItem("kya", true);
  }

  return (
    <div className={`warning-modal-wrapper ${!showModal ? "show" : "hide"}`}>
      <div id="overlay-popup-kya" style={{ margin: "0 auto" }}>
        <div id="overlay-text">
          <span id="title" style={{ fontSize: "2.25em" }}>
            Know Your Assumptions
          </span>
          <span id="subtitle-text">
            Night Owl Casino is a decentralized application which means it does
            not have a central government body.
          </span>
          <span className="subtitle">
            By accepting these KYA, you agree that:
          </span>
          <span id="subtitle-text">
            <ul>
              <li>
                You will use the Night Owl Product at your own peril and risk
              </li>
              <li>Only YOU are responsible for your assets</li>
            </ul>
          </span>
          <span className="subtitle">Notice that:</span>
          <span id="subtitle-text">
            <ul>
              <li>
                Night Owl Casino operates on a live blockchain, thus trades are
                final, and irreversible once they have executed;
              </li>
              <li>Every transaction can be viewed via the Ergo Explorer</li>
              <li>
                By creating an order you send your funds to a specific
                smart-contract, all such contracts are wired into the user
                interface. Thus, orders are created entirely in your browser (on
                your machine).
              </li>
            </ul>
          </span>
          <span id="subtitle-text" style={{ fontWeight: "bold" }}>
            Night Owl Team doesn’t guarantee the absence of bugs and errors.
            <br />
            <br />
            Night Owl Casino offers a form of added security, as buyers and
            sellers do not have to give their information to any 3rd party.
            However, Night Owl is without a Know Your Customer (KYC) process and
            can offer NO assistance if a user is hacked or cheated out of
            passwords, currency or private wallet keys.
          </span>
          <button id="accept-kya" onClick={() => handleKyaAccepted()}>
            Accept the KYA
          </button>
        </div>
      </div>
      <div>
        <img src={gameMascotImg} id="mascotImg" />
      </div>
    </div>
  );
};

export default KYAModal;
