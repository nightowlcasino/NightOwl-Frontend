import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
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
	const location = useLocation();
	const path = location.pathname;
	return (
		<div className="App">
			<ComingSoon />
		</div>
	);
}

export default App;
