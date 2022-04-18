import React from "react";
import "./Swap.css";
//import { WalletContext } from "../Header/Header";

const TOKENID_NO_TEST = "afd0d6cb61e86d15f2a0adc1e7e23df532ba3ff35f8ba88bed16729cae933032";
const TOKENID_FAKE_SIGUSD = "96c402c0e658909aa03f534006124f0e43725c467dbc8dea39680d0861892de5";

const Swap = () => {

    //const [wallet, setWallet] = useContext(WalletContext)

    const swapTokens = () => {
        console.log('swap button pressed')

        // get input boxes for each token ID
        const sigUSD = document.getElementById('sigUSDInput').value
        const owl = document.getElementById('owlInput').value
        
        // send token input boxes and token amounts in a POST message to the backend
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
                    <div id="swap-content">
                        <div id="swap-header">
                            <h1>Swap</h1>
                            <span>Ergo blockchain token swap</span>
                        </div>
                        <div id="swap-input-fields-wrapper">
                            <div id="swap-input-fields">
                                <div className="input-field">
                                    <select>
                                        <option value="erg">ERG</option>
                                    </select>
                                    <input placeholder="ERG amount" />
                                </div>
                                <div id="input-separator-wrapper">
                                    <div id="input-seperator">To</div>
                                </div>
                                <div className="input-field">
                                    <select>
                                        <option value="erg">ERG</option>
                                    </select>
                                    <input value="20.0000" />
                                </div>
                            </div>
                        </div>
                        <div id="swap-buttons">
                            <label id="private-wrapper" className="container">
                                <input id="private-checkbox" type="checkbox" />
                                <span class="checkmark"></span>
                                Private
                            </label>
                            <div id="swap-button">
                                <button>Swap</button>
                            </div>
                            <div id="swap-slippage">Slippage <span id="swap-slippage-value">0.5</span>%</div>
                        </div>
                    </div>
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
