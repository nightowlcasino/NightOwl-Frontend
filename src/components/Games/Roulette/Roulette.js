import React, { useEffect, useRef, useState, useContext } from "react";
import { connect, StringCodec } from "nats.ws";
import StateContext from "../../Context";
import axios from "axios";
import "./Roulette.css";
import outterWheel1 from "../../../assets/Elements/behind2.png";

import coin_100 from "../../../assets/Elements/coin_100.png";
import coin_500 from "../../../assets/Elements/coin_500.png";
import coin_2k5 from "../../../assets/Elements/coin_2k5.png";
import coin_10k from "../../../assets/Elements/coin_10k.png";
import coin_50k from "../../../assets/Elements/coin_50k.png";

const TOKENID_NO_TEST = "afd0d6cb61e86d15f2a0adc1e7e23df532ba3ff35f8ba88bed16729cae933032";
const TOKENID_ERG = "0000000000000000000000000000000000000000000000000000000000000000";
const MINER_FEE_VALUE = 1100000;
const MIN_BOX_VALUE = 1000000;

const Roulette = () => {
  var red = [32, 19, 21, 25, 34, 27, 36, 30, 23, 5, 16, 1, 14, 9, 18, 7, 12, 3];

  var overlay_default = "No more bets";
  var timer = 9000;
  let betObjectInitialValue = {
    num_val0: [],
    num_val0_3: [],
    num_val3: [],
    num_val3_6: [],
    num_val6: [],
    num_val6_9: [],
    num_val9: [],
    num_val9_12: [],
    num_val12: [],
    num_val12_15: [],
    num_val15: [],
    num_val15_18: [],
    num_val18: [],
    num_val18_21: [],
    num_val21: [],
    num_val21_24: [],
    num_val24: [],
    num_val24_27: [],
    num_val27: [],
    num_val27_30: [],
    num_val30: [],
    num_val30_33: [],
    num_val33: [],
    num_val33_36: [],
    num_val36: [],

    num_val0_2_3: [],
    num_val2_3: [],
    num_val2_3_5_6: [],
    num_val5_6: [],
    num_val5_6_8_9: [],
    num_val8_9: [],
    num_val8_9_11_12: [],
    num_val11_12: [],
    num_val11_12_14_15: [],
    num_val14_15: [],
    num_val14_15_17_18: [],
    num_val17_18: [],
    num_val17_18_20_21: [],
    num_val20_21: [],
    num_val20_21_23_24: [],
    num_val23_24: [],
    num_val23_24_26_27: [],
    num_val26_27: [],
    num_val26_27_29_30: [],
    num_val29_30: [],
    num_val29_30_32_33: [],
    num_val32_33: [],
    num_val32_33_35_36: [],
    num_val35_36: [],

    num_val0_2: [],
    num_val2: [],
    num_val2_5: [],
    num_val5: [],
    num_val5_8: [],
    num_val8: [],
    num_val8_11: [],
    num_val11: [],
    num_val11_14: [],
    num_val14: [],
    num_val14_17: [],
    num_val17: [],
    num_val17_20: [],
    num_val20: [],
    num_val20_23: [],
    num_val23: [],
    num_val23_26: [],
    num_val26: [],
    num_val26_29: [],
    num_val29: [],
    num_val29_32: [],
    num_val32: [],
    num_val32_35: [],
    num_val35: [],

    num_val0_1_2: [],
    num_val1_2: [],
    num_val1_2_4_5: [],
    num_val4_5: [],
    num_val4_5_7_8: [],
    num_val7_8: [],
    num_val7_8_10_11: [],
    num_val10_11: [],
    num_val10_11_13_14: [],
    num_val13_14: [],
    num_val13_14_16_17: [],
    num_val16_17: [],
    num_val16_17_19_20: [],
    num_val19_20: [],
    num_val19_20_22_23: [],
    num_val22_23: [],
    num_val22_23_25_26: [],
    num_val25_26: [],
    num_val25_26_28_29: [],
    num_val28_29: [],
    num_val28_29_31_32: [],
    num_val31_32: [],
    num_val31_32_34_35: [],
    num_val34_35: [],

    num_val0_1: [],
    num_val1: [],
    num_val1_4: [],
    num_val4: [],
    num_val4_7: [],
    num_val7: [],
    num_val7_10: [],
    num_val10: [],
    num_val10_13: [],
    num_val13: [],
    num_val13_16: [],
    num_val16: [],
    num_val16_19: [],
    num_val19: [],
    num_val19_22: [],
    num_val22: [],
    num_val22_25: [],
    num_val25: [],
    num_val25_28: [],
    num_val28: [],
    num_val28_31: [],
    num_val31: [],
    num_val31_34: [],
    num_val34: [],

    num_val1st: [],
    num_val2nd: [],
    num_val3rd: [],
    num_val_first_12: [],
    num_val_second_12: [],
    num_val_third_12: [],
    num_val_first_18: [],
    num_val_second_18: [],
    num_val_red: [],
    num_val_black: [],
    num_val_even: [],
    num_val_odd: [],
  };
  const [overlay_string, set_overlay_string] = useState(overlay_default);
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
  const [bets_end, bets_end_toggle] = useState(false);
  const [table_filter_value, table_filter_set] = useState("");
  const [stopSpin, setStopSpin] = useState(false);
  const [newRandomNumber, setNewRandomNumber] = useState(false);
  const [natsConn, setNatsConn] = useState(false);
  const {ergoWallet, defaultAddress} = useContext(StateContext);
  const checkWallet = localStorage.getItem("walletConnected");
  let sub
  const sc = StringCodec();
  //const waiting_for_respond_animation_delay = setInterval(() => {}, 1000);

  var arrayWithNumVals = [
    "num_val0",
    "num_val0_3",
    "num_val3",
    "num_val3_6",
    "num_val6",
    "num_val6_9",
    "num_val9",
    "num_val9_12",
    "num_val12",
    "num_val12_15",
    "num_val15",
    "num_val15_18",
    "num_val18",
    "num_val18_21",
    "num_val21",
    "num_val21_24",
    "num_val24",
    "num_val24_27",
    "num_val27",
    "num_val27_30",
    "num_val30",
    "num_val30_33",
    "num_val33",
    "num_val33_36",
    "num_val36",
  ];
  var arrayWithNumVals1 = [
    "num_val0",
    "num_val0_2_3",
    "num_val2_3",
    "num_val2_3_5_6",
    "num_val5_6",
    "num_val5_6_8_9",
    "num_val8_9",
    "num_val8_9_11_12",
    "num_val11_12",
    "num_val11_12_14_15",
    "num_val14_15",
    "num_val14_15_17_18",
    "num_val17_18",
    "num_val17_18_20_21",
    "num_val20_21",
    "num_val20_21_23_24",
    "num_val23_24",
    "num_val23_24_26_27",
    "num_val26_27",
    "num_val26_27_29_30",
    "num_val29_30",
    "num_val29_30_32_33",
    "num_val32_33",
    "num_val32_33_35_36",
    "num_val35_36",
  ];
  var arrayWithNumVals2 = [
    "num_val0",
    "num_val0_2",
    "num_val2",
    "num_val2_5",
    "num_val5",
    "num_val5_8",
    "num_val8",
    "num_val8_11",
    "num_val11",
    "num_val11_14",
    "num_val14",
    "num_val14_17",
    "num_val17",
    "num_val17_20",
    "num_val20",
    "num_val20_23",
    "num_val23",
    "num_val23_26",
    "num_val26",
    "num_val26_29",
    "num_val29",
    "num_val29_32",
    "num_val32",
    "num_val32_35",
    "num_val35",
  ];
  var arrayWithNumVals3 = [
    "num_val0",
    "num_val0_1_2",
    "num_val1_2",
    "num_val1_2_4_5",
    "num_val4_5",
    "num_val4_5_7_8",
    "num_val7_8",
    "num_val7_8_10_11",
    "num_val10_11",
    "num_val10_11_13_14",
    "num_val13_14",
    "num_val13_14_16_17",
    "num_val16_17",
    "num_val16_17_19_20",
    "num_val19_20",
    "num_val19_20_22_23",
    "num_val22_23",
    "num_val22_23_25_26",
    "num_val25_26",
    "num_val25_26_28_29",
    "num_val28_29",
    "num_val28_29_31_32",
    "num_val31_32",
    "num_val31_32_34_35",
    "num_val34_35",
  ];

  var arrayWithNumVals4 = [
    "num_val0",
    "num_val0_1",
    "num_val1",
    "num_val1_4",
    "num_val4",
    "num_val4_7",
    "num_val7",
    "num_val7_10",
    "num_val10",
    "num_val10_13",
    "num_val13",
    "num_val13_16",
    "num_val16",
    "num_val16_19",
    "num_val19",
    "num_val19_22",
    "num_val22",
    "num_val22_25",
    "num_val25",
    "num_val25_28",
    "num_val28",
    "num_val28_31",
    "num_val31",
    "num_val31_34",
    "num_val34",
  ];

  const innerRef = useRef();

  const wsConnect = () => {
    connect({ servers: "ws://0.0.0.0:9222" })
      .then(async function (nc) {
        if (checkWallet === "true") {
          sub = nc.subscribe(`roulette.${localStorage.getItem("walletAddress")}`);
          console.log(`subscribed to roulette.${localStorage.getItem("walletAddress")}`);
          (async () => {
            for await (const m of sub) {
              let rnString = sc.decode(m.data)
              const randNum = Number("0x"+rnString)%37
              console.log(randNum)
              setStopSpin(true);
              setRandomNumber(randNum);
              setNewRandomNumber(true);
            }
            console.log("subscription closed");
          })();
          setNatsConn(true)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    if (stopSpin) {
      setStopSpin(false)
      setNewRandomNumber(!newRandomNumber)
      let color = null;
      innerRef.current.classList.remove("waiting-for-respond");

      setTimeout(() => {
        innerRef.current.setAttribute("data-spinto", randomNumber);
      }, 50);

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
          bets_end_toggle(false);
          resetBets();
          addLastResult(randomNumber);
        }, 2500);

        setResultNumber(randomNumber);
        setResultColor(color);
        setRevealData(true);
        setRandomNumber(randomNumber);
        if (firstSpin) setFirstSpin(false);
      }, timer + 50);
      setTimeout(() => {
        innerRef.current.classList.add("stop-spin");
      }, timer * 0.7);
    }
  }, [newRandomNumber])

  function addBetToObject(e) {
    var numbers = e.target.getAttribute("num-val");
    console.log(e.target);
    console.log(numbers);
    let currentArrayCopy = betObject[`num_val${numbers}`].slice();
    currentArrayCopy.push(chipSelected);
    setBetObject({
      ...betObject,
      [`num_val${numbers}`]: currentArrayCopy, //betObject[`num_val${numbers}`] + chipSelected,
    });
    addLatestBet(numbers);
    setTotalBet(totalBet + chipSelected);
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

  function fromNumberToColor(number) {
    //console.log("el numero es" + number);
    if (number === 0) {
      return "green";
    } else if (red.indexOf(number) !== -1) {
      return "red";
    } else {
      return "black";
    }
  }
  function spinTheWheel() {
    if (!natsConn) {
      wsConnect()
    }

    let utxos = [];
    let boxId = "";
    const minERG = MIN_BOX_VALUE + MIN_BOX_VALUE + MINER_FEE_VALUE + MIN_BOX_VALUE/2;

    //txFee:
    //  minBoxValue    = 1000000 * (# of bets)
    //  minerFee       = 1100000
    //  changeBoxValue = 1000000
    //  payoutFee      =  500000 * (# of bets)

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
        }
      ]
    }

    // Get utxo for ERGs
    ergoWallet.get_utxos(minERG, TOKENID_ERG).then((utxosResponse) => {
      if (utxosResponse.length === 0) {
        console.log("NO ERG UTXOS");
        return;
      } else {
        utxos = JSON.parse(JSON.stringify(utxosResponse));
        ergoWallet.get_utxos(board.totalWager, TOKENID_NO_TEST)
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
              axios.post(`/api/v1/roulette/bet-tx`, {
                board: board,
                senderAddr: `${localStorage.getItem("walletAddress")}`,
                utxos: utxos
              })
              .then(async function (response) {
                // sign tx
                const signedTx = await signTx(response.data);
                console.log("signedTx", signedTx)
                // Get a BoxId to use for the random number call
                boxId = signedTx.outputs[2].boxId
                // submit to node
                submitTx(signedTx)
                .then(async (txId) => {
                  if (!txId) {
                    console.log(`No submitted tx ID`);
                    return null;
                  }
                  console.log(`Transaction submitted - ${txId.data}`);
                  // call rng service with wallet address and box id to get our random number
                  axios
                    .get(`http://127.0.0.1:8089/random-number/roulette?walletAddr=${localStorage.getItem("walletAddress")}&boxId=${boxId}`)
                    .then(async function (resp) {
                      console.log('GET /random-number/roulette', {resp})
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                })
                .catch((err) => {
                  console.log(err)
                })
              })
              .catch(function (error) {
                console.log(error);
              });
            }
          })
      }
    })

    async function signTx(txToBeSigned) {
      try {
        return await ergoWallet.sign_tx(txToBeSigned)
      } catch (err) {
        const msg = `[signTx] Error: ${JSON.stringify(err)}`
        console.error(msg, err)
        return null
      }
   }
  
    async function submitTx(txToBeSubmitted) {
      try {
        return await axios.post(`/api/v1/transactions`, {
          senderAddr: `${localStorage.getItem("walletAddress")}`,
          game: "roulette",
          tx: txToBeSubmitted
        })
      } catch (err) {
        const msg = `[submitTx] Error: ${JSON.stringify(err)}`
        console.error(msg, err)
        return null
      }
    }
    
    innerRef.current.setAttribute("data-spinto", "");
    innerRef.current.classList.remove("stop-spin");
    innerRef.current.classList.remove("default-spin");
    innerRef.current.classList.add("waiting-for-respond");
    if (!firstSpin) {
      setRevealData(false);
    }
    setTimeout(() => {
      bets_end_toggle(true);
    }, 20);

    setSpinAvailable(false);

    set_overlay_string(overlay_default);
  }

  function globalUndo() {
    let lastBet = latestBets.pop();
    if (lastBet === undefined) {
      return;
    }

    console.log(lastBet);
    console.log("he llegado hasta aqui osea que no ha detectado como undefined");
    let currentBetObjectCopy = betObject[`num_val${lastBet}`].slice();
    let chipValueUndone = currentBetObjectCopy.pop();
    setBetObject({
      ...betObject,
      [`num_val${lastBet}`]: currentBetObjectCopy,
    });
    setTotalBet(totalBet - chipValueUndone);
  }

  function fromChipValueToColor(number) {
    switch (number) {
      case 100:
        return "purple";
      case 500:
        return "green";
      case 2500:
        return "pink";
      case 10000:
        return "blue";
      case 50000:
        return "black";
      default:
        return "";
    }
  }

  function check_if_zero(number) {
    if (number != 0) {
      return "active";
    } else {
      return "";
    }
  }

  function centerOrBetween(index) {
    if (index % 2 === 0) {
      return "center";
    } else {
      return "between";
    }
  }

  return (
    <div
      className={bets_end ? "roulette-wrapper" : "roulette-wrapper bets-end"}
    >
      <div className="roulette-wheel-content-wrapper">
        <div className="roulette-wheel-content">
          <div className="plate" id="plate">
            <img
              src={outterWheel1}
              className="behindlol"
              alt="outter-roulette-wheel"
            />
            <ul id="fuckinginner" className="inner default-spin" ref={innerRef}>
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
      </div>
      <div className="roulette-table-content-wrapper">
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
                <div className={table_filter_value} id="table-numbers">
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
                              )} ${check_if_zero(
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
                              )} ${check_if_zero(
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
                              )} ${check_if_zero(
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
                              )} ${check_if_zero(
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
                    table_filter_set("filter-applied first-row")
                  }
                  onMouseLeave={() => table_filter_set("")}
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
                    table_filter_set("filter-applied second-row")
                  }
                  onMouseLeave={() => table_filter_set("")}
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
                    table_filter_set("filter-applied third-row")
                  }
                  onMouseLeave={() => table_filter_set("")}
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
                      table_filter_set("filter-applied first-12")
                    }
                    onMouseLeave={() => table_filter_set("")}
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
                      table_filter_set("filter-applied second-12")
                    }
                    onMouseLeave={() => table_filter_set("")}
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
                      table_filter_set("filter-applied third-12")
                    }
                    onMouseLeave={() => table_filter_set("")}
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
                  style={{borderBottomLeftRadius: "8px"}}
                    onMouseEnter={() =>
                      table_filter_set("filter-applied first-18")
                    }
                    onMouseLeave={() => table_filter_set("")}
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
                    onMouseEnter={() => table_filter_set("filter-applied even")}
                    onMouseLeave={() => table_filter_set("")}
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
                      table_filter_set("filter-applied filter-color-red")
                    }
                    onMouseLeave={() => table_filter_set("")}
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
                      table_filter_set("filter-applied filter-color-black")
                    }
                    onMouseLeave={() => table_filter_set("")}
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
                    onMouseEnter={() => table_filter_set("filter-applied odd")}
                    onMouseLeave={() => table_filter_set("")}
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
                  style={{ borderBottomRightRadius: "8px"}}
                    onMouseEnter={() =>
                      table_filter_set("filter-applied second-18")
                    }
                    onMouseLeave={() => table_filter_set("")}
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
            onClick={() => setChipSelected(100)}
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
            onClick={() => setChipSelected(500)}
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
            onClick={() => setChipSelected(2500)}
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
            onClick={() => setChipSelected(10000)}
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
            onClick={() => setChipSelected(50000)}
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
              id="globalUndo"
              onClick={() => globalUndo()}
            >
              <span className="btn-label">Undo</span>
            </button>
          </div>
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
          <div className="button-container">
            <button
              type="button"
              className={spinAvailable ? "btn" : "btn disabled"}
              id="resetBetsButton"
              onClick={() => resetBets()}
            >
              <span className="btn-label">Clear all</span>
            </button>
          </div>
          <div className="spacer"></div>
        </div>
        <div id="table-overlay">
          <div id="table-overlay-text">{overlay_string}</div>
        </div>
      </div>
    </div>
  );
};

export default Roulette;
