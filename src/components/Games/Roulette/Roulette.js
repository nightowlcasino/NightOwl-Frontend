import React, { useEffect, useRef, useState, useContext } from "react";
import { connect, StringCodec } from "nats.ws";
import StateContext from "../../Context";
import axios from "axios";
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";

import "./Roulette.css";
import outterWheel1 from "../../../assets/Elements/behind2.png";
import undoIcon from "../../../assets/Elements/undo.svg";
import resetIcon from "../../../assets/Elements/clearAll.svg";
import clearAll1 from "../../../assets/Elements/clearAll1.svg";
import clearAll2 from "../../../assets/Elements/clearAll2.svg";
import infoLogo from "../../../assets/Elements/infologo.svg";
import infoLogo1 from "../../../assets/Elements/infologo1.svg";
import infoLogo2 from "../../../assets/Elements/infologo2.svg";
import shareLogo from "../../../assets/Elements/share.svg";
import coin_100 from "../../../assets/Elements/coin_100.png";
import coin_500 from "../../../assets/Elements/coin_500.png";
import coin_2k5 from "../../../assets/Elements/coin_2k5.png";
import coin_10k from "../../../assets/Elements/coin_10k.png";
import coin_50k from "../../../assets/Elements/coin_50k.png";
import rouletteMascot from "../../../assets/Elements/rouletteMascot.png";
import closeModalIcon from "../../../assets/Elements/closeModal.svg";
import RouletteModal from "../../Modals/RouletteModal";

import loopSound from "../../../assets/Sounds/loop.mp3";
import ReactHowler from "react-howler";

import {
  singleNumberFields,
  doubleNumberFields,
  fromNumberToColor,
  red,
  timer,
  betObjectInitialValue,
  endAudio,
  winningSounds,
  arrayWithNumVals,
  arrayWithNumVals1,
  arrayWithNumVals2,
  arrayWithNumVals3,
  arrayWithNumVals4,
  checkIfZero,
  centerOrBetween,
  fromChipValueToColor,
  spinButtonAudio,
  errorAudio,
  choosingChip,
  placingChip,
  numberRevealAudio,
  rouletteHoverAudio,
} from "./RouletteUtils";

const TOKENID_NO_TEST =
  "473041c7e13b5f5947640f79f00d3c5df22fad4841191260350bb8c526f9851f";
const TOKENID_ERG =
  "0000000000000000000000000000000000000000000000000000000000000000";
const MINER_FEE_VALUE = 1100000;
const MIN_BOX_VALUE = 1000000;

