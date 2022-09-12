import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useMatomo } from '@datapunt/matomo-tracker-react'
import "./Swap.css";
import StateContext from "../Context";
import sortArrows1 from "../../assets/Elements/sortArrows1.svg";
import sortArrows3 from "../../assets/Elements/sortArrows3.svg";
import sigUSDicon from "../../assets/Elements/SigUSD.svg";
import OWLicon from "../../assets/Elements/head.png";
import WarningModal from "../Modals/WarningModal";
import swapMascot from "../../assets/Elements/blackjackMascot.png";

const TOKENID_NO_TEST =
  "473041c7e13b5f5947640f79f00d3c5df22fad4841191260350bb8c526f9851f";
const TOKENID_FAKE_SIGUSD =
  "96c402c0e658909aa03f534006124f0e43725c467dbc8dea39680d0861892de5";
const TOKENID_ERG =
  "0000000000000000000000000000000000000000000000000000000000000000";
const FEE_VALUE = 1100000;
const MIN_BOX_VALUE = 1000000;

function Swap({ setIsLoading, setSwapTransaction }) {
	// Track page view
	const { trackPageView, trackEvent } = useMatomo()

  const [swap1, setSwap1] = useState("SigUSD");
  const [swap2, setSwap2] = useState("OWL");
  const [swap1Amount, setSwap1Amount] = useState("");
  const [swap2Amount, setSwap2Amount] = useState("");
  const [swapSelect1, setSwapSelect1] = useState("SigUSD");
  const [warningText, setWarningText] = useState("");
  const [owlBalance, setOwlBalance] = useState();
  const [sigUSDBalance, setSigUSDBalance] = useState();
  const { ergoWallet, defaultAddress } = useContext(StateContext);

  useEffect(() => {
    async function getBalance() {
      console.log("hola");
      ergoWallet.get_balance(TOKENID_NO_TEST).then(function (balance) {
        setOwlBalance(balance);
      });

      // get SigUSD balance
      ergoWallet.get_balance(TOKENID_FAKE_SIGUSD).then(function (balance) {
        setSigUSDBalance(balance / 100);
      });
    }
    if (ergoWallet) getBalance();
  }, [ergoWallet]);

  const backend = process.env.BACKEND_FQDN || "localhost";

  const swapTokens = (e) => {
    e.preventDefault();

    // get input boxes for each token ID
    const sigUSDAmount = 10;
    const owl = 10;

    let utxos = [];
    // the minimum ERG requires a swap box, fee box, and change box
    const minERG = MIN_BOX_VALUE + MIN_BOX_VALUE + FEE_VALUE;

    // Get utxo for ERGs
    ergoWallet.get_utxos(minERG, TOKENID_ERG).then((utxosResponse) => {
      if (utxosResponse.length === 0) {
        console.log("NO ERG UTXOS");
        return;
      } else {
        utxos = JSON.parse(JSON.stringify(utxosResponse));
        // This is a hack for now, we need to remove the decimals for SigUSD
        const sigAmnt = swap1 * 100;
        ergoWallet
          .get_utxos(swap1, TOKENID_FAKE_SIGUSD)
          .then((utxosResponse) => {
            //ergoWallet.get_utxos(swap2, TOKENID_NO_TEST).then(utxosResponse => {
            if (utxosResponse.length === 0) {
              console.log("NO SigUSD UTXOS");
              return;
            } else {
              utxosResponse.forEach((sigBox) => {
                let found = false;
                utxos.forEach((box) => {
                  // Check if any matching boxIds
                  // TODO: Add a break/continue
                  if (sigBox.boxId == box.boxId) {
                    found = true;
                  }
                });
                // Found none
                if (!found) {
                  utxos.push(sigBox);
                }
              });
              console.log(utxos);
              // send token input boxes and token amounts in a POST message to the backend
              setIsLoading(true);
              axios
                .post(`/api/v1/swap/sigusd`, {
                  //axios.post(`/api/v1/swap/owl`, {
                  amnt: sigAmnt,
                  senderAddr: localStorage.getItem("walletAddress"),
                  utxos: utxos,
                })
                .then(async function (response) {
                  const signedTx = await signTx(response.data);
                  console.log("signedTx", signedTx);
                  const txId = await submitTx(signedTx);
                  if (!txId) {
                    console.log(`No submitted tx ID`);
                    return null;
                  }
                  setIsLoading(false);
                  setSwapTransaction(txId);
                  console.log(`Transaction submitted - ${txId}`);
                })
                .catch(function (error) {
                  setIsLoading(false);
                  console.log(error);
                });
            }
          });
      }
    });
  };

  async function signTx(txToBeSigned) {
    try {
      return await ergoWallet.sign_tx(txToBeSigned);
    } catch (err) {
      setIsLoading(false);
      const msg = `[signTx] Error: ${JSON.stringify(err)}`;
      console.error(msg, err);
      return null;
    }
  }

  async function submitTx(txToBeSubmitted) {
    try {
      return await axios.post(`/api/v1/transactions`, {
        senderAddr: `${localStorage.getItem("walletAddress")}`,
        game: "swap",
        sessionId: "test",
        tx: txToBeSubmitted,
      });
    } catch (err) {
      const msg = `[submitTx] Error: ${JSON.stringify(err)}`;
      console.error(msg, err);
      return null;
    }
  }

  function handleSwapCurrencies() {
    const temp1 = swap1;
    const temp2 = swap2;
    setSwap1(temp2);
    setSwap2(temp1);
    setSwap1Amount(swap2Amount);
    setSwap2Amount(swap1Amount);
  }

  function getCorrectFactorMultiplier(swapNumber) {
    if (swapNumber === "SigUSD") {
      return 100;
    } else if (swapNumber === "OWL") {
      return 0.01;
    }
  }
  useEffect(() => {
    if (swap1Amount == 0) {
      setSwap1Amount("");
      setSwap2Amount("");
    } else setSwap2Amount(swap1Amount * getCorrectFactorMultiplier(swap1));
  }, [swap1Amount]);

  useEffect(() => {
    if (swap2Amount == 0) {
      setSwap1Amount("");
      setSwap2Amount("");
    } else setSwap1Amount(swap2Amount * getCorrectFactorMultiplier(swap2));
  }, [swap2Amount]);

  function handleChangeSwapAmount(value, swapNumber) {
    if (value === "") {
      setSwap1Amount("");
      setSwap2Amount("");
    } else if (swapNumber == 0) {
      setSwap1Amount(value);
      setSwap2Amount(value * getCorrectFactorMultiplier(swap1));
    } else if (swapNumber == 1) {
      setSwap2Amount(value);
      setSwap1Amount(value * getCorrectFactorMultiplier(swap2));
    }
  }

  function handleWarningTriggered(e, warningText, seconds) {
    e.preventDefault();
    setWarningText(warningText);
    setTimeout(() => {
      setWarningText("");
    }, seconds * 1000);
  }

  function handleCopyPasteBalance(swapToken, tokenNumber) {
    if (swapToken == "SigUSD") {
      tokenNumber == 1 ? setSwap1Amount(Math.round(sigUSDBalance * 100) / 100) : setSwap2Amount(Math.round(sigUSDBalance * 100) / 100);
    } else if (swapToken == "OWL") {
      tokenNumber == 1 ? setSwap1Amount(Math.round(owlBalance * 100) / 100) : setSwap2Amount(Math.round(owlBalance * 100) / 100);
    }
  }

	// Track page view
	React.useEffect(() => {
	  trackPageView()
	}, [])

  return (
    <div id="swap-wrapper">
      <WarningModal warningText={warningText} gameMascotImg={swapMascot} />
      <div
        id="swap-content-wrapper"
        style={{ pointerEvents: warningText ? "none" : "" }}
      >
        <div id="swap-content-inner-wrapper">
          <form id="swap-content">
            <div id="swap-header">
              <h1>Swap</h1>
            </div>
            <div id="swap-input-fields-wrapper">
              <div id="swap-input-fields">
                <div className="swap-input">
                  <div id="swap-input-select">
                    <img
                      src={swap1 == "SigUSD" ? sigUSDicon : OWLicon}
                      alt="Token icon"
                      style={{
                        verticalAlign: "middle",
                        width: "40px",
                        height: "40px",
                      }}
                    />
                    <span>{swap1}</span>
                    {ergoWallet && (<div className="tokenBalance">
                      <span style={{ fontSize: "14px" }}>
                        Balance:{" "}
                        <span
                          style={{
                            color: "#da2f95",
                            fontSize: "15px",
                            marginLeft: "0px",
                            cursor: "pointer",
                          }}
                          onClick={() => handleCopyPasteBalance(swap1, 1)}
                        >
                          {swap1 == "SigUSD" ? sigUSDBalance : owlBalance}
                        </span>
                      </span>
                    </div>)}
                  </div>
                  <div id="swap-input-amount-input">
                    <input
                      type="number"
                      placeholder={`${swap1} amount`}
                      value={swap1Amount}
                      onChange={(e) =>
                        handleChangeSwapAmount(e.target.value, 0)
                      }
                    />
                  </div>
                </div>
                <div id="input-separator-wrapper">
                  <div id="input-seperator" onClick={handleSwapCurrencies}>
                    <img
                      src={sortArrows1}
                      alt="Switch tokens"
                      style={{ width: "25px", height: "25px" }}
                    />
                  </div>
                </div>
                <div className="swap-input">
                  <div id="swap-input-select">
                    <img
                      src={swap2 == "SigUSD" ? sigUSDicon : OWLicon}
                      alt="Token icon"
                      style={{
                        verticalAlign: "middle",
                        width: "40px",
                        height: "40px",
                      }}
                    />
                    <span>{swap2}</span>
                    {ergoWallet && (<div className="tokenBalance">
                      <span style={{ fontSize: "14px" }}>
                        Balance:{" "}
                        <span
                          style={{
                            color: "#da2f95",
                            fontSize: "15px",
                            marginLeft: "0px",
                            cursor: "pointer",
                          }}
                          onClick={() => handleCopyPasteBalance(swap2, 2)}
                        >
                          {swap2 == "SigUSD" ? sigUSDBalance : owlBalance}
                        </span>
                      </span>
                    </div>)}
                  </div>
                  <div id="swap-input-amount-input">
                    <input
                      type="number"
                      placeholder={`${swap2} amount`}
                      value={swap2Amount}
                      onChange={(e) =>
                        handleChangeSwapAmount(e.target.value, 1)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div id="swap-buttons">
              <div id="swap-button">
                <button onClick={swapTokens}>Swap</button>
                {/* <button
                  onClick={(e) => handleWarningTriggered(e, "Swap failed", 4)}
                >
                  Swap
                </button> */}
              </div>
              {/* <div id="swap-slippage">Slippage <span id="swap-slippage-value">0.5</span>%</div> */}
            </div>
          </form>
        </div>
      </div>
      <div id="swap-image-wrapper">
        <div id="swap-box">
          <div id="swap-coin"></div>
        </div>
      </div>
    </div>
  );
}

export default Swap;
