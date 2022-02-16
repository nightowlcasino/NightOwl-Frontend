import React from "react";
import "./Swap.css";

const Swap = () => {
	return (
		<div className="swap-div">
			<h1>Swap</h1>
            <p>Ergo blockchain token swap</p>
            <div className="initial-swap-token">
                <div className="custom-select">
                    <select>
                        <option value="erg">ERG</option>
                    </select>
                </div>
                <br/>
                <input type="number" className="token-input" />
            </div>

            <div className="mid-swap">
                <p>.</p>
                <p>.</p>
                <span>To</span>
                <p>.</p>
                <p>.</p>
            </div>

            <div className="final-swap-token">
                <div className="custom-select">
                    <select>
                        <option value="erg">OWL</option>
                    </select>
                </div>
                <br/>
                <input type="number" className="token-input" />
            </div>

            <span><input type="checkbox" name="Private" />Private</span>

            <button>Swap</button>

            <p>Slippage: {}</p>
		</div>
	);
};
export default Swap;
