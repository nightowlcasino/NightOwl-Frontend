import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header.js";
import LeftSideBar from "./components/LeftSideBar/LeftSideBar";
import logo from "./assets/Elements/logo.png";
import Swap from "./components/Swap/Swap";
import HomePage from "./components/HomePage/HomePage";
import Coinflip from "./components/Coinflip/Coinflip";
import Stake from "./components/Stake/Stake";
import ComingSoon from "./components/ComingSoon/Coming-Soon";
import Leaderboard from "./components/HomePage/Leaderboard";
import MobileSlideOverBar from "./components/LeftSideBar/MobileSlideOverBar";

function App() {
	const location = useLocation();
	const path = location.pathname;

	return (
		<div className="App">
			<div className="sm:min-w-[600px] sm:max-w-[600px] lg:min-w-[1100px] lg:max-w-[1100px] xl:min-w-[1500px] xl:ml-52 2xl:ml-0 max-w-[1600px] h-[100%] flex flex-col justify-center mt-[15px] lg:gap-2">
				<div className="xl:min-w-[1200px] max-w-[1600px] flex justify-center fixed top-0 mt-4 md:mt-1">
					<div className="w-full lg:w-full flex justify-center lg:justify-between items-center max-w-full">
						<div className="max-w-[25vw] flex justify-center lg:w-[25vw] xl:w-[18vw] 2xl:max-w-[300px]">
							<img
								src={logo}
								alt='NightOwlLogo'
								className="mt-2 max-w-[140px] min-w-[100px] w-[18vw] sm:w-[15vw] md:min-w-[60px] 2xl:h-[50px] 2xl:w-[5.5vw] min-h-[62px]"
							/>
						</div>
						<div className="mx-2 max-w-[1400px] w-[80%] xl:w-[90%] text-white text-center w-[70%] lg:w-[60%] lg:min-w-[550px] flex h-[50px] ">
							<Header />
						</div>
					</div>
				</div>

				<div className="h-[100%] flex justify-between min-w-full mt-28">
					{path.includes("/games") ? <MobileSlideOverBar /> : <LeftSideBar />}
					<div className="mt-4 w-full">
						<Routes>
							<Route path="/swap" element={<Swap />} />
							<Route path="/games/coinflip" element={<Coinflip />} />
							<Route path="/stake" element={<Stake />} />
							<Route path="/soon" element={<ComingSoon />} />
							<Route path="/games/roulette" element={<Leaderboard />} />
							<Route path="/" element={<HomePage />} />
						</Routes>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
