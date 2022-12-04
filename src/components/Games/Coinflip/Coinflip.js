import React, { useState } from "react";
import { useMatomo } from '@datapunt/matomo-tracker-react'
import "./Coinflip.css";
import headIcon from "../../../assets/Elements/head.png";
// import headIcon from "../../../assets/Elements/headpermant.svg";
import tailsIcon from "../../../assets/Elements/tails.png";
import infoLogo from "../../../assets/Elements/infologo.svg";
import CoinflipModal from "../../Modals/CoinflipModal";
import coinflipMascot from "../../../assets/Elements/coinflipMascot.png";
import { useSpring, a } from '@react-spring/web'
import './animation.css'

const Coinflip = () => {
  // Track page view
	const { trackPageView, trackEvent } = useMatomo()

  const [informationAboutGameIsPressed, setInformationAboutGameIsPressed] =
    useState(false);

  function rewardMinusHouseFee(value) {
    return value + (value - value * 0.025);
  }

  function handleBetPlaced() {
	const intervalID = setInterval(() => {
		set(state=> !state)
	}, 300);
    console.log("bet placed", intervalID);
  }

  const [flipped, set] = useState(false)

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 800, friction: 80 },
  })

  const [sideSelected, setSideSelected] = useState("Heads");
  const [bettingAmount, setBettingAmount] = useState("");


	// Track page view
	React.useEffect(() => {
	  trackPageView()
	}, [])

  return (
		<div style={{ width: "100%" }}>
			<div
				className="info-btn-container"
				style={{ marginLeft: "94%", marginBottom: "6vh" }}
			>
				<button
					type="button"
					id="info-btn"
					onClick={() => {
						setInformationAboutGameIsPressed(true);
					}}
				>
					<span className="btn-label">
						<img
							src={infoLogo}
							alt="Game info"
							style={{ width: "30px", height: "30px" }}
						/>
					</span>
				</button>
			</div>
			<div id="coinflip-game-wrapper">
				<CoinflipModal
					showModal={informationAboutGameIsPressed}
					setModalOff={setInformationAboutGameIsPressed}
				/>
				<div
					id="coinflip-content-wrapper"
					style={{ pointerEvents: informationAboutGameIsPressed ? "none" : "" }}
				>
					<div id="coinflip-content">
						<div className="coinflip-header">
							<h1>CoinFlip</h1>
						</div>
						<div className="coinflip-select-bet">
							<img
								src={headIcon}
								className="coinflip-select-bet-img"
								alt="Select heads"
								onClick={() => { setSideSelected("Heads"); set((state) => !state);}}
								style={
									sideSelected === "Heads"
										? {
												width: "115px",
												height: "115px",
												filter: "drop-shadow(0px 5px 3px #ab0d82)",
												WebkitFilter: "drop-shadow(0px 5px 3px #ab0d82)",
										  }
										: { width: "90px", height: "90px" }
								}
							/>
							<img
								src={tailsIcon}
								className="coinflip-select-bet-img"
								alt="Select tails"
								onClick={() => { setSideSelected("Tails"); set((state) => !state);}}
								style={
									sideSelected === "Tails"
										? {
												width: "115px",
												height: "115px",
												filter: "drop-shadow(0px 5px 3px #ab0d82)",
												WebkitFilter: "drop-shadow(0px 5px 3px #ab0d82)",
										  }
										: { width: "90px", height: "90px" }
								}
							/>
						</div>
						<h3>
							<span style={{ color: "#d70a84" }}>Selected: </span>
							{sideSelected}
						</h3>
						<div className="coinflip-input">
							<div id="coinflip-input-amount-input">
								<input
									type="number"
									placeholder={`OWL amount`}
									value={bettingAmount}
									onChange={(e) => setBettingAmount(e.target.value)}
								/>
							</div>
						</div>
						<h3>
							<span style={{ color: "#d70a84" }}>Possible reward: </span>
							{rewardMinusHouseFee(Number(bettingAmount))} OWL
						</h3>
						<div id="bet-button-wrapper">
							<button onClick={handleBetPlaced}>Place bet</button>
						</div>
					</div>
				</div>
				<div id="coin-wrapper">
					<div id="platform">
						<div
							className="flex fill center"
							onClick={()=> set(state=>!state)}
						>
							<a.div
								className='c back'
								style={{ opacity: opacity.to((o) => 1 - o), transform }}
							/>
							<a.div
								className='c front'
								style={{
									opacity,
									transform,
									rotateX: "180deg",
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Coinflip;
