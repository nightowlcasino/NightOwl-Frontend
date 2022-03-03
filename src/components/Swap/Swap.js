import React from "react";
import image from "../../assets/Elements/swap-desktop.png";
import "./Swap.css";
import { useTranslation } from "react-i18next";

const Swap = () => {
    const { t } = useTranslation();
	return (
        <main>
            <div className="swap-div">
                <h1>{t("swap")}</h1>
                <p className="desc">{t("swap_text")}</p>
                <div className="initial-swap-token">
                    <div className="custom-select">
                        <select>
                            <option value="erg">ERG</option>
                        </select>
                    </div>
                    
                    <input type="number" className="token-input" />
                </div>

                <div className="mid-swap">
                    <p>.</p>
                    <p style={{marginBottom:"8px"}}>.</p>
                    <p className="to">{t("to")}</p>
                    <p>.</p>
                    <p>.</p>
                </div>

                <div className="final-swap-token">
                    <div className="custom-select">
                        <select>
                            <option value="erg">OWL</option>
                        </select>
                    </div>

                    <input type="number" className="token-input" />
                </div>

                <span><input type="checkbox" name="Private" />{t("private")}</span>

                <button>{t("swap")}</button>

                <p>{t("slippage")}: {}</p>
            </div>
            <img src={image} style={{width:"30%"}} />
        </main>
	);
};
export default Swap;
