import React from "react";

import "./Header.css";

import logo from "../../assets/Elements/logo.png";
import magnifier from "../../assets/Elements/magnifier.png";
import wallet_pink from "../../assets/Elements/wallet_pink.png";

// import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import i18next from "i18next";
// import cookies from "js-cookie";

// const languages = [
// 	{
// 		code: "en",
// 		name: "English",
// 		country_code: "us",
// 	},
// 	{
// 		code: "es",
// 		name: "Spanish",
// 		country_code: "es",
// 	},
// ];
const Header = () => {
	// const currentLanguageCode = cookies.get("i18next") || "en";
	// const { t } = useTranslation();

	window.addEventListener("scroll", () => 
	{
		if(window.scrollY > 0)
		{
			document.getElementById("header-wrapper").style.backgroundColor = "#00000077";
		}
		else
		{
			document.getElementById("header-wrapper").style.backgroundColor = "transparent";
		}
	});

	return (
		<div id="header-wrapper">
			<div id="header-content">
				<div id="logo-wrapper">
					<div id="logo" style={{ backgroundImage: `url(${logo})`}}></div>
				</div>
				<div id="header-items">
					<div id="header-search-wrapper">
						<input type="text" placeholder="Search games..." />
						<div id="magnifier" style={{ backgroundImage: `url(${magnifier})` }}></div>
					</div>
					<div id="header-seperator"></div>
					<div id="header-language">
						<div>
							<span>EN</span>
						</div>
					</div>
					<div id="header-balance-wrapper">
						<div id="header-balance">
							Volume: $<span id="header-balance-value">123,4</span><span id="header-balance-exponent">k</span></div>
						</div>
					<div id="header-wallet-wrapper">
						<div id="header-wallet">
							<div id="header-wallet-image" style={{ backgroundImage: `url(${wallet_pink})` }}></div>
							<div id="wallet-connect">
								<span>Connect Wallet</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
