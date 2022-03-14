import React from "react";
import logo from "../../assets/Elements/logo.png";
import wallet from "../../assets/Elements/Design-2_0026_Layer-17.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie"

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
const Header = () => {
	const currentLanguageCode = cookies.get("i18next") || "en"

  const { t } = useTranslation();
  return (
    <div className="flex h-auto items-center top-0 fixed w-full lg:ml-[4rem] mt-[10px]">      

      <div className="w-full mr-10 flex justify-end lg:justify-center lg:ml-[11rem] xl:ml-[4rem] 2xl:ml-[13rem] ">
        <div style={{backgroundImage: "linear-gradient(to right, #51127f,#e20c8d)"}} className="flex justify-between items-center  w-[80%] md:w-[90%] md:ml-0 lg:w-[75%] xl:w-[70%] rounded-[25px] h-[2.8rem]">
          <div className="search-bar">
            <input id="search-game" type="text" placeholder={t("search_games")} />
          </div>
          <div className="lang-menu hidden lg:block ">
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
            <span className="volume hidden lg:inline">{t("volume")} $123,456</span>
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
