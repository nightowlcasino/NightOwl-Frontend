import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import Homepage from "../../assets/Elements/Design-2_0039_Layer-5.png";
// import Games from "../../assets/Elements/Design-2_0037_Layer-7.png";
// import Bonuses from "../../assets/Elements/Design-2_0036_Layer-8.png";
// import Rules from "../../assets/Elements/Design-2_0035_Layer-9.png";
// import P2P from "../../assets/Elements/Design-2_0038_Layer-6.png";
// import Coinflip from "../../assets/Elements/Design-2_0051_Layer-11.png";
// import Blackjack from "../../assets/Elements/Design-2_0050_Layer-12.png";
// import Random from "../../assets/Elements/Design-2_0049_Layer-13.png";
// import Swapicon from "../../assets/Elements/swap-icon.png";
// import { useTranslation } from "react-i18next";

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
	const [isSelected, setIsSelected] = useState('');
	const location = useLocation();
	const path = location.pathname;

	var home_page_class = "side-navigation-large-item-wrapper";

	if(path === "/")
	{
		home_page_class += " active";
	}

	function changeSelection(element)
	{
		setIsSelected(element);
	}

	return (
		<div id="side-navigation-large-wrapper">
			<div id="side-navigation-large">
				<Link to="/" onClick={()=>changeSelection('homepage')} className={home_page_class}>
					<div className="item-content">
						<div className="item-icon-wrapper">
							<div className="item-icon-white" style={{backgroundImage:`url(${home_icon_white})`}}></div>
							<div className="item-icon-pink" style={{backgroundImage:`url(${home_icon_pink})`}}></div>
						</div>
						<span className="item-text">Home page</span>
					</div>
				</Link>
				<Link to="/soon" onClick={()=>changeSelection('soonGames')} className={isSelected === 'soonGames' ? "side-navigation-large-item-wrapper active" : "side-navigation-large-item-wrapper"}>
					<div className="item-content">
						<div className="item-icon-wrapper">
							<div className="item-icon-white" style={{backgroundImage:`url(${games_icon_white})`}}></div>
							<div className="item-icon-pink" style={{backgroundImage:`url(${games_icon_pink})`}}></div>
						</div>
						<span className="item-text">Games</span>
					</div>
				</Link>
				<Link to="/stake" onClick={()=>changeSelection('stack')} className={isSelected === 'stack' ? "side-navigation-large-item-wrapper active" : "side-navigation-large-item-wrapper"}>
					<div className="item-content">
						<div className="item-icon-wrapper">
							<div className="item-icon-white" style={{backgroundImage:`url(${bonuses_icon_white})`}}></div>
							<div className="item-icon-pink" style={{backgroundImage:`url(${bonuses_icon_pink})`}}></div> 
						</div>
						<span className="item-text">Bonuses</span>
					</div>
				</Link>
				<Link to="/swap" onClick={()=>changeSelection('swap')} className={isSelected === 'swap' ? "side-navigation-large-item-wrapper active" : "side-navigation-large-item-wrapper"}>
					<div className="item-content">
						<div className="item-icon-wrapper">
							<div className="item-icon-white" style={{backgroundImage:`url(${rules_icon_white})`}}></div>
							<div className="item-icon-pink" style={{backgroundImage:`url(${rules_icon_pink})`}}></div> 
						</div>
						<span className="item-text">Rules</span>
					</div>
				</Link>
				<Link to="/soon" onClick={()=>changeSelection('soonCasino')} className={isSelected === 'soonCasino' ? "side-navigation-large-item-wrapper active" : "side-navigation-large-item-wrapper"}>
					<div className="item-content">
						<div className="item-icon-wrapper">
							<div className="item-icon-white" style={{backgroundImage:`url(${casino_icon_white})`}}></div>
							<div className="item-icon-pink" style={{backgroundImage:`url(${casino_icon_pink})`}}></div> 
						</div>
						<span className="item-text">Casino</span>
					</div>
				</Link>
				<Link to="/soon" onClick={()=>changeSelection('soonBetting')} className={isSelected === 'soonBetting' ? "side-navigation-large-item-wrapper active" : "side-navigation-large-item-wrapper"}>
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
				<Link to="/games/coinflip" onClick={()=>changeSelection('coinflip')} className={isSelected === 'coinflip' ? "side-navigation-large-item-wrapper active" : "side-navigation-large-item-wrapper"}>
					<div className="item-content">
						<div className="item-icon-wrapper">
							<div className="item-icon-white" style={{backgroundImage:`url(${coinflip_icon_white})`}}></div>
							<div className="item-icon-pink" style={{backgroundImage:`url(${coinflip_icon_pink})`}}></div> 
						</div>
						<span className="item-text">Coinflip</span>
					</div>
				</Link>
				<Link to="/soon" onClick={()=>changeSelection('soonBlackjack')} className={isSelected === 'soonBlackjack' ? "side-navigation-large-item-wrapper active" : "side-navigation-large-item-wrapper"}>
					<div className="item-content">
						<div className="item-icon-wrapper">
							<div className="item-icon-white" style={{backgroundImage:`url(${blackjack_icon_white})`}}></div>
							<div className="item-icon-pink" style={{backgroundImage:`url(${blackjack_icon_pink})`}}></div> 
						</div>
						<span className="item-text">Blackjack</span>
					</div>
				</Link>
				<Link to="/soon" onClick={()=>changeSelection('soonRandom')} className={isSelected === 'soonRandom' ? "side-navigation-large-item-wrapper active" : "side-navigation-large-item-wrapper"}>
					<div className="item-content">
						<div className="item-icon-wrapper">
							<div className="item-icon-white" style={{backgroundImage:`url(${random_icon_white})`}}></div>
						<div className="item-icon-pink" style={{backgroundImage:`url(${random_icon_pink})`}}></div>
						</div>
						<span className="item-text">Random</span>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default LeftSideBar;
