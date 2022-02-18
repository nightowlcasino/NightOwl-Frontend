import React from "react";
import image from "../../assets/Elements/swap-desktop.png";
import "./Swap.css";

const Swap = () => {
	return (
        <main>
            <div className="swap-div">
                <h1>Swap</h1>
                <p className="desc">Ergo blockchain token swap</p>
                <div className="initial-swap-token">
                    <div className="custom-select">
                        <select>
                            <option value="erg">ERG</option>
                        </select>
                    </div>
                    
                    <input type="number" className="token-input" />
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

                    <input type="number" className="token-input" />
                </div>

                <span><input type="checkbox" name="Private" />Private</span>

                <button>Swap</button>

                <p>Slippage: {}</p>
            </div>
            <img src={image} style={{width:"24%"}} />
        </main>
	);
};
export default Swap;
