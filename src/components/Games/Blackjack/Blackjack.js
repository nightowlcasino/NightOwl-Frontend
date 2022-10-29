import React, { useEffect, useState } from "react";
import "./Blackjack.css";
import headIcon from "../../../assets/Elements/head.png";
import tailsIcon from "../../../assets/Elements/tails.png";
import infoLogo from "../../../assets/Elements/infologo.svg";
import CoinflipModal from "../../Modals/CoinflipModal";
import blackjackMascot from "../../../assets/Elements/blackjackMascot.png";
import cards from "../../../assets/Cards/Cards";
import coin_100 from "../../../assets/Elements/coin_100.png";
import coin_500 from "../../../assets/Elements/coin_500.png";
import coin_2500 from "../../../assets/Elements/coin_2k5.png";
import coin_10000 from "../../../assets/Elements/coin_10k.png";
import coin_50000 from "../../../assets/Elements/coin_50k.png";
import axios from "axios";
import {
  choosingChip,
  placingChip,
  cardMixing,
  cardPlaced,
  getRandomDeck,
} from "./BlackjackUtils";

const coins = {
	coin100: coin_100,
	coin500: coin_500,
	coin2500: coin_2500,
	coin10000: coin_10000,
	coin50000: coin_50000,
}

const Blackjack = () => {

     const [informationAboutGameIsPressed, setInformationAboutGameIsPressed] =
		useState(false);
	const [chipSelected, setChipSelected] = useState(null);
	const [betAmount, setBetAmount] = useState(0);
  const [betArray, setBetArray] = useState([]);
  const [cardsDealt, setCardsDealt] = useState(false);
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);
  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);
  const [deck, setDeck] = useState(getRandomDeck());
  const [playerAceCount, setPlayerAceCount] = useState(0);
  const [dealerAceCount, setDealerAceCount] = useState(0);

	function handleChipSelected(chipValue) {
    setChipSelected(chipValue);
    setBetAmount((prev) => prev + chipValue);
		setBetArray([...betArray,chipValue]);
    placingChip.currentTime = 0;
    placingChip.play();
  }


  function handleDeal() {
    axios
      .post(`/api/v1/ergo/encode-num`, {
        number: "12345", isInt: true
      })
      .then((response) => {
        console.log("the response is: " + response);
      })
      .catch((error) => {
        console.log("the error is: " + error);
      });
    // setCardsDealt(true);
    // const cards = getNFirstsCard(4);
    // setPlayerCards([cards[0], cards[2]]);
    // setDealerCards([cards[1], cards[3]]);
    // let playerAces = 0;
    // let dealerAces = 0;
    // cards.forEach((card, index) => {
    //   if (index % 2 === 0 && card.value === 11) playerAces++;
    //   if (index % 2 !== 0 && card.value === 11) dealerAces++;
    // });
    // setPlayerAceCount(playerAces);
    // setDealerAceCount(dealerAces);
    
    // setTimeout(() => {
    //   setPlayerCards([{ ...cards[0], visible: true }, { ...cards[1], visible: false }]);
    //   cardPlaced.currentTime = 0;
    //   cardPlaced.play();
    //   setTimeout(() => {
    //     setPlayerCards([{ ...cards[0], visible: true }, { ...cards[1], visible: true }]);
    //     cardPlaced.currentTime = 0;
    //     cardPlaced.play();
    //       setTimeout(() => {
    //       setDealerCards([{ ...cards[2], visible: true, down: true }, { ...cards[3], visible: false }]);
    //       cardPlaced.currentTime = 0;
    //       cardPlaced.play();
    //         setTimeout(() => {
    //         setDealerCards([{ ...cards[2], visible: true, down: true }, { ...cards[3], visible: true }]);
    //         cardPlaced.currentTime = 0;
    //         cardPlaced.play();
    //       }, 400);
    //     }, 400);
    //   }, 400);
    // }, 300);
  }

  function getNFirstsCard(n) {
    const cards = deck.slice(0, n);
    setDeck(deck.slice(n));
    return cards;
  }

  function getFirstCard() {
    const card = deck[0];
    setDeck(deck.slice(1));
    return card;
  }

  function handleStand() {
  }

  function handleHit() {
    addCardToX(0,200);
  }

  useEffect(() => {
    
  }, [playerCards]);

  useEffect(() => {
    
  
}, [dealerCards]);

  //addCardToX(1) 1 will be dealer 0 will be player
  function addCardToX(dealer, timeout) {
    const randomCard = getFirstCard();
    const randomCard2 = { ...randomCard, visible: true }
    let currentScore;
    if (dealer) {
      currentScore = dealerScore;
      if (randomCard.value === 11) setDealerAceCount((prev) => prev + 1);
      setDealerCards([...dealerCards, randomCard])
    }
    else {
      currentScore = playerScore;
      if (randomCard.value === 11) setPlayerAceCount((prev) => prev + 1);
      setPlayerCards([...playerCards, randomCard])
    }
    return new Promise(resolve => {
    setTimeout(() => {
      dealer ? setDealerCards([...dealerCards, randomCard2]) : setPlayerCards([...playerCards, randomCard2]);
      cardPlaced.currentTime = 0;
      cardPlaced.play();
      resolve(currentScore + randomCard.value);
    }, timeout);
});
  }

  //dealersTurn(1) user has already lost
  async function dealersTurn() {
  
  }

  return (
		<div style={{ width: "100%" }}>
			<div
				className="info-btn-container"
				style={{ marginLeft: "94%", marginBottom: "6vh" }}
			>
				<button
					type="button"
					id="info-btn"
					onClick={() => {
						setInformationAboutGameIsPressed(true);
					}}
				>
					<span className="btn-label">
						<img
							src={infoLogo}
							alt="Game info"
							style={{ width: "30px", height: "30px" }}
						/>
					</span>
				</button>
			</div>
			<div id="blackjack-game-wrapper">
				<CoinflipModal
					showModal={informationAboutGameIsPressed}
					setModalOff={setInformationAboutGameIsPressed}
				/>
				<div
					id="blackjack-content-wrapper"
					style={{ pointerEvents: informationAboutGameIsPressed ? "none" : "" }}
			  >
          <div className={cardsDealt ? "blackjack-table-chips-wrapper" : "blackjack-table-chips-wrapper active"}>
					  <div id="blackjack-table-chips-selected">
						  <div id="blackjack-bet-amount">Amount: {betAmount}</div>
						  <div className="stack-coins">
							  {betArray.map((bet,index) => (
								  <img
									  src={coins[`coin${bet}`]}
									  alt="Bet"
									  style={{ top:`calc(50% - ${index*10}%` }}
								  />
							  ))}
						  </div>

						  <button
                id="deal-button"
                onClick={() => handleDeal() }
                      >
                        Deal
                      </button>
					  </div>

				  <div id="blackjack-table-chips">
          <div
            onClick={() => handleChipSelected(100)}
            className={
              chipSelected === 100
                ? "table-chip-wrapper active"
                : "table-chip-wrapper"
            }
          >
            <div
              className="table-chip"
              style={{ backgroundImage: `url(${coin_100})` }}
            ></div>
          </div>
          <div
            onClick={() => handleChipSelected(500)}
            className={
              chipSelected === 500
                ? "table-chip-wrapper active"
                : "table-chip-wrapper"
            }
          >
            <div
              className="table-chip"
              style={{ backgroundImage: `url(${coin_500})` }}
            ></div>
          </div>
          <div
            onClick={() => handleChipSelected(2500)}
            className={
              chipSelected === 2500
                ? "table-chip-wrapper active"
                : "table-chip-wrapper"
            }
          >
            <div
              className="table-chip"
              style={{ backgroundImage: `url(${coin_2500})` }}
            ></div>
          </div>
          <div
            onClick={() => handleChipSelected(10000)}
            className={
              chipSelected === 10000
                ? "table-chip-wrapper active"
                : "table-chip-wrapper"
            }
          >
            <div
              className="table-chip"
              style={{ backgroundImage: `url(${coin_10000})` }}
            ></div>
          </div>
          <div
            onClick={() => handleChipSelected(50000)}
            className={
              chipSelected === 50000
                ? "table-chip-wrapper active"
                : "table-chip-wrapper"
            }
          >
            <div
              className="table-chip"
              style={{ backgroundImage: `url(${coin_50000})` }}
            ></div>
          </div>
            </div></div>
          <div className={cardsDealt ? "blackjack-table-game-wrapper active" : "blackjack-table-game-wrapper"}>
            <div className="dealer-row">
              <div className="dealer-cards">
                <span className="card-score">Score: {dealerScore}</span>
                {dealerCards.map((card, index) => (
                  <img
                    src={card.down ? cards.back : cards[card.card]}
                    alt="Card"
                    className={card.visible ? "dealer-table-card active" : "dealer-table-card"}
                    key={index}
                    style={{ left:`calc(calc(50% - ${dealerCards.length*2.1}%) + ${index*5}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="buttons-mid-row">
              <button id="hit-button" onClick={()=> handleHit()} disabled={playerScore > 21}>Hit</button>
              <button id="stand-button" onClick={()=> handleStand()}>Stand</button>
            </div>
            <div className="player-row">
              <div className="player-cards">
                <span className="card-score">Score: {playerScore}</span>
                {playerCards.map((card, index) => (
                  <img
                    src={card.down ? cards.back : cards[card.card]}
                    alt="Card"
                    key={index}
                    className={card.visible ? "player-table-card active" : "player-table-card"}
                    style={{ left:`calc(calc(50% - ${playerCards.length*2.1}%) + ${index*5}%` }}
                  />
                ))}
              </div>
            </div>
            </div>
				</div>
			</div>
		</div>
	);
};

export default Blackjack;
