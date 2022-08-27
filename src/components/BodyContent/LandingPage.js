import home_trending from "../../assets/Elements/home_trending.png";
import leaderboard_icon from "../../assets/Elements/leaderboard_icon.png";
import slots from "../../assets/Elements/slots.png";
import roulette from "../../assets/Elements/roulette.png";
import hotNowImage from "../../assets/Elements/wtfruleta.png";
import amai from "../../assets/Elements/amai.png";
import { useNavigate } from "react-router-dom";
import copyIcon from "../../assets/Elements/copyIcon.svg";
import owlIcon from "../../assets/Elements/head.png";

function LandingPage() {
  let navigate = useNavigate();

  function handleNavigateToPage(e, page) {
    e.preventDefault();
    navigate(`/${page}`);
  }

  function handleOnCopyTxId() {
    console.log("tx id copied");
  }

  function truncateId(id) {
    return id.substring(0, 10) + "...";
  }

  const weekWinsObject = [
    {
      address:
        "88dhgzEuTXaRQTX5KNdnaWTTX7fEZVEQRn6qP4MJotPuRnS3QpoJxYpSaXoU1y7SHp8ZXMp92TH22DBY",
      amount: 100000000,
      TxID: "109a6e3360661c3fc442a586521f08ee0d67f92f56a71cee8cacc4a8cac42a5e",
    },
    {
      address:
        "88dhgzEuTXaRQTX5KNdnaWTTX7fEZVEQRn6qP4MJotPuRnS3QpoJxYpSaXoU1y7SHp8ZXMp92TH22DBY",
      amount: 100000,
      TxID: "109a6e3360661c3fc442a586521f08ee0d67f92f56a71cee8cacc4a8cac42a5e",
    },
    {
      address:
        "88dhgzEuTXaRQTX5KNdnaWTTX7fEZVEQRn6qP4MJotPuRnS3QpoJxYpSaXoU1y7SHp8ZXMp92TH22DBY",
      amount: 100000,
      TxID: "109a6e3360661c3fc442a586521f08ee0d67f92f56a71cee8cacc4a8cac42a5e",
    },
  ];

  return (
    <div id="page-content-wrapper">
      <div id="home-page-hot-wrapper">
        <div id="home-page-hot">
          <div id="home-page-hot-border">
            <div id="home-page-hot-content-background">
              <div id="home-page-inner-wrapper">
                <div id="home-page-inner-left">
                  <div id="bottom">
                    <div id="inner-fill"></div>
                    <div id="header">
                      <h1>
                        The World’s
                        <br />
                        Fairest Casino!
                      </h1>
                      <span id="header-description">
                        Be the ‘house’ or the bettor and take full control with
                        <br />
                        Night Owl’s open-source and transparent platform!
                      </span>
                      <br />
                      <button
                        id="header-button"
                        onClick={(e) => handleNavigateToPage(e, "swap")}
                      >
                        Get Started!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="home-page-footer">
        <div id="home-page-transactions-wrapper">
          <div id="home-page-transactions-border">
            <div id="transactions-wrapper">
              <div id="transactions-header-wrapper">
                <div id="transactions-header">
                  <div
                    id="transactions-icon"
                    style={{ backgroundImage: `url(${leaderboard_icon})` }}
                  ></div>
                  <h2 id="transactions-text">Biggest Wins of the Week!</h2>
                </div>
              </div>
              <div id="transactions-table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Address</th>
                      <th className="transaction-amount">Amount</th>
                      <th>Tx ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {weekWinsObject.map((item, index) => (
                      <tr key={index}>
                        <td style={{ color: "#fa008c" }}>{index + 1}</td>
                        <td>{truncateId(item.address)}</td>
                        <td>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            {item.amount}
                            <img
                              src={owlIcon}
                              alt="Owl icon"
                              className="owl-table-icon"
                            />
                          </div>
                        </td>

                        <td>
                          {truncateId(item.TxID)}
                          <img
                            src={copyIcon}
                            alt="Copy address"
                            id="copy-address-img"
                            onClick={handleOnCopyTxId}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div id="home-page-hot-games">
          <div id="hot-game-slots" className="hot-games-border">
            <div className="hot-games-wrapper">
              <div
                style={{
                  width: "50%",
                  borderRadius: 25,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  paddingLeft: 10,
                }}
              >
                <div>
                  <h2 style={{ marginBottom: 5 }}>Popular games</h2>
                  <span>Blakiston Lottery</span>
                </div>
                <div style={{ marginBottom: 15 }}>
                  <button
                    className="hot-games-button"
                    onClick={(e) => handleNavigateToPage(e, "games/lottery")}
                  >
                    Play Now!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