const Roulette = ({ sidebarToggled }) => {
  const [overlayString, setOverlayString] = useState("No more bets");
  const [spinAvailable, setSpinAvailable] = useState(true);
  const [revealData, setRevealData] = useState(false);
  const [resultNumber, setResultNumber] = useState(null);
  const [resultColor, setResultColor] = useState(null);
  const [randomNumber, setRandomNumber] = useState(null);
  const [firstSpin, setFirstSpin] = useState(true);
  const [chipSelected, setChipSelected] = useState(100);
  const [totalBet, setTotalBet] = useState(0);
  const [betObject, setBetObject] = useState(betObjectInitialValue);
  const [latestResults, setLatestResults] = useState([]);
  const [latestBets, setLatestBets] = useState([]);
  const [betsEnded, setBetsEnded] = useState(false);
  const [tableFilter, setTableFilter] = useState("");
  const [stopSpin, setStopSpin] = useState(false);
  const [newRandomNumber, setNewRandomNumber] = useState(false);
  const [isLoopSound, setLoopSound] = useState(false);
  const [isEndSound, setEndSound] = useState(false);
  const [natsConn, setNatsConn] = useState(false);
  const [informationAboutGameIsPressed, setInformationAboutGameIsPressed] =
    useState(false);
  const [notification, setNotification] = useState(false);
  const [winningNotification, setWinningNotification] = useState(false);
  const { ergoWallet, defaultAddress } = useContext(StateContext);

  console.log(ergoWallet);
  const checkWallet = localStorage.getItem("walletConnected");
  let sub;
  const sc = StringCodec();
  //const waiting_for_respond_animation_delay = setInterval(() => {}, 1000);

  const innerRef = useRef();

  // const betIsWon = () => {
  //   Object.values(betObject).forEach((betArray, index) => {
  //     if (betArray.length) {
  //       let amountBetted;
  //       amountBetted = betArray.reduce((x, y) => x + y);
  //       let aux = betIsWithinWinningFields(index, randomNumber);
  //       if (aux) {}
  //       console.log(index);
  //     }
  //   });
  // };

  const wsConnect = () => {
    connect({ servers: "ws://127.0.0.1:9222" })
      .then(async function (nc) {
        if (checkWallet === "true") {
          sub = nc.subscribe(
            `roulette.${localStorage.getItem("walletAddress")}`
          );
          console.log(
            `subscribed to roulette.${localStorage.getItem("walletAddress")}`
          );
          (async () => {
            for await (const m of sub) {
              let rnString = sc.decode(m.data);
              const randNum = Number("0x" + rnString) % 37;
              console.log(randNum);
              setStopSpin(true);
              setRandomNumber(randNum);
              setNewRandomNumber(true);
            }
            console.log("subscription closed");
          })();
          setNatsConn(true);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  function handleChipSelected(chipValue) {
    console.log("what")
    setChipSelected(chipValue);
    choosingChip.currentTime = 0;
    choosingChip.play();
  }

  function handleTableFilter(filter) {
    setTableFilter(filter);
    rouletteHoverAudio.currentTime = 0;
    rouletteHoverAudio.play();
  }

  useEffect(() => {
    innerRef.current.setAttribute("data-spinto", "");
    innerRef.current.classList.remove("stop-spin");
    innerRef.current.classList.remove("default-spin");
    if (stopSpin) {
      setStopSpin(false);
      setNewRandomNumber(!newRandomNumber);
      let color = null;
      innerRef.current.classList.remove("waiting-for-respond");

      setTimeout(() => {
        innerRef.current.setAttribute("data-spinto", randomNumber);
        setLoopSound(true);
      }, 500);

      // remove the disabled attribute when the ball has stopped
      //setInterval(() => {
      setTimeout(() => {
        setSpinAvailable(true);

        if (randomNumber === 0) {
          color = "green";
        } else if (red.indexOf(randomNumber) !== -1) {
          color = "red";
        } else {
          color = "black";
        }

        setTimeout(() => {
          // if (betIsWon()) {
          playRandomWinningSound();
          notifyWin();
          // }
          setBetsEnded(false);
          resetBets();
          addLastResult(randomNumber);
        }, 2500);

        setResultNumber(randomNumber);
        setResultColor(color);
        setRevealData(true);
        setRandomNumber(randomNumber);
        numberRevealAudio.play();
        if (firstSpin) setFirstSpin(false);
      }, timer + 50);
      setTimeout(() => {
        setLoopSound(false);
        innerRef.current.classList.add("stop-spin");
      }, timer * 0.7);
      setTimeout(() => {
        endAudio.play();
      }, timer * 0.65);
    }
  }, [newRandomNumber]);

  function playRandomWinningSound() {
    let randomSound = Math.floor(Math.random() * winningSounds.length);
    winningSounds[randomSound].play();
  }
  function buildBackendBetObject() {
    let betObject = {
      totalWager: totalBet,
      bets: [
        // Red/Black
        {
          r4: 0,
          r5: 0,
          multiplier: 1,
          amount: 10,
        },
        // Odd/Even
        {
          r4: 1,
          r5: 0,
          multiplier: 1,
          amount: 10,
        },
        // Lower Half/Upper Half
        {
          r4: 2,
          r5: 10,
          multiplier: 1,
          amount: 10,
        },
        // Columns
        {
          r4: 3,
          r5: 1,
          multiplier: 2,
          amount: 10,
        },
        // Lower third/ Mid third/ Upper third
        {
          r4: 4,
          r5: 6,
          multiplier: 2,
          amount: 10,
        },
        // Exact numbers
        singleNumberFields.map((field) => {
          return {
            r4: 5,
            r5: field.slice(7),
            multiplier: 35,
            amount: 10, //owl amount
          };
        }),
      ],
    };

    return betObject;
  }

  function addBetToObject(e) {
    // Test wether the bet amount has reached a maximum value and if so, warn the user about it.
    // if (totalBet > APICallRetrievingMaxPossibleBet) {
    //   notifySomething("You have reached the maximum bet amount.", 3);
    //   return;
    // }

    var numbers = e.target.getAttribute("num-val");
    let currentArrayCopy = betObject[`num_val${numbers}`].slice();
    currentArrayCopy.push(chipSelected);
    setBetObject({
      ...betObject,
      [`num_val${numbers}`]: currentArrayCopy, //betObject[`num_val${numbers}`] + chipSelected,
    });
    addLatestBet(numbers);
    setTotalBet(totalBet + chipSelected);
    placingChip.currentTime = 0;
    placingChip.play();
  }

  function resetBets() {
    setBetObject(betObjectInitialValue);
    setTotalBet(0);
  }

  function addLastResult(result) {
    let latestResultsCopy = latestResults.slice();
    latestResultsCopy.unshift(result);
    setLatestResults(latestResultsCopy);
  }

  function addLatestBet(bet) {
    let latestBetsCopy = latestBets.slice();
    latestBetsCopy.push(bet);
    setLatestBets(latestBetsCopy);
  }

  function spinTheWheel() {
    if (!totalBet) {
      notifySomething("Before spinning the wheel, please make your bet by adding chips to the table!", 3);
      errorAudio.play();
      return;
    }
    spinButtonAudio.play();
    if (!natsConn) {
      wsConnect();
    }

    let utxos = [];
    let boxId = "";
    const minERG =
      MIN_BOX_VALUE + MIN_BOX_VALUE + MINER_FEE_VALUE + MIN_BOX_VALUE;

    innerRef.current.classList.add("waiting-for-respond");

    if (!firstSpin) {
      setRevealData(false);
    }
    setBetsEnded(true);
    setSpinAvailable(false);
    setOverlayString("Waiting for the random number to be generated…");
    //txFee:
    //  minBoxValue    = 1000000 * (# of bets)
    //  minerFee       = 1100000
    //  changeBoxValue = 1000000
    //  payoutFee      = 1000000 * (# of bets)

    //roulette bet for even
    const board = {
      txFee: minERG,
      totalWager: 10,
      bets: [
        {
          r4: 1,
          r5: 0,
          multiplier: 1,
          amount: 10,
        },
      ],
    };

    // Get utxo for ERGs
    ergoWallet.get_utxos(minERG, TOKENID_ERG).then((utxosResponse) => {
      if (utxosResponse.length === 0) {
        console.log("NO ERG UTXOS");
        return;
      } else {
        utxos = JSON.parse(JSON.stringify(utxosResponse));
        ergoWallet
          .get_utxos(board.totalWager, TOKENID_NO_TEST)
          .then((utxosResponse) => {
            if (utxosResponse.length === 0) {
              console.log("NO OWL UTXOS");
              return;
            } else {
              utxosResponse.forEach((owlBox) => {
                let found = false;
                utxos.forEach((box) => {
                  // Check if any matching boxIds
                  // TODO: Add a break/continue
                  if (owlBox.boxId == box.boxId) {
                    found = true;
                  }
                });
                // Found none
                if (!found) {
                  utxos.push(owlBox);
                }
              });
              console.log(utxos);
              // send bet data structure to backend for the bet tx to be built
              //axios
              //  .post(`/api/v1/roulette/bet-tx`, {
              //    board: board,
              //    senderAddr: `${localStorage.getItem("walletAddress")}`,
              //    utxos: utxos,
              //  })
              //  .then(async function (response) {
              //    // sign tx
              //    const signedTx = await signTx(response.data.unsignedTx);
              //    console.log("signedTx", signedTx);
              //    // Get a BoxId to use for the random number call
              //    boxId = signedTx.outputs[2].boxId;
              //    // submit to node
              //    submitTx(signedTx, response.data.sessionId)
              //      .then(async (txId) => {
              //        if (!txId) {
              //          console.log(`No submitted tx ID`);
              //          return null;
              //        }
              //        console.log(`Transaction submitted - ${txId.data}`);
              // call rng service with wallet address and box id to get our random number
              axios
                .get(
                  `http://127.0.0.1:8089/api/v1/test/random-number/roulette?walletAddr=${localStorage.getItem(
                    "walletAddress"
                  )}`
                )
                .then(async function (resp) {
                  console.log("GET api/v1/random-number/roulette", { resp });
                })
                .catch(function (error) {
                  console.log(error);
                });
              //      })
              //      .catch((err) => {
              //        console.log(err);
              //      });
              //  })
              //  .catch(function (error) {
              //    console.log(error);
              //  });
            }
          });
      }
    });

    async function signTx(txToBeSigned) {
      try {
        return await ergoWallet.sign_tx(txToBeSigned);
      } catch (err) {
        const msg = `[signTx] Error: ${JSON.stringify(err)}`;
        console.error(msg, err);
        return null;
      }
    }

    async function submitTx(txToBeSubmitted, sessionId) {
      try {
        return await axios.post(`/api/v1/transactions`, {
          senderAddr: `${localStorage.getItem("walletAddress")}`,
          game: "roulette",
          sessionId: sessionId,
          tx: txToBeSubmitted,
        });
      } catch (err) {
        const msg = `[submitTx] Error: ${JSON.stringify(err)}`;
        console.error(msg, err);
        return null;
      }
    }

    //send the backend the bet object using buildBackendBetObject();

    /* REMOVE THIS ONE AFTER BACKEND CALLS ARE PROPERLY WORKING */
    setStopSpin(true);

    //This literally triggers the spin to stop, so this next two lines should only be executed when the number is retrieved from the blockchain
    setRandomNumber(10);
    setNewRandomNumber(true);

    // SIMULATION OF THE WAITING FOR THE 2 MINUTES LIMIT.
    // fetchData();
  }

  const randNumTimeout = new Promise((resolve) => {
    setTimeout(() => resolve(false), 120000);
  });

  const fetchData = async () => {
    console.log("a saber");
    const response = await Promise.race([randNumTimeout]);
    if (!response) {
      // warn user that the random number was not retrieved properly
      setBetsEnded(false);
      innerRef.current.classList.remove("waiting-for-respond");
      notifySomething(
        "Random number couldn't be retrieved from the blockchain",
        5
      );
    } else {
      console.log("random number came successfully");
      //Treatment of the number returned.
      //This literally triggers the spin to stop, so this next two lines should only be executed when the number is retrieved from the blockchain
      // setRandomNumber(10);
      // setNewRandomNumber(true);
    }
  };

  function notifySomething(messageString, secondsAmount) {
    setOverlayString(messageString);
    setNotification(true);
    setTimeout(() => {
      setNotification(false);
      setSpinAvailable(true);
    }, secondsAmount * 1000);
  }

  function notifyWin() {
    setOverlayString("Congrats! You won xyz OWL!");
    setWinningNotification(true);
    setTimeout(() => {
      setWinningNotification(false);
    }, 4000);
  }

  function globalUndo() {
    let lastBet = latestBets.pop();
    if (lastBet === undefined) {
      return;
    }

    let currentBetObjectCopy = betObject[`num_val${lastBet}`].slice();
    let chipValueUndone = currentBetObjectCopy.pop();
    setBetObject({
      ...betObject,
      [`num_val${lastBet}`]: currentBetObjectCopy,
    });
    setTotalBet(totalBet - chipValueUndone);
  }

  return (
    <div
      className={betsEnded ? "roulette-wrapper" : "roulette-wrapper bets-end"}
    >
      <ReactHowler src={loopSound} playing={isLoopSound} loop={true} />
      <RouletteModal gameMascotImg={rouletteMascot} showModal={informationAboutGameIsPressed} setModalOff={setInformationAboutGameIsPressed}/>
      <div
        className="roulette-wheel-content-wrapper"
        style={{ pointerEvents: informationAboutGameIsPressed ? "none" : "" }}
      >
        {!sidebarToggled && (
          <div className="roulette-wheel-content">
            <div className="plate" id="plate">
              <img
                src={outterWheel1}
                className="behindlol"
                alt="outter-roulette-wheel"
              />
              <ul
                id="fuckinginner"
                className="inner default-spin"
                ref={innerRef}
              >
                <li className="number">
                  <label>
                    <input type="radio" name="pit" value="32" />
                    <span className="pit">32</span>
                  </label>
                </li>
                <li className="number">
                  <label>
                    <input type="radio" name="pit" value="15" />
                    <span className="pit">15</span>
                  </label>
                </li>
                <li className="number">
                  <label>
                    <input type="radio" name="pit" value="19" />
                    <span className="pit">19</span>
                  </label>
                </li>
                <li className="number">
                  <label>
                    <input type="radio" name="pit" value="4" />
                    <span className="pit">4</span>
                  </label>
                </li>
                <li className="number">
                  <label>
                    <input type="radio" name="pit" value="21" />
                    <span className="pit">21</span>
                  </label>
                </li>
                <li className="number">
                  <label>
                    <input type="radio" name="pit" value="2" />
                    <span className="pit">2</span>
                  </label>
                </li>
                <li className="number">
                  <label>
                    <input type="radio" name="pit" value="25" />
                    <span className="pit">25</span>
                  </label>
                </li>
                <li className="number">
                  <label>
                    <input type="radio" name="pit" value="17" />
                    <span className="pit">17</span>
                  </label>
                </li>
                <li className="number">
                  <label>
                    <input type="radio" name="pit" value="34" />
                    <span className="pit">34</span>
                  </label>
                </li>
                <li className="number">
                  <label>
                    <input type="radio" name="pit" value="6" />
                    <span className="pit">6</span>
                  </label>
                </li>
                <li className="number">
                  <label>
                    <input type="radio" name="pit" value="27" />
                    <span className="pit">27</span>
                  </label>
                </li>
                <li className="number">
                  <label>
                    <input type="radio" name="pit" value="13" />
                    <span className="pit">13</span>
                  </label>
                </li>
                <li className="number">
                  <label>
                    <input type="radio" name="pit" value="36" />
                    <span className="pit">36</span>
                  </label>
                </li>
                <li className="number">
                  <label>
                    <input type="radio" name="pit" value="11" />
                    <span className="pit">11</span>
                  </label>
                </li>
                <li className="number">
                  <label>
                    <input type="radio" name="pit" value="30" />
                    <span className="pit">30</span>
                  </label>
                </li>
                <li className="number">
                  <label>
                    <input type="radio" name="pit" value="8" />
                    <span className="pit">8</span>
                  </label>
                </li>
                <li className="number">
                  <label>
                    <input type="radio" name="pit" value="23" />
                    <span className="pit">23</span>
                  </label>
                </li>
                <li className="number">
                  <label>
                    <input type="radio" name="pit" value="10" />
                    <span className="pit">10</span>
                  </label>
                </li>
                <li className="number">
                  <label>
                    <input type="radio" name="pit" value="5" />
                    <span className="pit">5</span>
                  </label>
                </li>
                <li className="number">
                  <label>
                    <input type="radio" name="pit" value="24" />
                    <span className="pit">24</span>
                  </label>
                </li>
                <li className="number">
                  <label>
                    <input type="radio" name="pit" value="16" />
                    <span className="pit">16</span>
                  </label>
                </li>
                <li className="number">
                  <label>
                    <input type="radio" name="pit" value="33" />
                    <span className="pit">33</span>
                  </label>
                </li>
                <li className="number">
                  <label>
                    <input type="radio" name="pit" value="1" />
                    <span className="pit">1</span>
                  </label>
                </li>
                <li className="number">
                  <label>
                    <input type="radio" name="pit" value="20" />
                    <span className="pit">20</span>
                  </label>
                </li>
                <li className="number">
                  <label>
                    <input type="radio" name="pit" value="14" />
                    <span className="pit">14</span>
                  </label>
                </li>
                <li className="number">
                  <label>
                    <input type="radio" name="pit" value="31" />
                    <span className="pit">31</span>
                  </label>
                </li>
                <li className="number">
                  <label>
                    <input type="radio" name="pit" value="9" />
                    <span className="pit">9</span>
                  </label>
                </li>
                <li className="number">
                  <label>
                    <input type="radio" name="pit" value="22" />
                    <span className="pit">22</span>
                  </label>
                </li>
                <li className="number">
                  <label>
                    <input type="radio" name="pit" value="18" />
                    <span className="pit">18</span>
                  </label>
                </li>
                <li className="number">
                  <label>
                    <input type="radio" name="pit" value="29" />
                    <span className="pit">29</span>
                  </label>
                </li>
                <li className="number">
                  <label>
                    <input type="radio" name="pit" value="7" />
                    <span className="pit">7</span>
                  </label>
                </li>
                <li className="number">
                  <label>
                    <input type="radio" name="pit" value="28" />
                    <span className="pit">28</span>
                  </label>
                </li>
                <li className="number">
                  <label>
                    <input type="radio" name="pit" value="12" />
                    <span className="pit">12</span>
                  </label>
                </li>
                <li className="number">
                  <label>
                    <input type="radio" name="pit" value="35" />
                    <span className="pit">35</span>
                  </label>
                </li>
                <li className="number">
                  <label>
                    <input type="radio" name="pit" value="3" />
                    <span className="pit">3</span>
                  </label>
                </li>
                <li className="number">
                  <label>
                    <input type="radio" name="pit" value="26" />
                    <span className="pit">26</span>
                  </label>
                </li>
                <li className="number">
                  <label>
                    <input type="radio" name="pit" value="0" />
                    <span className="pit">0</span>
                  </label>
                </li>
              </ul>

              <div className={revealData ? "data reveal" : "data"}>
                <div className="data-inner">
                  <div
                    className="result"
                    style={{ backgroundColor: resultColor }}
                  >
                    <div className="result-number">{resultNumber}</div>
                    <div className="result-color">{resultColor}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div
        className={
          notification || winningNotification
            ? "roulette-table-content-wrapper notification"
            : "roulette-table-content-wrapper"
        }
        style={{
          pointerEvents: informationAboutGameIsPressed ? "none" : "",
        }}
      >
        <div id="top-buttons-container">
          <div
            className="top-button-container"
            style={{ visibility: totalBet > 0 ? "visible" : "hidden" }}
          >
            <button
              type="button"
              className={spinAvailable ? "top-btn" : "btn disabled"}
              id="resetBetsButton"
              onClick={() => resetBets()}
            >
              <span className="btn-label">
                <img src={clearAll2} alt="Reset Bets" />
              </span>
            </button>
          </div>
          <div
            className="top-button-container"
            style={{ visibility: totalBet > 0 ? "visible" : "hidden" }}
          >
            <button
              type="button"
              className={spinAvailable ? "top-btn" : "btn disabled"}
              id="globalUndo"
              onClick={() => globalUndo()}
            >
              <span className="btn-label">
                <img src={undoIcon} alt="Undo" />
              </span>
            </button>
          </div>
          <div className="info-btn-container">
            <button
              type="button"
              id="info-btn"
              onClick={() => {
                setInformationAboutGameIsPressed(true);
              }}
            >
              <span className="btn-label">
                <img
                  src={infoLogo}
                  alt="Game info"
                  style={{ width: "30px", height: "30px" }}
                />
              </span>
            </button>
          </div>
        </div>
        <div id="before-table">
          <div id="table-total-bet">
            Total bet <span>{totalBet} OWL</span>
          </div>
          <div id="table-history">
            {latestResults.map((result, index) => (
              <>
                <div className={`history-number ${fromNumberToColor(result)}`}>
                  {result}
                </div>
                <div className="history-spacer"></div>
              </>
            ))}
          </div>
        </div>
        <div className="roulette-table-content" style={{ color: "white" }}>
          <div id="table-wrapper">
            <div id="top-row">
              <div id="numbers-table-wrapper">
                <div id="left-table">
                  <div className="table-value green">
                    <div>0</div>
                  </div>
                </div>
                <div className={tableFilter} id="table-numbers">
                  <div id="first-row" className="table-row">
                    <div id="number-3" className="table-value width-1-12th red">
                      3
                    </div>
                    <div
                      id="number-6"
                      className="table-value width-1-12th black"
                    >
                      6
                    </div>
                    <div id="number-9" className="table-value width-1-12th red">
                      9
                    </div>
                    <div
                      id="number-12"
                      className="table-value width-1-12th red"
                    >
                      12
                    </div>
                    <div
                      id="number-15"
                      className="table-value width-1-12th black"
                    >
                      15
                    </div>
                    <div
                      id="number-18"
                      className="table-value width-1-12th red"
                    >
                      18
                    </div>
                    <div
                      id="number-21"
                      className="table-value width-1-12th red"
                    >
                      21
                    </div>
                    <div
                      id="number-24"
                      className="table-value width-1-12th black"
                    >
                      24
                    </div>
                    <div
                      id="number-27"
                      className="table-value width-1-12th red"
                    >
                      27
                    </div>
                    <div
                      id="number-30"
                      className="table-value width-1-12th red"
                    >
                      30
                    </div>
                    <div
                      id="number-33"
                      className="table-value width-1-12th black"
                    >
                      33
                    </div>
                    <div
                      id="number-36"
                      className="table-value width-1-12th red"
                    >
                      36
                    </div>
                  </div>
                  <div id="second-row" className="table-row">
                    <div
                      id="number-2"
                      className="table-value width-1-12th black"
                    >
                      2
                    </div>
                    <div id="number-5" className="table-value width-1-12th red">
                      5
                    </div>
                    <div
                      id="number-8"
                      className="table-value width-1-12th black"
                    >
                      8
                    </div>
                    <div
                      id="number-11"
                      className="table-value width-1-12th black"
                    >
                      11
                    </div>
                    <div
                      id="number-14"
                      className="table-value width-1-12th red"
                    >
                      14
                    </div>
                    <div
                      id="number-17"
                      className="table-value width-1-12th black"
                    >
                      17
                    </div>
                    <div
                      id="number-20"
                      className="table-value width-1-12th black"
                    >
                      20
                    </div>
                    <div
                      id="number-23"
                      className="table-value width-1-12th red"
                    >
                      23
                    </div>
                    <div
                      id="number-26"
                      className="table-value width-1-12th black"
                    >
                      26
                    </div>
                    <div
                      id="number-29"
                      className="table-value width-1-12th black"
                    >
                      29
                    </div>
                    <div
                      id="number-32"
                      className="table-value width-1-12th red"
                    >
                      32
                    </div>
                    <div
                      id="number-35"
                      className="table-value width-1-12th black"
                    >
                      35
                    </div>
                  </div>
                  <div id="third-row" className="table-row">
                    <div id="number-1" className="table-value width-1-12th red">
                      1
                    </div>
                    <div
                      id="number-4"
                      className="table-value width-1-12th black"
                    >
                      4
                    </div>
                    <div id="number-7" className="table-value width-1-12th red">
                      7
                    </div>
                    <div
                      id="number-10"
                      className="table-value width-1-12th black"
                    >
                      10
                    </div>
                    <div
                      id="number-13"
                      className="table-value width-1-12th black"
                    >
                      13
                    </div>
                    <div
                      id="number-16"
                      className="table-value width-1-12th red"
                    >
                      16
                    </div>
                    <div
                      id="number-19"
                      className="table-value width-1-12th red"
                    >
                      19
                    </div>
                    <div
                      id="number-22"
                      className="table-value width-1-12th black"
                    >
                      22
                    </div>
                    <div
                      id="number-25"
                      className="table-value width-1-12th red"
                    >
                      25
                    </div>
                    <div
                      id="number-28"
                      className="table-value width-1-12th black"
                    >
                      28
                    </div>
                    <div
                      id="number-31"
                      className="table-value width-1-12th black"
                    >
                      31
                    </div>
                    <div
                      id="number-34"
                      className="table-value width-1-12th red"
                    >
                      34
                    </div>
                  </div>
                </div>
                <div id="numbers-overlay">
                  <div className="row spacer"></div>
                  <div className="row number-center">
                    <div className="inner-row spacer"></div>
                    {arrayWithNumVals.map((val, index) => (
                      <div
                        className={
                          betObject[val].length > 0
                            ? `inner-row number-${centerOrBetween(
                                index
                              )} ${checkIfZero(
                                val.split("l")[1]
                              )} ${fromChipValueToColor(
                                betObject[val][betObject[val].length - 1]
                              )} two-d`
                            : "inner-row number-center"
                        }
                        num-val={val.split("l")[1]}
                        onClick={(e) => addBetToObject(e)}
                      ></div>
                    ))}
                    <div className="inner-row spacer"></div>
                  </div>
                  <div className="row number-between">
                    <div className="inner-row spacer"></div>
                    {arrayWithNumVals1.map((val, index) => (
                      <div
                        className={
                          betObject[val].length > 0
                            ? `inner-row number-${centerOrBetween(
                                index
                              )} ${checkIfZero(
                                val.split("l")[1]
                              )} ${fromChipValueToColor(
                                betObject[val][betObject[val].length - 1]
                              )} two-d`
                            : `inner-row number-${centerOrBetween(index)}`
                        }
                        num-val={val.split("l")[1]}
                        onClick={(e) => addBetToObject(e)}
                      ></div>
                    ))}
                    <div className="inner-row spacer"></div>
                  </div>
                  <div className="row number-center">
                    <div className="inner-row spacer"></div>
                    {arrayWithNumVals2.map((val, index) => (
                      <div
                        className={
                          betObject[val].length > 0
                            ? `inner-row number-${centerOrBetween(
                                index
                              )} active ${fromChipValueToColor(
                                betObject[val][betObject[val].length - 1]
                              )} two-d`
                            : `inner-row number-${centerOrBetween(index)}`
                        }
                        num-val={val.split("l")[1]}
                        onClick={(e) => addBetToObject(e)}
                      ></div>
                    ))}
                    <div className="inner-row spacer"></div>
                  </div>
                  <div className="row number-between">
                    <div className="inner-row spacer"></div>
                    {arrayWithNumVals3.map((val, index) => (
                      <div
                        className={
                          betObject[val].length > 0
                            ? `inner-row number-${centerOrBetween(
                                index
                              )} ${checkIfZero(
                                val.split("l")[1]
                              )} ${fromChipValueToColor(
                                betObject[val][betObject[val].length - 1]
                              )} two-d`
                            : `inner-row number-${centerOrBetween(index)}`
                        }
                        num-val={val.split("l")[1]}
                        onClick={(e) => addBetToObject(e)}
                      ></div>
                    ))}
                    <div className="inner-row spacer"></div>
                  </div>
                  <div className="row number-center">
                    <div className="inner-row spacer"></div>
                    {arrayWithNumVals4.map((val, index) => (
                      <div
                        className={
                          betObject[val].length > 0
                            ? `inner-row number-${centerOrBetween(
                                index
                              )} ${checkIfZero(
                                val.split("l")[1]
                              )} ${fromChipValueToColor(
                                betObject[val][betObject[val].length - 1]
                              )} two-d`
                            : `inner-row number-${centerOrBetween(index)}`
                        }
                        num-val={val.split("l")[1]}
                        onClick={(e) => addBetToObject(e)}
                      ></div>
                    ))}
                    <div className="inner-row spacer"></div>
                  </div>
                  <div className="row spacer"></div>
                </div>
              </div>
              <div id="right-table">
                <div
                  style={{
                    borderTopRightRadius: "8px",
                  }}
                  onMouseEnter={() =>
                    handleTableFilter("filter-applied first-row")
                  }
                  onMouseLeave={() => handleTableFilter("")}
                  className={
                    betObject.num_val1st.length > 0
                      ? `table-value table-filter width-1-3rd chip-${fromChipValueToColor(
                          betObject.num_val1st[betObject.num_val1st.length - 1]
                        )} active`
                      : "table-value table-filter width-1-3rd"
                  }
                >
                  <div>1st</div>
                  <div className="filter-overlay">
                    <div
                      className="filter-chip"
                      num-val="1st"
                      onClick={(e) => addBetToObject(e)}
                    ></div>
                  </div>
                </div>
                <div
                  onMouseEnter={() =>
                    handleTableFilter("filter-applied second-row")
                  }
                  onMouseLeave={() => handleTableFilter("")}
                  className={
                    betObject.num_val2nd.length > 0
                      ? `table-value table-filter width-1-3rd chip-${fromChipValueToColor(
                          betObject.num_val2nd[betObject.num_val2nd.length - 1]
                        )} active`
                      : "table-value table-filter width-1-3rd"
                  }
                >
                  <div>2nd</div>
                  <div className="filter-overlay">
                    <div
                      className="filter-chip"
                      num-val="2nd"
                      onClick={(e) => addBetToObject(e)}
                    ></div>
                  </div>
                </div>
                <div
                  style={{
                    borderBottomRightRadius: "8px",
                  }}
                  onMouseEnter={() =>
                    handleTableFilter("filter-applied third-row")
                  }
                  onMouseLeave={() => handleTableFilter("")}
                  className={
                    betObject.num_val3rd.length > 0
                      ? `table-value table-filter width-1-3rd chip-${fromChipValueToColor(
                          betObject.num_val3rd[betObject.num_val3rd.length - 1]
                        )} active`
                      : "table-value table-filter width-1-3rd"
                  }
                >
                  <div>3rd</div>
                  <div className="filter-overlay">
                    <div
                      className="filter-chip"
                      num-val="3rd"
                      onClick={(e) => addBetToObject(e)}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div id="bottom-row">
              <div className="bottom-table-spacer">
                <div className="table-value"></div>
              </div>
              <div id="bottom-center-table">
                <div id="center-top-row" className="table-row">
                  <div
                    onMouseEnter={() =>
                      handleTableFilter("filter-applied first-12")
                    }
                    onMouseLeave={() => handleTableFilter("")}
                    className={
                      betObject.num_val_first_12.length > 0
                        ? `table-value table-filter width-1-3rd chip-${fromChipValueToColor(
                            betObject.num_val_first_12[
                              betObject.num_val_first_12.length - 1
                            ]
                          )} active`
                        : "table-value table-filter width-1-3rd"
                    }
                  >
                    <div>1st 12</div>
                    <div className="filter-overlay">
                      <div
                        className="filter-chip"
                        num-val="_first_12"
                        onClick={(e) => addBetToObject(e)}
                      ></div>
                    </div>
                  </div>
                  <div
                    onMouseEnter={() =>
                      handleTableFilter("filter-applied second-12")
                    }
                    onMouseLeave={() => handleTableFilter("")}
                    className={
                      betObject.num_val_second_12.length > 0
                        ? `table-value table-filter width-1-3rd chip-${fromChipValueToColor(
                            betObject.num_val_second_12[
                              betObject.num_val_second_12.length - 1
                            ]
                          )} active`
                        : "table-value table-filter width-1-3rd"
                    }
                  >
                    <div>2nd 12</div>
                    <div className="filter-overlay">
                      <div
                        className="filter-chip"
                        num-val="_second_12"
                        onClick={(e) => addBetToObject(e)}
                      ></div>
                    </div>
                  </div>
                  <div
                    onMouseEnter={() =>
                      handleTableFilter("filter-applied third-12")
                    }
                    onMouseLeave={() => handleTableFilter("")}
                    className={
                      betObject.num_val_third_12.length > 0
                        ? `table-value table-filter width-1-3rd chip-${fromChipValueToColor(
                            betObject.num_val_third_12[
                              betObject.num_val_third_12.length - 1
                            ]
                          )} active`
                        : "table-value table-filter width-1-3rd"
                    }
                  >
                    <div>3rd 12</div>
                    <div className="filter-overlay">
                      <div
                        className="filter-chip"
                        num-val="_third_12"
                        onClick={(e) => addBetToObject(e)}
                      ></div>
                    </div>
                  </div>
                </div>
                <div id="center-bottom-row" className="table-row">
                  <div
                    style={{ borderBottomLeftRadius: "8px" }}
                    onMouseEnter={() =>
                      handleTableFilter("filter-applied first-18")
                    }
                    onMouseLeave={() => handleTableFilter("")}
                    className={
                      betObject.num_val_first_18.length > 0
                        ? `table-value table-filter width-1-6th chip-${fromChipValueToColor(
                            betObject.num_val_first_18[
                              betObject.num_val_first_18.length - 1
                            ]
                          )} active`
                        : "table-value table-filter width-1-6th"
                    }
                  >
                    <div>1st 18</div>
                    <div className="filter-overlay">
                      <div
                        className="filter-chip"
                        num-val="_first_18"
                        onClick={(e) => addBetToObject(e)}
                      ></div>
                    </div>
                  </div>
                  <div
                    onMouseEnter={() => handleTableFilter("filter-applied even")}
                    onMouseLeave={() => handleTableFilter("")}
                    className={
                      betObject.num_val_even.length > 0
                        ? `table-value table-filter width-1-6th chip-${fromChipValueToColor(
                            betObject.num_val_even[
                              betObject.num_val_even.length - 1
                            ]
                          )} active`
                        : "table-value table-filter width-1-6th"
                    }
                  >
                    <div>Even</div>
                    <div className="filter-overlay">
                      <div
                        className="filter-chip"
                        num-val="_even"
                        onClick={(e) => addBetToObject(e)}
                      ></div>
                    </div>
                  </div>
                  <div
                    onMouseEnter={() =>
                      handleTableFilter("filter-applied filter-color-red")
                    }
                    onMouseLeave={() => handleTableFilter("")}
                    className={
                      betObject.num_val_red.length > 0
                        ? `table-value table-filter width-1-6th chip-${fromChipValueToColor(
                            betObject.num_val_red[
                              betObject.num_val_red.length - 1
                            ]
                          )} active romboid`
                        : "table-value table-filter width-1-6th romboid"
                    }
                  >
                    <div className="red"></div>
                    <div className="filter-overlay">
                      <div
                        className="filter-chip"
                        num-val="_red"
                        onClick={(e) => addBetToObject(e)}
                      ></div>
                    </div>
                  </div>
                  <div
                    onMouseEnter={() =>
                      handleTableFilter("filter-applied filter-color-black")
                    }
                    onMouseLeave={() => handleTableFilter("")}
                    className={
                      betObject.num_val_black.length > 0
                        ? `table-value table-filter width-1-6th chip-${fromChipValueToColor(
                            betObject.num_val_black[
                              betObject.num_val_black.length - 1
                            ]
                          )} active romboid`
                        : "table-value table-filter width-1-6th romboid"
                    }
                  >
                    <div className="black"></div>
                    <div className="filter-overlay">
                      <div
                        className="filter-chip"
                        num-val="_black"
                        onClick={(e) => addBetToObject(e)}
                      ></div>
                    </div>
                  </div>
                  <div
                    onMouseEnter={() => handleTableFilter("filter-applied odd")}
                    onMouseLeave={() => handleTableFilter("")}
                    className={
                      betObject.num_val_odd.length > 0
                        ? `table-value table-filter width-1-6th chip-${fromChipValueToColor(
                            betObject.num_val_odd[
                              betObject.num_val_odd.length - 1
                            ]
                          )} active`
                        : "table-value table-filter width-1-6th"
                    }
                  >
                    <div>Odd</div>
                    <div className="filter-overlay">
                      <div
                        className="filter-chip"
                        num-val="_odd"
                        onClick={(e) => addBetToObject(e)}
                      ></div>
                    </div>
                  </div>
                  <div
                    style={{ borderBottomRightRadius: "8px" }}
                    onMouseEnter={() =>
                      handleTableFilter("filter-applied second-18")
                    }
                    onMouseLeave={() => handleTableFilter("")}
                    className={
                      betObject.num_val_second_18.length > 0
                        ? `table-value table-filter width-1-6th chip-${fromChipValueToColor(
                            betObject.num_val_second_18[
                              betObject.num_val_second_18.length - 1
                            ]
                          )} active`
                        : "table-value table-filter width-1-6th"
                    }
                  >
                    <div>2nd 18</div>
                    <div className="filter-overlay">
                      <div
                        className="filter-chip"
                        num-val="_second_18"
                        onClick={(e) => addBetToObject(e)}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-table-spacer">
                <div className="table-value"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="roulette-table-chips">
          <div
            onClick={() => handleChipSelected(100)}
            className={
              chipSelected === 100
                ? "table-chip-wrapper active"
                : "table-chip-wrapper"
            }
          >
            <div
              className="table-chip"
              style={{ backgroundImage: `url(${coin_100})` }}
            ></div>
          </div>
          <div
            onClick={() => handleChipSelected(500)}
            className={
              chipSelected === 500
                ? "table-chip-wrapper active"
                : "table-chip-wrapper"
            }
          >
            <div
              className="table-chip"
              style={{ backgroundImage: `url(${coin_500})` }}
            ></div>
          </div>
          <div
            onClick={() => handleChipSelected(2500)}
            className={
              chipSelected === 2500
                ? "table-chip-wrapper active"
                : "table-chip-wrapper"
            }
          >
            <div
              className="table-chip"
              style={{ backgroundImage: `url(${coin_2k5})` }}
            ></div>
          </div>
          <div
            onClick={() => handleChipSelected(10000)}
            className={
              chipSelected === 10000
                ? "table-chip-wrapper active"
                : "table-chip-wrapper"
            }
          >
            <div
              className="table-chip"
              style={{ backgroundImage: `url(${coin_10k})` }}
            ></div>
          </div>
          <div
            onClick={() => handleChipSelected(50000)}
            className={
              chipSelected === 50000
                ? "table-chip-wrapper active"
                : "table-chip-wrapper"
            }
          >
            <div
              className="table-chip"
              style={{ backgroundImage: `url(${coin_50k})` }}
            ></div>
          </div>
        </div>
        <div id="bottom-buttons-container">
          <div className="spacer"></div>
          <div className="button-container">
            <button
              type="button"
              className={spinAvailable ? "btn" : "btn disabled"}
              id="spin"
              onClick={() => spinTheWheel()}
            >
              <span className="btn-label">Spin</span>
            </button>
          </div>

          <div className="spacer"></div>
        </div>
        <div id="table-overlay">
          {(notification || winningNotification || betsEnded) && (
            <img
              src={rouletteMascot}
              style={{
                width: !betsEnded ? "350px" : "275px",
                height: !betsEnded ? "350px" : "275px",
                position: "absolute",
                zIndex: 1,
                right: "2%",
                bottom: "2%",
              }}
              id="roulette-mascot"
            />
          )}
          <div
            id="table-overlay-text"
            className="bubble-bottom-right"
            style={{
              fontSize: !betsEnded ? "1.5rem" : "1.2rem",
              padding: "24px",
            }}
          >
            {overlayString}
            {winningNotification && (
              <div
                style={{
                  paddingTop: "10px",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <div className="shareIcon">
                  <TwitterShareButton
                    url={
                      "I have just won 100000 OWLs (1000$) via dev.nightowlcasino.io\n\n"
                    }
                    hashtags={["NightOwl"]}
                  >
                    <TwitterIcon size={40} round />
                  </TwitterShareButton>
                </div>
                <div className="shareIcon">
                  <TelegramShareButton
                    url={"https://web.telegram.org/k/"}
                    title={
                      "I have just won 100000 OWLs (1000$) via dev.nightowlcasino.io"
                    }
                  >
                    <TelegramIcon size={40} round />
                  </TelegramShareButton>
                </div>
                <div className="shareIcon">
                  <FacebookShareButton
                    url={"https://dev.nightowlcasino.io/"}
                    quote={
                      "I have just won 100000 OWLs (1000$) via dev.nightowlcasino.io"
                    }
                    hashtags={"I just won 100000 OWLs (1000$)"}
                  >
                    <FacebookIcon size={40} round />
                  </FacebookShareButton>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roulette;
