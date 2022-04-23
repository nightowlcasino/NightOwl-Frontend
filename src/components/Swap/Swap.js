import React, { useState, useContext } from "react";
import axios from "axios";
import "./Swap.css";
import StateContext from "../Context";
//import { WalletContext } from "../Header/Header";

const TOKENID_NO_TEST = "afd0d6cb61e86d15f2a0adc1e7e23df532ba3ff35f8ba88bed16729cae933032";
const TOKENID_FAKE_SIGUSD = "96c402c0e658909aa03f534006124f0e43725c467dbc8dea39680d0861892de5";

function Swap() {
    const [swap1, setSwap1] = useState(20);
    const [swap2, setSwap2] = useState();
    const [swapSelect1, setSwapSelect1] = useState('ERG');
    const {ergoWallet, defaultAddress} = useContext(StateContext);

    //const [wallet, setWallet] = useContext(WalletContext)
    const backend = process.env.BACKEND_FQDN || "localhost";

    const swapTokens = (e) => {
        e.preventDefault();
		console.log("swap button pressed");

		// get input boxes for each token ID
		const sigUSDAmount = 10;
		const owl = 10;

		ergoWallet
			.get_utxos(sigUSDAmount, TOKENID_FAKE_SIGUSD)
			.then((utxosResponse) => {
				//ergoWallet.get_utxos(owl, TOKENID_NO_TEST).then(utxosResponse => {
				if (utxosResponse.length === 0) {
					console.log("NO UTXOS");
				} else {
					// send token input boxes and token amounts in a POST message to the backend
					axios
						.post(`http://${backend}:8088/api/v1/swap/sigusd`, {
							//axios.post(`http://${backend}:8088/api/v1/swap/owl`, {
							amnt: swap1,
							senderAddr: localStorage.getItem('walletAddress'),
							utxos: utxosResponse,
						})
						.then(async function (response) {
							const signedTx = await signTx(response.data);
							console.log("signedTx", signedTx);
							const txId = await submitTx(signedTx);
							if (!txId) {
								console.log(`No submitted tx ID`);
								return null;
							}
							console.log(`Transaction submitted - ${txId}`);
						})
						.catch(function (error) {
							console.log(error);
						});
				}
			});
	};

    async function signTx(txToBeSigned) {
		try {
			return await ergoWallet.sign_tx(txToBeSigned);
		} catch (err) {
			const msg = `[signTx] Error: ${JSON.stringify(err)}`;
			console.error(msg, err);
			return null;
		}
	}

    async function submitTx(txToBeSubmitted) {
		try {
			return await ergoWallet.submit_tx(txToBeSubmitted);
		} catch (err) {
			const msg = `[submitTx] Error: ${JSON.stringify(err)}`;
			console.error(msg, err);
			return null;
		}
	}

    const handleSwapSelect = (option) => {
        setSwapSelect1(option);
    }
    
    const handleSwap1 = (value) => {
        setSwap1(value);
    }
    
    const handleSwap2 = (value) => {
        setSwap2(value);
    }

    const convertOwl = () => {
        const sigUSD = document.getElementById('sigUSDInput').value
        document.getElementById('owlInput').value = sigUSD * 100
    }

    const convertSigUSD = () => {
        const owl = document.getElementById('owlInput').value
        document.getElementById('sigUSDInput').value = owl / 100
    }

	return (
        <div id="swap-wrapper">
            <div id="swap-content-wrapper">
                <div id="swap-content-inner-wrapper">
                    <form id="swap-content">
                        <div id="swap-header">
                            <h1>Swap</h1>
                            <span>Ergo blockchain token swap</span>
                        </div>
                        <div id="swap-input-fields-wrapper">
                            <div id="swap-input-fields">
                                <div className="input-field">
                                    <select value={swapSelect1} onChange={(e)=>handleSwapSelect(e.target.value)}>
                                        <option value="ERG">ERG</option>
                                        <option value="SigUSD">SigUSD</option>
                                    </select>
                                    <input type='text' name="swap1" placeholder={`${swapSelect1} amount`} value={swap1} onChange={(e)=>handleSwap1(e.target.value)} />
                                </div>
                                <div id="input-separator-wrapper">
                                    <div id="input-seperator">To</div>
                                </div>
                                <div className="input-field">
                                    <select>
                                        <option value="owl">OWL</option>
                                    </select>
                                    <input type='text' name="swap2" placeholder="OWL amount" value={swap2} onChange={(e)=>handleSwap2(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div id="swap-buttons">
                            <label id="private-wrapper" className="container">
                                <input id="private-checkbox" type="checkbox" />
                                <span className="checkmark"></span>
                                Private
                            </label>
                            <div id="swap-button">
                                <button onClick={swapTokens}>Swap</button>
                            </div>
                            <div id="swap-slippage">Slippage <span id="swap-slippage-value">0.5</span>%</div>
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
};

export default Swap;
