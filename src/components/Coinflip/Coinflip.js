import React from "react";
import "./Coinflip.css";

const Coinflip = () => {
	return (
		<div className="swap-div">
			<h1><span>Head </span><span>/ Tail</span></h1>

            <div className="below-head">
                <p>selected <span>{"Head"}</span></p>
                <p>reward <span>{"20,000"}</span></p>
            </div>

            <p>Please set a bet amount</p>

            <div className="coinflip-calc">
                <h1>−</h1>
                <input type="text" pattern="[^a-zA-Z]+" />
                <span>OWL</span>
                <h1>+</h1>
            </div>

            <button>Place bet</button>

            <p>Transaction ID: {}</p>
		</div>
	);
};
export default Coinflip;
