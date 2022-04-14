import React, { useState } from "react";
import "./Coinflip.css";

const Coinflip = () => {

	const [selection_state, change_selection_state] = useState(true);

	return (
		<div id="coinflip-game-wrapper">
			<div id="coinflip-content-wrapper">
				<div id="coinflip-content">
					<div id="coinflip-header-wrapper">
						<div id="coinflip-header">
							<label onClick={() => change_selection_state(true)} className="side-selector" htmlFor="head-side-selector">
								<input name="coin-side-selector" id="head-side-selector" type="radio" value="head" checked />
								<h1 className="side-selector-name">Head</h1>
							</label>
							<h1 id="spacer">/</h1>
							<label onClick={() => change_selection_state(false)} className="side-selector" htmlFor="tail-side-selector">
								<input name="coin-side-selector" id="tail-side-selector" type="radio" value="tail" />
								<h1 className="side-selector-name">Tail</h1>
							</label>
						</div>
					</div>
					<div id="currently-selected-wrapper">
						<div id="currently-selected">
							<span className="color-pink">Selected</span>
							<span> </span>
							<span id="currently-selected-placeholder">
								<span className={selection_state ? "" : "hiden"} id="placeholder-head">Head</span>
								<span className={selection_state ? "hiden" : ""} id="placeholder-tail">Tail</span>
							</span>
						</div>
						<div id="reward">
							<span>
								<span  className="color-pink">Reward </span><span id="reward-amount">20000</span>
							</span>
						</div>
					</div>
					<div className="wrapper">
						<span>Please select a bet amount</span>
					</div>
					<div id="input-wrapper">
						<div id="input">
							<div className="bet-button-change" id="decrease-bet">-</div>
							<input />
							<span id="input-unit" className="color-pink">OWL</span>
							<div className="bet-button-change" id="increase-bet">+</div>
						</div>
					</div>
					<div id="bet-button-wrapper">
						<button>Place bet</button>
					</div>
					<div id="transaction-id-wrapper">
						<span>Transaction ID:</span>
						<span id="last-transaction-id">...</span>
					</div>
				</div>
			</div>
			<div id="coin-wrapper">
				<div id="platform">
					<div id="coin"></div>
				</div>
			</div>
		</div>
	);
};

export default Coinflip;
