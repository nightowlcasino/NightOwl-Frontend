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
	const [sidebarToggled, setSidebarToggled] = useState(false);
	const [isSelected, setIsSelected] = useState('');
	const location = useLocation();
	const path = location.pathname;

	var home_page_class = "side-navigation-large-item-wrapper";

	if(path === "/")
	{
		home_page_class += " active";
	}

	var games_page_class = "side-navigation-large-item-wrapper";

	if(path === "/games/" || path === "/games")
	{
		games_page_class += " active";
	}

	var bonuses_page_class = "side-navigation-large-item-wrapper";

	if(path === "/bonuses/" || path === "/bonuses")
	{
		bonuses_page_class += " active";
	}

	var rules_page_class = "side-navigation-large-item-wrapper";

	if(path === "/rules/" || path === "/rules")
	{
		rules_page_class += " active";
	}

	var casino_page_class = "side-navigation-large-item-wrapper";

	if(path === "/casino/" || path === "/casino")
	{
		casino_page_class += " active";
	}

	var p2p_page_class = "side-navigation-large-item-wrapper";

	if(path === "/p2p/" || path === "/p2p")
	{
		p2p_page_class += " active";
	}

	var coinflip_page_class = "side-navigation-large-item-wrapper";

	if(path === "/games/coinflip/" || path === "/games/coinflip")
	{
		coinflip_page_class += " active";
	}

	var blackjack_page_class = "side-navigation-large-item-wrapper";

	if(path === "/games/blackjack/" || path === "/games/blackjack")
	{
		blackjack_page_class += " active";
	}

	var random_page_class = "side-navigation-large-item-wrapper";

	if(path === "/games/random/" || path === "/games/random")
	{
		random_page_class += " active";
	}

	function changeSelection(element)
	{
		setIsSelected(element);
	}

	return (
		<div id="side-navigation-large-wrapper" className={sidebarToggled ? "show-game-sidebar" : ""}>
			{/* add "show-game-sidebar" class to element above to show navigation on game pages, remove to hide navigation */}
			<div id="side-navigation-large">
				<Link to="/" onClick={()=>setSidebarToggled(false)} className={home_page_class}>
					<div className="item-content">
						<div className="item-icon-wrapper">
							<div className="item-icon-white" style={{backgroundImage:`url(${home_icon_white})`}}></div>
							<div className="item-icon-pink" style={{backgroundImage:`url(${home_icon_pink})`}}></div>
						</div>
						<span className="item-text">Home page</span>
					</div>
				</Link>
				<Link to="/soon" onClick={()=>setSidebarToggled(false)} className={games_page_class}>
					<div className="item-content">
						<div className="item-icon-wrapper">
							<div className="item-icon-white" style={{backgroundImage:`url(${games_icon_white})`}}></div>
							<div className="item-icon-pink" style={{backgroundImage:`url(${games_icon_pink})`}}></div>
						</div>
						<span className="item-text">Games</span>
					</div>
				</Link>
				<Link to="/stake" onClick={()=>setSidebarToggled(false)} className={bonuses_page_class}>
					<div className="item-content">
						<div className="item-icon-wrapper">
							<div className="item-icon-white" style={{backgroundImage:`url(${bonuses_icon_white})`}}></div>
							<div className="item-icon-pink" style={{backgroundImage:`url(${bonuses_icon_pink})`}}></div> 
						</div>
						<span className="item-text">Bonuses</span>
					</div>
				</Link>
				<Link to="/swap" onClick={()=>setSidebarToggled(false)} className={rules_page_class}>
					<div className="item-content">
						<div className="item-icon-wrapper">
							<div className="item-icon-white" style={{backgroundImage:`url(${rules_icon_white})`}}></div>
							<div className="item-icon-pink" style={{backgroundImage:`url(${rules_icon_pink})`}}></div> 
						</div>
						<span className="item-text">Swap</span>
					</div>
				</Link>
				<Link to="/soon" onClick={()=>setSidebarToggled(false)} className={casino_page_class}>
					<div className="item-content">
						<div className="item-icon-wrapper">
							<div className="item-icon-white" style={{backgroundImage:`url(${casino_icon_white})`}}></div>
							<div className="item-icon-pink" style={{backgroundImage:`url(${casino_icon_pink})`}}></div> 
						</div>
						<span className="item-text">Casino</span>
					</div>
				</Link>
				<Link to="/soon" onClick={()=>setSidebarToggled(false)} className={p2p_page_class}>
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
				<Link to="/games/coinflip" onClick={()=>setSidebarToggled(false)} className={coinflip_page_class}>
					<div className="item-content">
						<div className="item-icon-wrapper">
							<div className="item-icon-white" style={{backgroundImage:`url(${coinflip_icon_white})`}}></div>
							<div className="item-icon-pink" style={{backgroundImage:`url(${coinflip_icon_pink})`}}></div> 
						</div>
						<span className="item-text">Coinflip</span>
					</div>
				</Link>
				<Link to="/soon" onClick={()=>setSidebarToggled(false)} className={blackjack_page_class}>
					<div className="item-content">
						<div className="item-icon-wrapper">
							<div className="item-icon-white" style={{backgroundImage:`url(${blackjack_icon_white})`}}></div>
							<div className="item-icon-pink" style={{backgroundImage:`url(${blackjack_icon_pink})`}}></div> 
						</div>
						<span className="item-text">Blackjack</span>
					</div>
				</Link>
				<Link to="/soon" onClick={()=>setSidebarToggled(false)} className={random_page_class}>
					<div className="item-content">
						<div className="item-icon-wrapper">
							<div className="item-icon-white" style={{backgroundImage:`url(${random_icon_white})`}}></div>
						<div className="item-icon-pink" style={{backgroundImage:`url(${random_icon_pink})`}}></div>
						</div>
						<span className="item-text">Random</span>
					</div>
				</Link>
				<div id="left-side-bar-show-button-wrapper">
					<div id="left-side-bar-show-button" onClick={() => setSidebarToggled(!sidebarToggled)}>&#8811;</div>
				</div>
			</div>
		</div>
	);
};

export default LeftSideBar;
