import React from "react";

import "./Header.css";

import logo from "../../assets/Elements/logo.png";
import logo_glow from "../../assets/Elements/logo_glow.png";
import magnifier from "../../assets/Elements/magnifier.png";
import AddWallet from "../ConnectWallet/AddWallet";

import { useLocation } from "react-router-dom";

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
	const location = useLocation();
	const path = location.pathname;

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
					<div id="logo" style={{ backgroundImage: `url(${path.includes("game") ? logo_glow : logo})`}}></div>
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
					<AddWallet />
				</div>
			</div>
		</div>
	);
};

export default Header;
//export const WalletContext = createContext(Header.ergoWallet);