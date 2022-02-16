import React from "react";
import { Link } from "react-router-dom";
import Homepage from "../../assets/Elements/Design-2_0039_Layer-5.png";
import Games from "../../assets/Elements/Design-2_0037_Layer-7.png";
import Bonuses from "../../assets/Elements/Design-2_0036_Layer-8.png";
import Rules from "../../assets/Elements/Design-2_0035_Layer-9.png";
import Casino from "../../assets/Elements/Design-2_0034_Layer-10.png";
import P2P from "../../assets/Elements/Design-2_0038_Layer-6.png";
import Coinflip from "../../assets/Elements/Design-2_0051_Layer-11.png";
import Blackjack from "../../assets/Elements/Design-2_0050_Layer-12.png";
import Random from "../../assets/Elements/Design-2_0049_Layer-13.png";
import Swapicon from "../../assets/Elements/swap-icon.png";
import "./LeftSideBar.css";

const LeftSideBar = () => {
	return (
		<div className="left-side-bar">
				<div className="bar">
					<div className="list-items">
						<Link to="/">
							<img src={Homepage} />
							Home page
						</Link>

						<Link to="/soon">
							<img src={Games} />
							Games
						</Link>
						<Link to="/soon">
							<img src={Bonuses} />
							Stake
						</Link>
						<Link to="/swap">
							<img src={Swapicon} />
							Swap
						</Link>
						<Link to="/soon">
							<img src={Rules} />
							Rules
						</Link>
						<Link to="/soon">
							<img src={P2P} />
							P2P Betting
						</Link>
						<span className="popgames">Popular Games</span>
						<Link to="/coinflip">
							<img src={Coinflip} />
							Coinflip
						</Link>
						<Link to="/soon">
							<img src={Blackjack} />
							Blackjack
						</Link>
						<Link to="/soon">
							<img src={Random} />
							Random
						</Link>
					</div>
					<div align="center" className="caret">
						<a href="#">▼</a>
					</div>
				</div>
		</div>
	);
};

export default LeftSideBar;
