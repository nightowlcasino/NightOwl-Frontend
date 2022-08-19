import React, { useEffect, useRef, useState } from "react";

import "./Header.css";

import logo from "../../assets/Elements/logo.png";
import logo_glow from "../../assets/Elements/logo_glow.png";
// import magnifier from "../../assets/Elements/magnifier.png";
import magnifier from "../../assets/Elements/magnifier2.svg";
import AddWallet from "../ConnectWallet/AddWallet";
import musicOffIcon from "../../assets/Elements/musicoff.svg";
import musicOnIcon from "../../assets/Elements/musicon.svg";
import Switch from "react-switch";
import { useLocation } from "react-router-dom";
import ReactHowler from "react-howler";
import sounds from "../utils/sounds";
import { Bars } from "react-loader-spinner";
import Select from "react-select";
import rouletteIcon from "../../assets/Elements/roulette3pink.svg";
import lotteryIcon from "../../assets/Elements/lottery4pink.svg";
import coinflipIcon from "../../assets/Elements/coinflip_image_pink.png";
import rouletteMascot from "../../assets/Elements/rouletteMascot.png";
import lotteryMascot from "../../assets/Elements/lotteryMascot.png";
import coinflipMascot from "../../assets/Elements/coinflipMascot.png";
import { Navigate, useNavigate, Link } from "react-router-dom";

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
  let navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const [musicState, setMusicState] = useState(false);
  const [currentSong, setCurrentSong] = useState(sounds[getRandomSong()]);
  const [selectedOption, setSelectedOption] = useState(null);

  // function checkActivateMusic() {
  //   const wantMusic = localStorage.getItem("wantMusic");
  //   if (wantMusic == "true") {
  //     return true;
  //   } else if (wantMusic == "false") {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  useEffect(() => {
    if (!path.toLocaleLowerCase().match("/games/")) {
      setSelectedOption(null);
    }
  }, [path]);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      document.getElementById("header-wrapper").style.backgroundColor =
        "#00000077";
    } else {
      document.getElementById("header-wrapper").style.backgroundColor =
        "transparent";
    }
  });

  function handleChange(e) {
    localStorage.setItem("wantMusic", e);
    setMusicState(e);
  }

  function getRandomSong() {
    const keys = Object.keys(sounds);
    const prop = keys[Math.floor(Math.random() * keys.length)];
    return prop;
  }

  function handleMusicFinished() {
    setCurrentSong(sounds[getRandomSong()]);
  }

  const gameSearchOptions = [
    {
      value: "roulette",
      label: "Roulette",
      icon: (
        <img src={rouletteMascot} alt="roulette" style={{ width: "45px" }} />
      ),
    },
    {
      value: "coinflip",
      label: "CoinFlip",
      icon: (
        <img src={coinflipMascot} alt="roulette" style={{ width: "45px" }} />
      ),
    },
    {
      value: "lottery",
      label: "Lottery",
      icon: (
        <img src={lotteryMascot} alt="roulette" style={{ width: "45px" }} />
      ),
    },
  ];

  const customGameSearchStyles = {
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isDisabled ? "red" : "white",
        color: "#000",
        cursor: isDisabled ? "pointer" : "pointer",
      };
    },
    menu: (styles) => ({ ...styles, marginTop: "5px" }),
    control: (styles) => ({
      ...styles,
      height: "50px",
      borderRadius: "25px",
      fontSize: "20px",
    }),
    indicatorsContainer: (styles) => ({ ...styles, display: "none" }),
    option: (styles) => ({
      ...styles,
      border: "1px solid lightgrey",
      height: "70px",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      fontWeight: "bold",
      fontSize: "20px",
      color: "#d70a84",
    }),
    valueContainer: (styles) => ({ ...styles, fontSize: "16px" }),
  };

  function handleGameSelectChange(e) {
    setSelectedOption(e.value);
    navigate(`/games/${e.value}`, { replace: true });
  }
  console.log(musicState);
  return (
    <div id="header-wrapper">
      <ReactHowler
        src={currentSong}
        playing={musicState}
        htm5={true}
        volume={0.7}
        onEnd={handleMusicFinished}
      />
      <div id="header-content">
        <div id="logo-wrapper">
          <div
            id="logo"
            style={{
              backgroundImage: `url(${
                path.includes("game") ? logo_glow : logo
              })`,
            }}
          ></div>
        </div>
        <div id="header-items">
          <div id="header-search-wrapper">
            <Select
              value={selectedOption || ""}
              onChange={(e) => handleGameSelectChange(e)}
              options={gameSearchOptions}
              placeholder="Search game..."
              styles={customGameSearchStyles}
              style={{ height: "150px" }}
              getOptionLabel={(e) => (
                <div style={{ display: "flex", alignItems: "center" }}>
                  {e.icon}
                  <span
                    style={{
                      position: "absolute",
                      left: "70px",
                      color: "#d70a84",
                      fontWeight: "bold",
                    }}
                  >
                    {e.label}
                  </span>
                </div>
              )}
            />
            <img id="magnifier" src={magnifier} alt="magnifier" />
          </div>
          <div id="header-seperator"></div>
          <div id="music-switch-container">
            <Switch
              onChange={(e) => handleChange(e)}
              checked={musicState}
              offColor="#333"
              onColor="#440f83"
              width={56}
              height={28}
              checkedHandleIcon={
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Bars
                    height={42}
                    width={18}
                    radius="9"
                    color="#8e0081"
                    ariaLabel="three-dots-loading"
                  />
                </div>
              }
              uncheckedIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <img
                    src={musicOffIcon}
                    alt="music off"
                    style={{ width: "20px", height: "20px" }}
                  />
                </div>
              }
              checkedIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <img
                    src={musicOnIcon}
                    alt="music on"
                    style={{ width: "20px", height: "20px" }}
                  />
                </div>
              }
            />
          </div>

          <div id="header-balance-wrapper">
            <div id="header-balance">
              Volume: $<span id="header-balance-value">123,4</span>
              <span id="header-balance-exponent">k</span>
            </div>
          </div>
          <AddWallet />
        </div>
      </div>
    </div>
  );
};

export default Header;
//export const WalletContext = createContext(Header.ergoWallet);
