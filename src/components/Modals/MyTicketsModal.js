import closeModalIcon from "../../assets/Elements/closeModal.svg";
import gameMascotImg from "../../assets/Elements/lotteryMascot.png";
import copyIcon from "../../assets/Elements/copyIcon.svg";
import owlIcon from "../../assets/Elements/head.png";

import "./MyTicketsModal.css";

function truncateId(id) {
  return id.substring(0, 12) + "...";
}

function handleOnCopyTxId() {
  console.log("tx id copied");
}

const MyTicketsModal = ({ showModal, setModalOff }) => {
  return (
    <div className={`warning-modal-wrapper ${showModal ? "show" : "hide"}`}>
      <div id="overlay-popup-my-tickets" style={{ margin: "0 auto" }}>
        <div id="overlay-close" onClick={() => setModalOff(false)}>
          <img
            src={closeModalIcon}
            alt="Close this window"
            style={{ width: "30px", height: "30px" }}
          />
        </div>
        <div id="overlay-text">
          <span id="title" style={{ fontSize: "2.25em" }}>
            My Tickets
          </span>
          <div className="table-container">
            <table
              className="table-content"
              style={{
                borderCollapse: "collapse",
                borderRadius: 8,
              }}
            >
              <tr>
                <th style={{ borderTopLeftRadius: 8 }}>Tx id</th>
                <th>Result</th>
                <th>Tier</th>
                <th style={{ borderTopRightRadius: 8 }}>Reward</th>
              </tr>
              <tbody>
                <tr>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {truncateId(
                        "88dhgzEuTXaRQTX5KNdnaWTTX7fEZVEQRn6qP4MJotPuRnS3QpoJxYpSaXoU1y7SHp8ZXMp92TH22DBY"
                      )}
                      <img src={copyIcon} alt="Copy address" id="copy-address-img" onClick={handleOnCopyTxId}/>
                    </div>
                  </td>
                  <td className="bet-won">
                    <span style={{ textAlign: "left" }}>WON</span>
                  </td>
                  <td className="bet-silver">Silver</td>
                  <td className="amount-won">Free Play</td>
                </tr>
                <tr>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {truncateId(
                        "33c8ee9849307d62d23fd870c219e5041030dbf6f695c6c4a55ed7b91c9e9de9"
                      )}
                      <img src={copyIcon} alt="Copy address" id="copy-address-img" onClick={handleOnCopyTxId} />
                    </div>
                  </td>
                  <td className="bet-lost">
                    <span style={{ textAlign: "left" }}>LOST</span>
                  </td>
                  <td className="bet-gold">Gold</td>
                  <td className="amount-won">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      30000
                      <img
                        src={owlIcon}
                        alt="Owl icon"
                        className="owl-table-icon"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {truncateId(
                        "54bec32e419a7f4290755c496916e7f1e960467a6c3efd5e636cbfa44634dd9a"
                      )}
                      <img src={copyIcon} alt="Copy address" id="copy-address-img" onClick={handleOnCopyTxId}/>
                    </div>
                  </td>
                  <td className="bet-lost">
                    <span style={{ textAlign: "left" }}>LOST</span>
                  </td>
                  <td className="bet-bronze">Bronze</td>
                  <td className="amount-won">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      5000
                      <img
                        src={owlIcon}
                        alt="Owl icon"
                        className="owl-table-icon"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {truncateId(
                        "88dhgzEuTXaRQTX5KNdnaWTTX7fEZVEQRn6qP4MJotPuRnS3QpoJxYpSaXoU1y7SHp8ZXMp92TH22DBY"
                      )}
                      <img src={copyIcon} alt="Copy address" id="copy-address-img" onClick={handleOnCopyTxId} />
                    </div>
                  </td>
                  <td className="bet-won">
                    <span style={{ textAlign: "left" }}>WON</span>
                  </td>
                  <td className="bet-silver">Silver</td>
                  <td className="amount-won">Free Play</td>
                </tr>
                <tr>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {truncateId(
                        "88dhgzEuTXaRQTX5KNdnaWTTX7fEZVEQRn6qP4MJotPuRnS3QpoJxYpSaXoU1y7SHp8ZXMp92TH22DBY"
                      )}
                      <img src={copyIcon} alt="Copy address" id="copy-address-img" onClick={handleOnCopyTxId} />
                    </div>
                  </td>
                  <td className="bet-won">
                    <span style={{ textAlign: "left" }}>WON</span>
                  </td>
                  <td className="bet-silver">Silver</td>
                  <td className="amount-won">Free Play</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <img src={gameMascotImg} id="mascotImgMyTickets" alt="mascotImg" />
      </div>
    </div>
  );
};

export default MyTicketsModal;
