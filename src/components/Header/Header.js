import React, {useState, useEffect, createContext} from "react";
import JSONBigInt from 'json-bigint';
import logo from "../../assets/Elements/logo.png";
import "./Header.css";
import "./WalletSelector";
//import "../../wallets/wallet"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie"
import WalletSelector from "./WalletSelector";
import AddWallet from "../ConnectWallet/AddWallet";
import WalletContext from "../ConnectWallet/WalletContext";

const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'us'
  },
  {
    code: 'es',
    name: 'Spanish',
    country_code: 'es'
  }
]


const currentLanguageCode = cookies.get("i18next") || "en"

const Header = () => {

  const { t } = useTranslation();


  return (
    <div className="flex h-auto justify-between sm:justify-between lg:items-center top-0 fixed w-full md:max-w-[700px] lg:max-w-[1460px] mt-[10px]">      
      <img src={logo} className="sm:hidden mt-2 max-w-[120px] sm:ml-0 fixed min-w-[100px] w-[100px] sm:w-[15vw] md:min-w-[60px] 2xl:h-[50px] 2xl:w-[6%] min-h-[62px] top-0" />
      <div className="w-full flex  sm:ml-12 lg:ml-0 justify-end sm:justify-center md:justify-end lg:justify-start  ">
        <div style={{backgroundImage: "linear-gradient(to right, #51127f,#e20c8d)"}} className="flex justify-between items-center w-[70%] lg:ml-0 rounded-[25px] h-[2.8rem]">
          <div className="search-bar">
            <input id="search-game" type="text" placeholder={t("search_games")} />
          </div>
          <div className="lang-menu hidden lg:block ">
            <div className="selected-lang">English</div>
            <ul>
              <li>
                <button className="en" onClick={() => i18next.changeLanguage("en")} disabled={"en" === currentLanguageCode}>
                  English
                </button>
              </li>
              <li>
                <button className="es" onClick={() => i18next.changeLanguage("es")} disabled={"es" === currentLanguageCode}>
                  Spanish
                </button>
              </li>
            </ul>
          </div>
          <div className="connect-wallet">
            <span className="volume hidden lg:inline">{t("volume")} $123,456</span>
            <AddWallet />
            <button className="connect-wallet-button">
              <Link to="#">
                <span className="connect-text">{t("swap")}</span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
<div className="connect-wallet">
  <button onClick={disconnectWallet} className="connect-wallet-button">
    <p className="connect-text">disconnect</p>
  </button>
</div>
*/

export default Header;
//export const WalletContext = createContext(Header.ergoWallet);