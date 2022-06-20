import React, { useState, useContext } from "react";
import axios from "axios";
import StateContext from "../Context";
//import { WalletContext } from "../Header/Header";
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/solid'
import { DotsHorizontalIcon } from '@heroicons/react/solid'

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
		<div id="liquidity-wrapper" style={{marginTop: 30}}>
			<div id="liquidity-content-wrapper">
				<div id="liquidity-content-inner-wrapper">
					<form id="liquidity-content" style={{position: "relative"}}>
						<div className="liquidity-corner-dropdown">
							<DotsHorizontalIcon color="white" width={24}/>
						</div>
						<div id="liquidity-header">
							<div style={{display: "inline-flex"}}>
								<ChevronUpIcon color="red" width={24}/>
								<h1 style={{marginBottom: 0, marginTop: 0}}>1 WEEK</h1>
							</div>
							<p style={{marginTop: 0, marginBottom: 0, opacity: "0.8"}}>You have been staking for.</p>
						</div>
					</form>
				</div>
				<div id="liquidity-content-inner-wrapper" style={{marginTop: 28}}>
					<form id="liquidity-content" style={{position: "relative"}}>
						<div className="liquidity-corner-dropdown">
							<DotsHorizontalIcon color="white" width={24}/>
						</div>
						<div id="liquidity-header">
							<div style={{display: "inline-flex"}}>
								<ChevronUpIcon color="red" width={24}/>
								<h1 style={{marginBottom: 0, marginTop: 0}}>7% APY</h1>
							</div>
							<p style={{marginTop: 0, marginBottom: 0, opacity: "0.8"}}>You have been staking for.</p>
						</div>
					</form>
				</div>
			</div>
			<div id="liquidity-content-wrapper">
				<div id="liquidity-content-inner-wrapper">
					<form id="liquidity-content" style={{position: "relative"}}>
						<div className="liquidity-corner-dropdown">
							<DotsHorizontalIcon color="white" width={24}/>
						</div>
						<div id="liquidity-header">
							<div style={{display: "inline-flex"}}>
								<ChevronUpIcon color="red" width={24}/>
								<h1 style={{marginBottom: 0, marginTop: 0}}>1 WEEK</h1>
							</div>
							<p style={{marginTop: 0, marginBottom: 0, opacity: "0.8"}}>You have been staking for.</p>
						</div>
					</form>
				</div>
			</div>

		</div>
	);
}

export default liquidity;
