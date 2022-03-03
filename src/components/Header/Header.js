import React from "react";
import logo from "../../assets/Elements/logo.png";
import wallet from "../../assets/Elements/Design-2_0026_Layer-17.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie"

const Header = () => {
	const currentLanguageCode = cookies.get("i18next") || "en"

  const { t } = useTranslation();
  return (
    <div className="header">
      <div className="sidebar-logo">
        <a href="#">
          <img src={logo} style={{ height: "8vh" }} />
        </a>
      </div>
      <div class="right-container">
        <div className="header-right">
          <div className="search-bar">
            <input id="search-game" type="text" placeholder={t("search_games")} />
          </div>
          <div className="lang-menu">
            <div className="selected-lang">English</div>
            <ul>
              <li>
                <button  class="en" onClick={() => i18next.changeLanguage("en")} disabled={"en" === currentLanguageCode}>
                  English
                </button>
              </li>
              <li>
                <button  class="es" onClick={() => i18next.changeLanguage("es")} disabled={"es" === currentLanguageCode}>
                  Spanish
                </button>
              </li>
            </ul>
          </div>
          <div className="connect-wallet">
            <span class="volume">{t("volume")} $123,456</span>
            <button className="connect-wallet-button">
              <Link to="#">
                <img className="connect-wallet-icon" src={wallet} />
                <span class="connect-text">{t("connect_wallet")}</span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
