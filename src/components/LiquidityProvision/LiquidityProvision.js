import React, { useState, useContext } from "react";
import axios from "axios";
import StateContext from "../Context";
//import { WalletContext } from "../Header/Header";
import { ChevronUpIcon, ChevronDownIcon, QuestionMarkCircleIcon } from '@heroicons/react/solid'
import { DotsHorizontalIcon } from '@heroicons/react/solid'
import LiquidityChart from './LiquidityChart'
import { useMatomo } from '@datapunt/matomo-tracker-react'


import "./LiquidityProvision.css";
import "../BodyContent/BodyContent.css";
import AddLiquidityModal from "../Modals/AddLiquidityModal";
import WithdrawLiquidityModal from "../Modals/WithdrawLiquidityModal";

const TOKENID_NO_TEST =
	"afd0d6cb61e86d15f2a0adc1e7e23df532ba3ff35f8ba88bed16729cae933032";
const TOKENID_FAKE_SIGUSD =
	"96c402c0e658909aa03f534006124f0e43725c467dbc8dea39680d0861892de5";
const TOKENID_ERG =
	"0000000000000000000000000000000000000000000000000000000000000000";
const FEE_VALUE = 1100000;
const MIN_BOX_VALUE = 1000000;

function Liquidity({ setIsLoading, setliquidityTransaction }) {
	// Track page view
	const { trackPageView } = useMatomo()


	const [openModal, setOpenModal] = useState(false);

	const [hasAddedLiquidity, setHasAddedLiquidity] = useState(false);

	const [addLiquidityModal, setAddLiquidityModal] = useState(false);
	const [withdrawLiquidityModal, setWithdrawLiquidityModal] = useState(false);



	// Track page view
	React.useEffect(() => {
	  trackPageView()
	}, [])


	if(hasAddedLiquidity) {
		return (
		<div style={{marginTop: 30, display: "flex", flexDirection: "column", color: "white", width: "100%"}}>
			<AddLiquidityModal showModal={addLiquidityModal} setModalOff={setAddLiquidityModal}/>
			<div style={{textAlign: "center"}}>
				<p style={{fontSize: "2rem", marginBottom: 0, marginTop: 0, fontWeight: "600"}}>The House</p>
			</div>

			<div style={{ padding: 12, borderRadius: 30, margin: 10 }}>
				<div className="data-container">
					<div className="data-box">
						<div style={{display: "inline-flex", marginTop: 10}}>
							<p className="data-title">TVL</p>
							<QuestionMarkCircleIcon className="questionmark-icon" />
						</div>
						<p className="data-content">6.3m<span className="owl-text">OWL</span></p>
					</div>

					<div style={{ width: 40 }}></div>

					<div className="data-box">
						<div style={{display: "inline-flex", marginTop: 10}}>
							<p className="data-title">Volume 24 Hrs</p>
							<QuestionMarkCircleIcon className="questionmark-icon" />
						</div>
						<p className="data-content">60k</p>
					</div>

					<div style={{ width: 40 }}></div>

					<div className="data-box">
						<div style={{display: "inline-flex", marginTop: 10}}>
							<p className="data-title">APY</p>
							<QuestionMarkCircleIcon className="questionmark-icon" />
						</div>
						<p className="data-content">6%</p>
					</div>
				</div>
				<div style={{ width: "100%"}} className="chart-preview">
					<div style={{margin: 12, padding: 18}}>
						<LiquidityChart />
					</div>
				</div>

				<div style={{textAlign: "center"}}>
					<p style={{width: "auto", fontSize: 24}} className="withdraw-button" onClick={() => setAddLiquidityModal(true)}>Add Liquidity</p>
				</div>
			</div>
		</div>
		)
	}

	return (
		<div>
			<div className="liquidity-container" style={{marginTop: 30}}>
			<WithdrawLiquidityModal showModal={withdrawLiquidityModal} setModalOff={setWithdrawLiquidityModal}/>
				<div style={{width: "30%"}}>
					<div className="house-wrapper">
						<form id="liquidity-content" style={{position: "relative"}}>
							
							<div id="liquidity-header" style={{textAlign: "center"}}>
								<div style={{display: "inline-flex"}}>
									{/* <ChevronUpIcon color="red" width={24} style={{marginLeft: -12}}/> */}
									<h1 style={{marginBottom: 8, marginTop: 0}}>1 WEEK</h1>
								</div>
								<p style={{marginTop: 0, marginBottom: 0, opacity: "0.8"}}>Total time providing liquidity </p>
							</div>
						</form>
					</div>
					<div className="house-wrapper" style={{marginTop: 10, textAlign: "center"}}>
						<form id="liquidity-content" style={{position: "relative"}}>
							
							<div id="liquidity-header">
								<div style={{display: "inline-flex"}}>
									{/* <ChevronUpIcon color="red" width={24} style={{marginLeft: -12}}/> */}
									<h1 style={{marginBottom: 8, marginTop: 0}}>7% APY</h1>
								</div>
								<p style={{marginTop: 0, marginBottom: 0, opacity: "0.8"}}>Approximate Annual Percentage Yield (APY)</p>
							</div>
						</form>
					</div>
					<div className="house-wrapper" style={{marginTop: 10, textAlign: "center"}}>
						<form id="liquidity-content" style={{position: "relative"}}>
							
							<div id="liquidity-header">
								<div style={{display: "inline-flex"}}>
									{/* <ChevronUpIcon color="red" width={24} style={{marginLeft: -12}}/> */}
									<h1 style={{marginBottom: 8, marginTop: 0}}>10 Days</h1>
								</div>
								<p style={{marginTop: 0, marginBottom: 0, opacity: "0.8"}}>Amount of days left until OWL is no longer locked</p>
							</div>
						</form>
					</div>
					<div className="house-wrapper" style={{marginTop: 10, textAlign: "center"}}>
						<form id="liquidity-content" style={{position: "relative"}}>
							
							<div id="liquidity-header">
								<div style={{display: "inline-flex"}}>
									{/* <ChevronUpIcon color="red" width={24} style={{marginLeft: -12}}/> */}
									<h1 style={{marginBottom: 8, marginTop: 0}}>Statistics</h1>
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
								
								<div>
									<div style={{display: "inline-flex"}}>
										<h1 style={{marginBottom: 8, marginTop: 0}}>You are the ‘House’!</h1>
									</div>
									<p style={{marginTop: 0, marginBottom: 0, opacity: "0.8"}}>You are funding the casino by providing liquidity, essentially acting as ‘the house,’ and earning a passive return over time!</p>
								</div>
								<div>
									<p className="withdraw-button" onClick={()=>setWithdrawLiquidityModal(true)}>Withdraw</p>
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
		</div>

	);
}

export default Liquidity;
