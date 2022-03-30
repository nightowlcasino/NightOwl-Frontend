import React from "react";
import { Link } from "react-router-dom";
// import Homepage from "../../assets/Elements/Design-2_0039_Layer-5.png";
// import Games from "../../assets/Elements/Design-2_0037_Layer-7.png";
// import Bonuses from "../../assets/Elements/Design-2_0036_Layer-8.png";
// import Rules from "../../assets/Elements/Design-2_0035_Layer-9.png";
// import P2P from "../../assets/Elements/Design-2_0038_Layer-6.png";
// import Coinflip from "../../assets/Elements/Design-2_0051_Layer-11.png";
// import Blackjack from "../../assets/Elements/Design-2_0050_Layer-12.png";
// import Random from "../../assets/Elements/Design-2_0049_Layer-13.png";
// import Swapicon from "../../assets/Elements/swap-icon.png";
import { useTranslation } from "react-i18next";

import home_icon_pink from "../../assets/Elements/home_image_pink.png";
import home_icon_white from "../../assets/Elements/home_image_white.png";

import games_icon_pink from "../../assets/Elements/games_image_pink.png";
import games_icon_white from "../../assets/Elements/games_image_white.png";

import bonuses_icon_pink from "../../assets/Elements/bonuses_image_pink.png";
import bonuses_icon_white from "../../assets/Elements/bonuses_image_white.png";

import rules_icon_pink from "../../assets/Elements/rules_image_pink.png";
import rules_icon_white from "../../assets/Elements/rules_image_white.png";

import casino_icon_pink from "../../assets/Elements/casino_image_pink.png";
import casino_icon_white from "../../assets/Elements/casino_image_white.png";

import p2p_icon_pink from "../../assets/Elements/p2p_image_pink.png";
import p2p_icon_white from "../../assets/Elements/p2p_image_white.png";

import coinflip_icon_pink from "../../assets/Elements/coinflip_image_pink.png";
import coinflip_icon_white from "../../assets/Elements/coinflip_image_white.png";

import blackjack_icon_pink from "../../assets/Elements/blackjack_image_pink.png";
import blackjack_icon_white from "../../assets/Elements/blackjack_image_white.png";

import random_icon_pink from "../../assets/Elements/random_image_pink.png";
import random_icon_white from "../../assets/Elements/random_image_white.png";

function LeftSideBar() {

	function change_class(element)
	{
		var side_nav_elements = document.getElementsByClassName("side-navigation-large-item-wrapper");

		for(var i = 0; i < side_nav_elements.length; i++)
		{
			side_nav_elements[i].classList.remove("active");
		}

		element.classList.add("active");
	}

	return (
		<div id="side-navigation-large-wrapper">
			<div id="side-navigation-large">
				<Link to="/" onClick={change_class.bind(this)} className="side-navigation-large-item-wrapper active">
					<div className="item-content">
						<div className="item-icon-wrapper">
							<div className="item-icon-white" style={{backgroundImage:`url(${home_icon_white})`}}></div>
							<div className="item-icon-pink" style={{backgroundImage:`url(${home_icon_pink})`}}></div>
						</div>
						<span className="item-text">Home page</span>
					</div>
				</Link>
				<Link to="/soon" onClick={change_class.bind(this)} className="side-navigation-large-item-wrapper">
					<div className="item-content">
						<div className="item-icon-wrapper">
							<div className="item-icon-white" style={{backgroundImage:`url(${games_icon_white})`}}></div>
							<div className="item-icon-pink" style={{backgroundImage:`url(${games_icon_pink})`}}></div>
						</div>
						<span className="item-text">Games</span>
					</div>
				</Link>
				<Link to="/stake" onClick={change_class.bind(this)} className="side-navigation-large-item-wrapper">
					<div className="item-content">
						<div className="item-icon-wrapper">
							<div className="item-icon-white" style={{backgroundImage:`url(${bonuses_icon_white})`}}></div>
							<div className="item-icon-pink" style={{backgroundImage:`url(${bonuses_icon_pink})`}}></div> 
						</div>
						<span className="item-text">Bonuses</span>
					</div>
				</Link>
				<Link to="/swap" onClick={change_class.bind(this)} className="side-navigation-large-item-wrapper">
					<div className="item-content">
						<div className="item-icon-wrapper">
							<div className="item-icon-white" style={{backgroundImage:`url(${rules_icon_white})`}}></div>
							<div className="item-icon-pink" style={{backgroundImage:`url(${rules_icon_pink})`}}></div> 
						</div>
						<span className="item-text">Rules</span>
					</div>
				</Link>
				<Link to="/soon" onClick={change_class.bind(this)} className="side-navigation-large-item-wrapper">
					<div className="item-content">
						<div className="item-icon-wrapper">
							<div className="item-icon-white" style={{backgroundImage:`url(${casino_icon_white})`}}></div>
							<div className="item-icon-pink" style={{backgroundImage:`url(${casino_icon_pink})`}}></div> 
						</div>
						<span className="item-text">Casino</span>
					</div>
				</Link>
				<Link to="/soon" onClick={change_class.bind(this)} className="side-navigation-large-item-wrapper">
					<div className="item-content">
						<div className="item-icon-wrapper">
							<div className="item-icon-white" style={{backgroundImage:`url(${p2p_icon_white})`}}></div>
							<div className="item-icon-pink" style={{backgroundImage:`url(${p2p_icon_pink})`}}></div> 
						</div>
						<span className="item-text">P2P Betting</span>
					</div>
				</Link>
				<div className="side-navigation-large-item-wrapper-string">
					<div className="item-content">
						<span>Popular games</span>
					</div>
				</div>
				<Link to="/games/coinflip" onClick={change_class.bind(this)} className="side-navigation-large-item-wrapper">
					<div className="item-content">
						<div className="item-icon-wrapper">
							<div className="item-icon-white" style={{backgroundImage:`url(${coinflip_icon_white})`}}></div>
							<div className="item-icon-pink" style={{backgroundImage:`url(${coinflip_icon_pink})`}}></div> 
						</div>
						<span className="item-text">Coinflip</span>
					</div>
				</Link>
				<Link to="/soon" onClick={change_class.bind(this)} className="side-navigation-large-item-wrapper">
					<div className="item-content">
						<div className="item-icon-wrapper">
							<div className="item-icon-white" style={{backgroundImage:`url(${blackjack_icon_white})`}}></div>
							<div className="item-icon-pink" style={{backgroundImage:`url(${blackjack_icon_pink})`}}></div> 
						</div>
						<span className="item-text">Blackjack</span>
					</div>
				</Link>
				<Link to="/soon" onClick={change_class.bind(this)} className="side-navigation-large-item-wrapper">
					<div className="item-content">
						<div className="item-icon-wrapper">
							<div className="item-icon-white" style={{backgroundImage:`url(${random_icon_white})`}}></div>
						<div className="item-icon-pink" style={{backgroundImage:`url(${random_icon_pink})`}}></div>
						</div>
						<span className="item-text">Random</span>
					</div>
				</Link>
				<div id="downshift-arrow-wrapper">
					<div id="downshift-arrow">
						<div id="item">▼</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LeftSideBar;
