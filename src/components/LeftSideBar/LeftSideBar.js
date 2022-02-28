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
import { useTranslation } from "react-i18next";

const LeftSideBar = () => {
	const { t } = useTranslation();
	return (
		<div className="left-side-bar">
				<div className="bar">
					<div className="list-items">
						<Link to="/">
							<img src={Homepage} />
							{t("home_page")}
						</Link>

						<Link to="/soon">
							<img src={Games} />
							{t("games")}
						</Link>
						<Link to="/stake">
							<img src={Bonuses} />
							{t("stake")}
						</Link>
						<Link to="/swap">
							<img src={Swapicon} />
							{t("swap")}
						</Link>
						<Link to="/soon">
							<img src={Rules} />
							{t("rules")}
						</Link>
						<Link to="/soon">
							<img src={P2P} />
							{t("p2p_betting")}
						</Link>
						<span className="popgames">Popular Games</span>
						<Link to="/coinflip">
							<img src={Coinflip} />
							{t("coinflip")}
						</Link>
						<Link to="/soon">
							<img src={Blackjack} />
							{t("blackjack")}
						</Link>
						<Link to="/soon">
							<img src={Random} />
							{t("random")}
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
