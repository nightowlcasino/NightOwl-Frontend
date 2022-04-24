import "./App.css";
import { useState } from "react";
import StateContext from "./components/Context";
// import { Routes, Route, useLocation } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Header from "./components/Header/Header.js";
import BodyContent from "./components/BodyContent/BodyContent.js"
import ComingSoon from "./components/ComingSoon/ComingSoon.js";
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
	const location = useLocation();
	const path = location.pathname;
	// console.log(path)
	return (
		<div className="App overlay">
			{/* need to add class 'overlay' to app in order to have blurred content in case swap overlay is active */}
				{path.includes('/soon') ? <ComingSoon /> : 
				<StateContext.Provider value={{ergoWallet, setErgoWallet, defaultAddress, setDefaultAddress}}>
					<Header />
					<BodyContent />
					<div id="overlay">
						<div id="overlay-background"></div>
						<div id="overlay-content-wrapper">
							<div id="overlay-content">
								Some content here, as you like
							</div>
						</div>
					</div>
				</StateContext.Provider>
				}
		</div>
	);
}

export default App;
