import React from "react";
import "./HomePage.css";
import image1 from "../../assets/Elements/Design-2_0000_Layer-21.png";
import { useTranslation } from "react-i18next";

const HomePage = ()=>{
    const { t } = useTranslation();
    return(
        <div className="home-page">
            <header className="top-div">
                <div className="left-section">
                    <div className="top-para">
                        <p>{t("hot")}</p>
                    </div>

                    <h1>Hero<br />title</h1>
                    <p>{t("have_fun")}<br />{t("enjoy_freedom")}</p>

                    <button>{t("claim")}</button>
                </div>
            </header>
                <div className="bottom-div">
                    <div className="bottom-left-div">
                        <div className="bottom-top-section">
                            <h2>{t("leaderboard")}</h2>
                        </div>

                        <div className="table-div">
                            <table>
                                <th>
                                    <span>{t("address")}</span>
                                    <span>{t("amount")}</span>
                                    <span>TXID</span>
                                </th>
                                
                                {/* {map the table rows here} */}

                                <tr>
                                    <td>
                                        <span>2hRSbf...FKbhnz</span>
                                        <span>1534 ERG</span>
                                        <span>kjj3nDS...d342sz</span>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <span>2hRSbf...FKbhnz</span>
                                        <span>1534 ERG</span>
                                        <span>kjj3nDS...d342sz</span>
                                    </td>
                                </tr>

                            </table>

                        </div>
                    </div>

                    <div className="bottom-right-div">
                        <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", height:"100%"}}>
                            <div style={{margin:"2rem"}}>
                                <h2 style={{textAlign:"start", margin:"0", padding:"0",top:0}}>{t("popular_games")}</h2>
                                <p style={{textAlign:"start", margin:"0", padding:"0",top:0}}>{t("slots")}</p>
                            </div>
                            
                            <button style={{margin:"2rem", width:"50%", height:"3rem"}}>{t("play_now")}</button>
                        </div>

                        <img src={image1} style={{maxWidth: "40%",height:"auto"}} />
                    </div>
                </div>
        </div>
    )
}

export default HomePage