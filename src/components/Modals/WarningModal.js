import "./WarningModal.css";

const WarningModal = ({warningText, gameMascotImg }) => {
  return (
    // <div className={warningText ? "warning-modal-wrapper" : "warning-modal-wrapper show"}>
    <div className={`warning-modal-wrapper ${warningText != "" ? 'show'  : 'hide'}`}>
      <div id="overlay-popup" style={{ margin: "0 auto" }}>
        <div id="overlay-text">
          <span>{warningText}</span>
        </div>
      </div>
      <div>
        <img
          src={gameMascotImg}
          id="mascotImg"
        />
      </div>
    </div>
  );
};

export default WarningModal;
