import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import home_icon_pink from "../../assets/Elements/home_image_pink.png";
import home_icon_white from "../../assets/Elements/home_image_white.png";

import games_icon_pink from "../../assets/Elements/games_image_pink.png";
import games_icon_white from "../../assets/Elements/games_image_white.png";

// import swap1_icon_pink from "../../assets/Elements/swap2.svg";
import swap1_icon_white from "../../assets/Elements/swap5.svg";
import swap1_icon_pink from "../../assets/Elements/swap5pink.svg";

import bank_icon_white from "../../assets/Elements/bank2.svg";
import bank_icon_pink from "../../assets/Elements/bank2pink.svg";

import roulette_icon_white from "../../assets/Elements/roulette3.svg";
import roulette_icon_pink from "../../assets/Elements/roulette3pink.svg";

import lottery_icon_white from "../../assets/Elements/lottery4.svg";
import lottery_icon_pink from "../../assets/Elements/lottery4pink.svg";

import coinflip_icon_pink from "../../assets/Elements/coinflip_image_pink.png";
import coinflip_icon_white from "../../assets/Elements/coinflip_image_white.png";


function LeftSideBar({ sidebarToggled, setSidebarToggled }) {
  const location = useLocation();
  const path = location.pathname;

  var home_page_class = "side-navigation-large-item-wrapper";

  if (path === "/") {
    home_page_class += " active";
  }

  var games_page_class = "side-navigation-large-item-wrapper";

  if (path === "/games/" || path === "/games") {
    games_page_class += " active";
  }

  var swap_page_class = "side-navigation-large-item-wrapper";

  if (path === "/swap/" || path === "/swap") {
    swap_page_class += " active";
  }

  var liquidity_page_class = "side-navigation-large-item-wrapper";

  if (path === "/liquidity/" || path === "/liquidity") {
    liquidity_page_class += " active";
  }

  var coinflip_page_class = "side-navigation-large-item-wrapper";

  if (path === "/games/coinflip/" || path === "/games/coinflip") {
    coinflip_page_class += " active";
  }

  var roulette_page_class = "side-navigation-large-item-wrapper";

  if (path === "/games/roulette/" || path === "/games/roulette") {
    roulette_page_class += " active";
  }

  var lottery_page_class = "side-navigation-large-item-wrapper";

  if (path === "/games/lottery/" || path === "/games/lottery") {
    lottery_page_class += " active";
  }

  return (
    <div
      id="side-navigation-large-wrapper"
      className={sidebarToggled ? "show-game-sidebar" : ""}
    >
      {/* add "show-game-sidebar" class to element above to show navigation on game pages, remove to hide navigation */}
      <div id="side-navigation-large">
        <Link
          to="/"
          onClick={() => setSidebarToggled(false)}
          className={home_page_class}
        >
          <div className="item-content">
            <div className="item-icon-wrapper">
              <div
                className="item-icon-white"
                style={{ backgroundImage: `url(${home_icon_white})` }}
              ></div>
              <div
                className="item-icon-pink"
                style={{ backgroundImage: `url(${home_icon_pink})` }}
              ></div>
            </div>
            <span className="item-text">Home</span>
          </div>
        </Link>
        <Link
          to="/availableGames"
          onClick={() => setSidebarToggled(false)}
          className={games_page_class}
        >
          <div className="item-content">
            <div className="item-icon-wrapper">
              <div
                className="item-icon-white"
                style={{ backgroundImage: `url(${games_icon_white})` }}
              ></div>
              <div
                className="item-icon-pink"
                style={{ backgroundImage: `url(${games_icon_pink})` }}
              ></div>
            </div>
            <span className="item-text">Games</span>
          </div>
        </Link>
        <Link
          to="/swap"
          onClick={() => setSidebarToggled(false)}
          className={swap_page_class}
        >
          <div className="item-content">
            <div className="item-icon-wrapper">
              <div
                className="item-icon-white"
                style={{ backgroundImage: `url(${swap1_icon_white})` }}
              ></div>
              <div
                className="item-icon-pink"
                style={{ backgroundImage: `url(${swap1_icon_pink})` }}
              ></div>
            </div>
            <span className="item-text">Swap</span>
          </div>
        </Link>
        <Link
          to="/liquidity"
          onClick={() => setSidebarToggled(false)}
          className={liquidity_page_class}
        >
          <div className="item-content">
            <div className="item-icon-wrapper">
              <div
                className="item-icon-white"
                style={{ backgroundImage: `url(${bank_icon_white})` }}
              ></div>
              <div
                className="item-icon-pink"
                style={{ backgroundImage: `url(${bank_icon_pink})` }}
              ></div>
            </div>
            <span className="item-text">The House</span>
          </div>
        </Link>
        {/* <Link
          to="/aboutus"
          onClick={() => setSidebarToggled(false)}
          className={aboutus_page_class}
        >
          <div className="item-content">
            <div className="item-icon-wrapper">
              <div
                className="item-icon-white"
                style={{ backgroundImage: `url(${aboutus_icon_white})` }}
              ></div>
              <div
                className="item-icon-pink"
                style={{ backgroundImage: `url(${aboutus_icon_pink})` }}
              ></div>
            </div>
            <span className="item-text">About us</span>
          </div>
        </Link> */}
        {/* <Link
          to="/faq"
          onClick={() => setSidebarToggled(false)}
          className={faq_page_class}
        >
          <div className="item-content">
            <div className="item-icon-wrapper">
              <div
                className="item-icon-white"
                style={{ backgroundImage: `url(${faq_icon_white})` }}
              ></div>
              <div
                className="item-icon-pink"
                style={{ backgroundImage: `url(${faq_icon_pink})` }}
              ></div>
            </div>
            <span className="item-text">FAQ</span>
          </div>
        </Link> */}
        <div className="side-navigation-large-item-wrapper-string">
          <div className="item-content">
            <span>Popular games</span>
          </div>
        </div>
        <Link
          to="/games/roulette"
          onClick={() => setSidebarToggled(false)}
          className={roulette_page_class}
        >
          <div className="item-content">
            <div className="item-icon-wrapper">
              <div
                className="item-icon-white"
                style={{ backgroundImage: `url(${roulette_icon_white})` }}
              ></div>
              <div
                className="item-icon-pink"
                style={{ backgroundImage: `url(${roulette_icon_pink})` }}
              ></div>
            </div>
            <span className="item-text">Roulette</span>
          </div>
        </Link>
        <Link
          to="/games/coinflip"
          onClick={() => setSidebarToggled(false)}
          className={coinflip_page_class}
        >
          <div className="item-content">
            <div className="item-icon-wrapper">
              <div
                className="item-icon-white"
                style={{ backgroundImage: `url(${coinflip_icon_white})` }}
              ></div>
              <div
                className="item-icon-pink"
                style={{ backgroundImage: `url(${coinflip_icon_pink})` }}
              ></div>
            </div>
            <span className="item-text">CoinFlip</span>
          </div>
        </Link>
        <Link
          to="/games/lottery"
          onClick={() => setSidebarToggled(false)}
          className={lottery_page_class}
        >
          <div className="item-content">
            <div className="item-icon-wrapper">
              <div
                className="item-icon-white"
                style={{ backgroundImage: `url(${lottery_icon_white})` }}
              ></div>
              <div
                className="item-icon-pink"
                style={{ backgroundImage: `url(${lottery_icon_pink})` }}
              ></div>
            </div>
            <span className="item-text">Lottery</span>
          </div>
        </Link>
        <div id="left-side-bar-show-button-wrapper">
          <div
            id="left-side-bar-show-button"
            onClick={() => {
              setSidebarToggled(!sidebarToggled);
            }}
          >
            &#8811;
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSideBar;
