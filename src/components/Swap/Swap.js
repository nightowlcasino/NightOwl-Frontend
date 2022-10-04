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
import { currentBlock, nodeUrl } from "./functions"
import {Address} from "@coinbarn/ergo-ts";
import { useAsBind } from "use-as-bind";

// import { Address } from 'ergo-lib-wasm-browser'
// let ergolib = import('ergo-lib-wasm-browser')


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

  // Load WASM
  const { loaded, instance, error } = useAsBind("ergo-lib-wasm-browser");


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

  const swapTokens = async (e) => {
    e.preventDefault();

    const txFee = 10000000


    if(!ergoWallet) {
      console.log("Connect wallet first")
      return
    }

    // const wasm = await ergolib
    const p2s = ""
    const bidder = await ergoWallet.get_change_address();


    const requiredErg = 100000000//(parseInt(listedBox.additionalRegisters.R4.renderedValue) + parseInt(buyerGets.value) + parseInt(feeBox.value))
    let need = {ERG: requiredErg}
    // Get all wallet tokens/ERG and see if they have enough
    let have = JSON.parse(JSON.stringify(need))
    have['ERG'] += txFee
    let ins = []
    const keys = Object.keys(have)


    for (let i = 0; i < keys.length; i++) {
        if (have[keys[i]] <= 0) continue
        const curIns = await ergoWallet.get_utxos(have[keys[i]].toString(), keys[i]);
        if (curIns !== undefined) {
            curIns.forEach(bx => {
                have['ERG'] -= parseInt(bx.value)
                bx.assets.forEach(ass => {
                    if (!Object.keys(have).includes(ass.tokenId)) have[ass.tokenId] = 0
                    have[ass.tokenId] -= parseInt(ass.amount)
                })
            })
            ins = ins.concat(curIns)
        }
    }
    if (keys.filter(key => have[key] > 0).length > 0) {
        // showMsg('Not enough balance in the wallet! See FAQ for more info.', true)
        console.log("Not enough balance in the wallet!")
        return
    }



    // -----------Output boxes--------------
    const blockHeight = await currentBlock();
    // let artBox = await boxById(nft_id);
    let publicKeyResponse = await axios.get(`${nodeUrl}/utils/addressToRaw/`+bidder).catch((err) => {
        console.log("Error when calling utils/addressToRaw/useraddress");
    })
    let publicKey = publicKeyResponse.data.raw

    // const encodedSer = await getEncodedBoxSer(artBox).catch((err)=>{
    //     console.log("Error: ", err)
    //     showMsg("Listing is currently unavailable, please try again later.", true);
    //     return;
    // });

    // if(!encodedSer) {
    //     return;
    // }

    const min_value = 1000000000

    let registers = {
        // R4: await encodeNum((list_price).toString()),
        // R5: await encodeHex(new Address(bidder).ergoTree),
        // // R6: encodedSer,
        // R7: "07" + publicKey
    };

    const listedBox = {
        value: (min_value + txFee).toString(),
        ergoTree: Address.from_mainnet_str(p2s).to_ergo_tree().to_base16_bytes(), // p2s to ergotree (can do through node or wasm)
        // assets: [
        //     {'tokenId': nft_id, 'amount': "1"}
        // ],
        additionalRegisters: registers,
        creationHeight: blockHeight.height
    }


    // Change calculation
    let changeAssets = []
    let changeValue = -requiredErg + min_value
    let firstTime = true; // subtract 1 nft from the first box you find that contains it
    let changeAssetsPerBox = []
    
    let box;
    for (box of ins){
        let asset;
        for (asset of box.assets){
            if (asset.tokenId !== "random"){
                changeAssets.push(asset)
            } else {
                if(((parseInt(asset.amount) - 1) !== 0) && firstTime === true) {
                    var tempAsset = JSON.parse(JSON.stringify(asset));

                    tempAsset.amount = `${parseInt(asset.amount) - 1}`;
                    changeAssets.push(tempAsset)
                    firstTime = false;
                }
            }
            //cut change box once it hits change box asset limit, start a new change box 
            // asset limit set to 90 because if the user has high count of particular tokens (i.e. 10,000,000 SIGRSV), a box might not be able to hold 100 distinct tokens
            // would be best to ensure box doesn't exceed 4KiB but not sure how to do that lel 
            if (changeAssets.length == 100) {
                changeAssetsPerBox.push(changeAssets);
                // no need to remove already-processed change assets from change boxes, already looped over
                // clear changeAssets
                changeAssets = [];
            }
        }
        changeValue += parseInt(box.value)
    }
    //push remaining to changeBoxes
    changeAssetsPerBox.push(changeAssets);

    if (changeValue < min_value) {
        // showMsg('Not enough balance in the wallet! See FAQ for more info.', true)
        console.log("Not enough balance in wallet")
        return
    }

    let remainder = changeValue % changeAssetsPerBox.length 
    let changeErgsPerBoxFloored =  Math.floor(changeValue / changeAssetsPerBox.length);
    let changeBoxes = []
    let i = 0 ;
    for (let assets of changeAssetsPerBox) {    

        let boxValue;
        // add remainder nergs to final box in case ergs / changeboxes isn't integer
        if (i == changeAssetsPerBox.length - 1) {
            boxValue = changeErgsPerBoxFloored + remainder;
        } else {
            boxValue = changeErgsPerBoxFloored;
        }

        console.log(changeErgsPerBoxFloored);
        console.log(boxValue);
        console.log(boxValue.toString());
        
        let changeBox = {
            value: boxValue.toString(),
            ergoTree: Address.from_mainnet_str(bidder).to_ergo_tree().to_base16_bytes(),
            assets: assets, 
            additionalRegisters: {},
            creationHeight: blockHeight.height
        }

        changeBoxes.push(changeBox);

        i++;
    }

    const feeBox = {
        value: txFee.toString(),
        creationHeight: blockHeight.height,
        ergoTree: "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
        assets: [],
        additionalRegisters: {},
    }

    // console.log(paySeller.value + payService.value + payRoyalty.value + buyerGets.value + feeBox.value)
    let transaction_to_sign = {
        inputs: ins,
        outputs: [listedBox], // Adding change and fee boxes below. 
        dataInputs: [],
        fee: txFee
    }

    transaction_to_sign.outputs.push(feeBox);

    for (let changeBox of changeBoxes) {    
        transaction_to_sign.outputs.push(changeBox)
    }

    console.log("transaction_to_sign", transaction_to_sign)

    // return transaction_to_sign
    return await signTx(transaction_to_sign)




  }

  // const swapTokens = (e) => {
  //   e.preventDefault();

  //   // get input boxes for each token ID
  //   const sigUSDAmount = 10;
  //   const owl = 10;

  //   let utxos = [];
  //   // the minimum ERG requires a swap box, fee box, and change box
  //   const minERG = MIN_BOX_VALUE + MIN_BOX_VALUE + FEE_VALUE;

  //   // Get utxo for ERGs
  //   ergoWallet.get_utxos(minERG, TOKENID_ERG).then((utxosResponse) => {
  //     if (utxosResponse.length === 0) {
  //       console.log("NO ERG UTXOS");
  //       return;
  //     } else {
  //       utxos = JSON.parse(JSON.stringify(utxosResponse));
  //       // This is a hack for now, we need to remove the decimals for SigUSD
  //       const sigAmnt = swap1 * 100;
  //       ergoWallet
  //         .get_utxos(swap1, TOKENID_FAKE_SIGUSD)
  //         .then((utxosResponse) => {
  //           //ergoWallet.get_utxos(swap2, TOKENID_NO_TEST).then(utxosResponse => {
  //           if (utxosResponse.length === 0) {
  //             console.log("NO SigUSD UTXOS");
  //             return;
  //           } else {
  //             utxosResponse.forEach((sigBox) => {
  //               let found = false;
  //               utxos.forEach((box) => {
  //                 // Check if any matching boxIds
  //                 // TODO: Add a break/continue
  //                 if (sigBox.boxId == box.boxId) {
  //                   found = true;
  //                 }
  //               });
  //               // Found none
  //               if (!found) {
  //                 utxos.push(sigBox);
  //               }
  //             });
  //             console.log(utxos);
  //             // send token input boxes and token amounts in a POST message to the backend
  //             setIsLoading(true);
  //             axios
  //               .post(`/api/v1/swap/sigusd`, {
  //                 //axios.post(`/api/v1/swap/owl`, {
  //                 amnt: sigAmnt,
  //                 senderAddr: localStorage.getItem("walletAddress"),
  //                 utxos: utxos,
  //               })
  //               .then(async function (response) {
  //                 const signedTx = await signTx(response.data);
  //                 console.log("signedTx", signedTx);
  //                 const txId = await submitTx(signedTx);
  //                 if (!txId) {
  //                   console.log(`No submitted tx ID`);
  //                   return null;
  //                 }
  //                 setIsLoading(false);
  //                 setSwapTransaction(txId);
  //                 console.log(`Transaction submitted - ${txId}`);
  //               })
  //               .catch(function (error) {
  //                 setIsLoading(false);
  //                 console.log(error);
  //               });
  //           }
  //         });
  //     }
  //   });
  // };

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
