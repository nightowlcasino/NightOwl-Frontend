import React, { useContext } from "react";
import image from "../../assets/Elements/swap-desktop.png";
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
        <main>
            <div className="swap-div">
                <h1>Swap</h1>
                <p className="desc">Ergo blockchain token swap</p>
                <div className="initial-swap-token">
                    <div className="custom-select">
                        <select>
                            <option value="SigUSD">SigUSD</option>
                        </select>
                    </div>
                    
                    <input id="sigUSDInput" onChange={convertOwl} type="number" className="token-input" />
                </div>

                <div className="mid-swap">
                    <p>.</p>
                    <p style={{marginBottom:"8px"}}>.</p>
                    <p className="to">To</p>
                    <p>.</p>
                    <p>.</p>
                </div>

                <div className="final-swap-token">
                    <div className="custom-select">
                        <select>
                            <option value="erg">OWL</option>
                        </select>
                    </div>

                    <input id="owlInput" onChange={convertSigUSD} type="number" className="token-input" />
                </div>

                <span><input type="checkbox" name="Private" />Private</span>

                <button onClick={swapTokens}>Swap</button>

                <p>Slippage: {}</p>
            </div>
            <img src={image} style={{width:"30%"}} />
        </main>
	);
};
export default Swap;
