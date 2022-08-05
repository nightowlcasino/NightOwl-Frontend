import React, { useState, useContext } from "react";
import axios from "axios";
import StateContext from "../Context";
//import { WalletContext } from "../Header/Header";
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/solid'
import { DotsHorizontalIcon } from '@heroicons/react/solid'
import LiquidityChart from './LiquidityChart'

import "./LiquidityProvision.css";
import "../BodyContent/BodyContent.css";


const TOKENID_NO_TEST =
	"afd0d6cb61e86d15f2a0adc1e7e23df532ba3ff35f8ba88bed16729cae933032";
const TOKENID_FAKE_SIGUSD =
	"96c402c0e658909aa03f534006124f0e43725c467dbc8dea39680d0861892de5";
const TOKENID_ERG =
	"0000000000000000000000000000000000000000000000000000000000000000";
const FEE_VALUE = 1100000;
const MIN_BOX_VALUE = 1000000;

function liquidity({ setIsLoading, setliquidityTransaction }) {


	return (
		<div className="liquidity-container" style={{marginTop: 30}}>
			<div  style={{width: "30%"}}>
				<div className="house-wrapper">
					<form id="liquidity-content" style={{position: "relative"}}>
						<div className="liquidity-corner-dropdown">
							<DotsHorizontalIcon color="white" width={24}/>
						</div>
						<div id="liquidity-header" style={{textAlign: "center"}}>
							<div style={{display: "inline-flex"}}>
								<ChevronUpIcon color="red" width={24} style={{marginLeft: -12}}/>
								<h1 style={{marginBottom: 0, marginTop: 0}}>1 WEEK</h1>
							</div>
							<p style={{marginTop: 0, marginBottom: 0, opacity: "0.8"}}>Total time providing liquidity </p>
						</div>
					</form>
				</div>
				<div className="house-wrapper" style={{marginTop: 28, textAlign: "center"}}>
					<form id="liquidity-content" style={{position: "relative"}}>
						<div className="liquidity-corner-dropdown">
							<DotsHorizontalIcon color="white" width={24}/>
						</div>
						<div id="liquidity-header">
							<div style={{display: "inline-flex"}}>
								<ChevronUpIcon color="red" width={24} style={{marginLeft: -12}}/>
								<h1 style={{marginBottom: 0, marginTop: 0}}>7% APY</h1>
							</div>
							<p style={{marginTop: 0, marginBottom: 0, opacity: "0.8"}}>Approximate Annual Percentage Yield (APY)</p>
						</div>
					</form>
				</div>
				<div className="house-wrapper" style={{marginTop: 28, textAlign: "center"}}>
					<form id="liquidity-content" style={{position: "relative"}}>
						<div className="liquidity-corner-dropdown">
							<DotsHorizontalIcon color="white" width={24}/>
						</div>
						<div id="liquidity-header">
							<div style={{display: "inline-flex"}}>
								<ChevronUpIcon color="red" width={24} style={{marginLeft: -12}}/>
								<h1 style={{marginBottom: 0, marginTop: 0}}>Statistics</h1>
							</div>
						</div>
						<div id="liquidity-subheader">
							<div>
								<p style={{marginBottom: 0, marginTop: 0, display: "inline-block"}}>100,151</p>
								<p style={{marginBottom: 0, marginTop: 0, marginLeft: 2, display: "inline-block", fontSize: 13}}> OWL</p>
							</div>
							<p style={{marginTop: 2, fontSize: 12, opacity: 0.8}}>Total Earned</p>
						</div>
						<div id="liquidity-subheader">
							<div>
								<p style={{marginBottom: 0, marginTop: 0, display: "inline-block"}}>5,123,151</p>
								<p style={{marginBottom: 0, marginTop: 0, marginLeft: 2, display: "inline-block", fontSize: 13}}> OWL</p>
							</div>
							<p style={{marginTop: 2, fontSize: 12, opacity: 0.8}}>Estimated Profit</p>
						</div>
						<div id="liquidity-subheader" style={{marginBottom: 12}}>
							<div>
								<p style={{marginBottom: 0, marginTop: 0, display: "inline-block"}}>5,010,151</p>
								<p style={{marginBottom: 0, marginTop: 0, marginLeft: 2, display: "inline-block", fontSize: 13}}>OWL</p>
							</div>
							<p style={{marginTop: 2, fontSize: 12, opacity: 0.8}}>Staked</p>
						</div>
					</form>
				</div>
			</div>
			<div style={{width: "70%"}}>
				<div className="house-wrapper" >
					<div>
						<form  style={{position: "relative"}}>
							<div className="liquidity-corner-dropdown">
								<DotsHorizontalIcon color="white" width={24}/>
							</div>
							<div>
								<div style={{display: "inline-flex"}}>
									<h1 style={{marginBottom: 0, marginTop: 0}}>You are the ‘House’!</h1>
								</div>
								<p style={{marginTop: 0, marginBottom: 0, opacity: "0.8"}}>You are funding the casino by providing liquidity, essentially acting as ‘the house,’ and earning a passive return over time!</p>
							</div>
						</form>
					</div>
				</div>
				<div className="house-wrapper">
					<div>
						<LiquidityChart />
					</div>
				</div>
			</div>
		</div>
	);
}

export default liquidity;
