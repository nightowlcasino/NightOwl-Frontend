// sites that should help
// https://blog.saeloun.com/2022/02/17/how-to-integrate-react-app-with-google-analytics.html
// https://stackoverflow.com/questions/49279820/adding-google-analytics-to-react
// https://www.positronx.io/how-to-integrate-google-analytics-tracking-code-in-react-js/

// added react google analytics script
// import ReactGA from 'react-ga';
// const TRACKING_ID = "G-Q8CR1V7954";
// ReactGA.initialize(TRACKING_ID);

// <!-- Global site tag (gtag.js) - Google Analytics -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q8CR1V7954"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-Q8CR1V7954');
// </script>

import "./App.css";
import { useState } from "react";
import StateContext from "./components/Context";
// import { Routes, Route, useLocation } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Header from "./components/Header/Header.js";
import BodyContent from "./components/BodyContent/BodyContent.js"
import ComingSoon from "./components/ComingSoon/ComingSoon.js";
import { Triangle } from  'react-loader-spinner'
import green_check from "./assets/Elements/green_checkmark.png"
import { IoClose } from 'react-icons/io5'
import successTick from './assets/Elements/successTick.png'
import Footer from "./components/Footer/Footer";
import darkBackground from "./assets/Elements/background_dark.png";

// import LeftSideBar from "./components/LeftSideBar/LeftSideBar";
// import logo from "./assets/Elements/logo.png";
// import Swap from "./components/Swap/Swap";
// import HomePage from "./components/HomePage/HomePage";
// import Coinflip from "./components/Coinflip/Coinflip";
// import Stake from "./components/Stake/Stake";
// import ComingSoon from "./components/ComingSoon/Coming-Soon";
// import Leaderboard from "./components/HomePage/Leaderboard";
// import MobileSlideOverBar from "./components/LeftSideBar/MobileSlideOverBar";

function App() {
	const [ergoWallet, setErgoWallet] = useState();
    const [defaultAddress, setDefaultAddress] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [swapTransaction, setSwapTransaction] = useState(false);
	const location = useLocation();
	const path = location.pathname;
	// console.log(path)
	return (
		<div className={(swapTransaction || isLoading) ? "App overlay" : "App"} style={{backgroundImage: path.includes('/games') ? `url(${darkBackground})` : "none"}}>
			{/* need to add class 'overlay' to app in order to have blurred content in case swap overlay is active */}
				{path.includes('/soon') ? <ComingSoon /> : 
				<StateContext.Provider value={{ergoWallet, setErgoWallet, defaultAddress, setDefaultAddress}}>
					<Header />
					<BodyContent setIsLoading={setIsLoading} setSwapTransaction={setSwapTransaction} />
					{!path.includes('/games') && <Footer />}
					{<div id="overlay">
						<div id="overlay-background"></div>
						<div id="overlay-content-wrapper">
							<div id="overlay-content">
								
								{isLoading && 
									<Triangle
										height="100"
										width="100"
										color='white'
										ariaLabel='loading'
									/>
								}
								{swapTransaction && 
									<div id="overlay-popup">
										<div id="green-checkmark" style={{backgroundImage: `url(${green_check})`}}></div>
										<div id="overlay-text">
											<span>Transaction submitted</span>
											<a style={{textDecoration:'underline'}} target="_blank" rel="noreferrer" href={`https://explorer.ergoplatform.com/en/transactions/${swapTransaction}`}>View Transaction</a>
										</div>
										{/* add functionality to close overlay to element below */}
										<div id="overlay-close" onClick={()=>setSwapTransaction(false)}>X</div>
									</div>
								}
							</div>
						</div>
					</div>}
				</StateContext.Provider>
				}
		</div>
	);
}

export default App;
