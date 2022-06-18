import home_trending from "../../assets/Elements/home_trending.png";
import leaderboard_icon from "../../assets/Elements/leaderboard_icon.png";
import slots from "../../assets/Elements/slots.png";
import roulette from "../../assets/Elements/roulette.png";

function LandingPage() {
	return (    
        <div id="page-content-wrapper">
            <div id="home-page-hot-wrapper">
                <div id="home-page-hot">
                    <div id="home-page-hot-border">
                        <div id="home-page-hot-content-background">
                            <div id="home-page-inner-wrapper">
                                <div id="home-page-inner-left">
                                    <div id="top" >
                                        <span>Hot right<br />now</span>
                                    </div>
                                    <div id="bottom">
                                        <div id="inner-fill"></div>
                                        <div id="header">
                                            <h1>Win 100$ and<br />5 free spins!</h1>
                                            <span id="header-description">Have fun in decentralised way and enjoy<br />freedom of the blockchain!</span>
                                            <br />
                                            <button id="header-button">Claim here</button>
                                        </div>
                                    </div>
                                </div>
                                <div id="home-page-inner-right" >
                                    <div id="background-image" style={{backgroundImage:`url(${home_trending})`}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="home-page-footer">
                <div id="home-page-transactions-wrapper">
                    <div id="home-page-transactions-border">
                        <div id="transactions-wrapper">
                            <div id="transactions-header-wrapper">
                                <div id="transactions-header">
                                    <div id="transactions-icon" style={{backgroundImage:`url(${leaderboard_icon})`}}></div>
                                    <span id="transactions-text">Leaderboard</span>
                                </div>
                            </div>
                            <div id="transactions-table-wrapper">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Address</th>
                                            <th className="transaction-amount">Amount</th>
                                            <th>Tx ID</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>2hRSbF...FKbhnz</td>
                                            <td className="transaction-amount">1534 ERG</td>
                                            <td>kjjnDS...d342sz</td>
                                        </tr>
                                        <tr>
                                            <td>2hRSbF...FKbhnz</td>
                                            <td className="transaction-amount">1534 ERG</td>
                                            <td>kjjnDS...d342sz</td>
                                        </tr>
                                        <tr>
                                            <td>2hRSbF...FKbhnz</td>
                                            <td className="transaction-amount">1534 ERG</td>
                                            <td>kjjnDS...d342sz</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="home-page-hot-games">
                    <div id="hot-game-slots" className="hot-games-border">
                        <div className="hot-games-wrapper">
                            <div className="hot-games-inner-left">
                                <div className="top">
                                    <h1 className="hot-games-top-header">Popular games</h1>
                                    <span className="hot-game-name">Slots</span>
                                </div>
                                <div className="bottom">
                                    <div className="inner-fill"></div>
                                    <div className="button-wrapper">
                                        <div className="button-background">
                                            <button className="hot-games-button">Play it now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hot-games-inner-right">
                                <div className="background-image" style={{backgroundImage:`url(${slots})`}}></div>
                            </div>
                        </div>
                    </div>
                    <div id="hot-game-roulette" className="hot-games-border">
                        <div className="hot-games-wrapper">
                            <div className="hot-games-inner-left">
                                <div className="top">
                                    <h1 className="hot-games-top-header">Popular games</h1>
                                    <span className="hot-game-name">Roulette</span>
                                </div>
                                <div className="bottom">
                                    <div className="inner-fill"></div>
                                    <div className="button-wrapper">
                                        <div className="button-background">
                                            <button className="hot-games-button">Play it now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hot-games-inner-right">
                                <div className="background-image" style={{backgroundImage:`url(${roulette})`}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
