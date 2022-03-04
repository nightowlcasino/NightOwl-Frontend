import React from "react";
import "./Coinflip.css";
import image from "../../assets/Elements/coinflip-pyramid.png";
import { HiPlus, HiMinus } from "react-icons/hi";
import { ImHammer2 } from "react-icons/im";
import { useTranslation } from "react-i18next";


const Coinflip = () => {
  const { t } = useTranslation();

  return (
    <main className="coinflip-container-main">
      <div className="coinflip-div">
        <h1>
          <span style={{ color: "#d70a84" }}>{t("head")} </span>
          <span>/ {t("tail")}</span>
        </h1>

        <div className="below-head">
          <p>
          {t("selected")} <span>{"Head"}</span>
          </p>
          <p>
          {t("reward")}<span>{"20,000"}</span>
          </p>
        </div>

        <p>{t("please_set")}</p>

        <div className="coinflip-calc">
          <h1>{<HiMinus size={35}/>}</h1>
          <input type="text" pattern="[^a-zA-Z]+" />
          <span id="owl-literal">OWL</span>
          <h1>{<HiPlus size={35}/>}</h1>
        </div>

        <button><span style={{marginRight:'5px', transform: 'rotateY(180deg)'}}>{<ImHammer2 size={25} />}</span>{t("place_bet")}</button>

        <p>{t("transaction_id")}{}</p>
      </div>

      <div className="coinflip-image-container" style={{marginBottom:"150px"}}>
        <img src={image} style={{width:"25vw"}} />
      </div>
    </main>
  );
};
export default Coinflip;
