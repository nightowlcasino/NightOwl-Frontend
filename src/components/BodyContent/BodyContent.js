import { Routes, Route, useLocation } from "react-router-dom";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./BodyContent.css";
import Sidebars from  "../Sidebars/Sidebars.js";

import LandingPage from "./LandingPage.js";
import ComingSoon from "../ComingSoon/ComingSoon.js";
import Stake from "../Stake/Stake.js";
import Swap from "../Swap/Swap.js";
import Coinflip from "../Games/Coinflip/Coinflip.js";
import Roulette from "../Games/Roulette/Roulette";
import AboutUs from "../AboutUs/AboutUs";
import FAQ from "../FAQ/FAQ";
import LiquidityProvision from "../LiquidityProvision/LiquidityProvision";
import Games from "../Games/GamesPage/Games.js";
import Lottery from "../Lottery/Lottery";
import Blackjack from "../Games/Blackjack/Blackjack";

function BodyContent({setIsLoading,setSwapTransaction, kyaAccepted, setKyaAccepted}) {
    const location = useLocation();
    const path = location.pathname;
    const [sidebarToggled, setSidebarToggled] = useState(false);
    var body_content_game_class = "";

    console.log(path);

    if(path === '/availableGames')
    {
        body_content_game_class = "";
    }
	else if(path.toLocaleLowerCase().match("games"))
	{
		body_content_game_class = "game";
	}
	else
	{
        body_content_game_class = "";
	}

	return (
        <div id="body-content-wrapper" className={body_content_game_class}>
            <Sidebars sidebarToggled={sidebarToggled} setSidebarToggled={setSidebarToggled}/>
            <div id="body-content">
                <Routes>
                    <Route path="/" element={<LandingPage kyaAccepted={kyaAccepted} setKyaAccepted={setKyaAccepted}/>} />
                    <Route path="/soon" element={<ComingSoon />} />
                    <Route path="/stake" element={<Stake />} />
                    <Route path="/swap" element={<Swap setIsLoading={setIsLoading} setSwapTransaction={setSwapTransaction} />} />
                    <Route path="/games/coinflip" element={<Coinflip />} />
                    <Route path="/games/roulette" element={<Roulette sidebarToggled={sidebarToggled}/>} />
                    <Route path="/availableGames" element={<Games />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/liquidity" element={<LiquidityProvision />} />
                    <Route path="/games/lottery" element={<Lottery />} />
                    <Route path="/games/blackjack" element={<Blackjack />} />
                </Routes>
            </div>
        </div>
    );
}

export default BodyContent;
