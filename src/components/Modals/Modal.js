import "./Modal.css";
import closeModalIcon from "../../assets/Elements/closeModal.svg";

const Modal = ({linkText, link, setModalOff, firstText, secondText}) => {
  return (
    <div id="overlay-popup">
      <div id="overlay-text">
        <span>
          {firstText} <br />
          <br />
          {secondText}
        </span>
        <a
          style={{ textDecoration: "underline", fontSize: "1em" }}
          target="_blank"
          rel="noreferrer"
          href={link}
        >
          {linkText}
        </a>
      </div>
      {/* add functionality to close overlay to element below */}
      <div
        id="overlay-close"
        onClick={() => setModalOff(false)}
      >
        <img
          src={closeModalIcon}
          alt="Close this window"
          style={{ width: "30px", height: "30px" }}
        />
      </div>
    </div>
  );
};

export default Modal;
