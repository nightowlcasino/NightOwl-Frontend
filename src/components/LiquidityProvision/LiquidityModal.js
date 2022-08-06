// import "./RouletteModal.css";
import closeModalIcon from "../../assets/Elements/closeModal.svg";

const LiquidityModal = ({ showModal, setModalOff, gameMascotImg }) => {
  return (
    <div className={`warning-modal-wrapper ${showModal ? "show" : "hide"}`}>
      <div id="liquidity-overlay-popup" style={{ margin: "0 auto", width: "70vw", left: "15%", borderRadius: 20}}>
        <div id="overlay-close" onClick={() => setModalOff(false)}>
          <img
            src={closeModalIcon}
            alt="Close this window"
            style={{ width: "30px", height: "30px" }}
          />
        </div>
        <div id="overlay-text" style={{color: "white"}}>
            <div style={{display: "flex", flexDirection: "row"}}>
                <div style={{width: "60%", borderRight: "1px solid red"}}>
                    <div>
                        <p style={{fontSize: 38, fontWeight: "700", marginBottom: 4}}>ADVANCED VIEW</p>
                        <p style={{fontSize: 14, color: "rgba(255,255,255,0.7", marginTop: 0}}>Inspect details on staking your assets.</p>
                    </div>

                    <div style={{display: "flex", flexDirection: "row"}}>
                        <p>1 Y</p>
                        <p>10,000</p>
                    </div>

                </div>
            </div>
        </div>
      </div>
      <div>
        {/* <img src={gameMascotImg} id="mascotImg" /> */}
      </div>
    </div>
  );
};

export default LiquidityModal;
