import "./Games.css";
import rouletteCardImage from "../../../assets/Elements/rouletteCardImage.jpg";
import rouletteMascot from "../../../assets/Elements/rouletteMascot.png";
import rouletteIcon from "../../../assets/Elements/roulette3.svg";
import infologo from "../../../assets/Elements/infologo.svg";
import dicesImage from "../../../assets/Elements/dicesImage.jpg";
import casinoEntrance from "../../../assets/Elements/casinoEntrance.jpg";

import RouletteModal from "../../Modals/RouletteModal";
import LotteryModal from "../../Modals/LotteryModal";
import CoinflipModal from "../../Modals/CoinflipModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Games = () => {
  const [showRouletteModal, setRouletteModal] = useState(false);
  const [showLotteryModal, setLotteryModal] = useState(false);
  const [showCoinflipModal, setCoinflipModal] = useState(false);

  let navigate = useNavigate();
  
  function handleNavigateToGame(game) {
	navigate(`/games/${game}`);
  }

  return (
    <div className="games-container">
      <RouletteModal
        showModal={showRouletteModal}
        setModalOff={setRouletteModal}
      />
      <LotteryModal
        showModal={showLotteryModal}
        setModalOff={setLotteryModal}
      />
      <CoinflipModal
        showModal={showCoinflipModal}
        setModalOff={setCoinflipModal}
      />
      <div
        className="games-row-container"
        style={{
          pointerEvents:
            showRouletteModal || showCoinflipModal || showCoinflipModal
              ? "none"
              : "",
        }}
      >
        <div className="games-card-container">
          <div className="image-card-container">
            <img src={rouletteCardImage} style={{ objectPosition: "left", cursor:"pointer" }} onClick={() => handleNavigateToGame("roulette")}/>
          </div>
          <div className="text-card-container">
            <div className="text-card-header">
              <span
                style={{
                  marginLeft: "0.2em",
                  fontSize: "1.75em",
                  fontWeight: "bold",
                  color: "white",
				  cursor:"pointer"
                }}
				onClick={() => handleNavigateToGame("roulette")}
              >
                Roulette
              </span>
              <img
                src={infologo}
                style={{ width: "30px" }}
                onClick={() =>setRouletteModal(true)}
              />
            </div>
            <div className="text-card-body">
              Roulette is a game where a ball is dropped onto a
              revolving wheel with numbered and colored components. A player can
              bet on where the number will fall in.
            </div>
          </div>
        </div>
        <div className="games-card-container">
          <div className="image-card-container">
            <img src={casinoEntrance} style={{ objectPosition: "middle", cursor:"pointer" }} onClick={() => handleNavigateToGame("coinflip")}/>
          </div>
          <div className="text-card-container">
            <div className="text-card-header">
              <span
                style={{
                  //   marginLeft: "0.5em",
                  fontSize: "1.75em",
                  fontWeight: "bold",
                  color: "white",
				  cursor:"pointer"
                }}
				onClick={() => handleNavigateToGame("coinflip")}
              >
                CoinFlip
              </span>

              <img
                src={infologo}
                style={{ width: "30px" }}
                onClick={() => setCoinflipModal(true)}
              />
            </div>
            <div className="text-card-body">
              CoinFlip is a game where you can test your luck by betting on
              either Heads or Tails. If it lands on your selection, you win!
            </div>
          </div>
        </div>
        <div className="games-card-container">
          <div className="image-card-container">
            <img src={dicesImage} style={{ objectPosition: "right", cursor:"pointer" }} onClick={() => handleNavigateToGame("lottery")}/>
          </div>
          <div className="text-card-container">
            <div className="text-card-header">
              <span
                style={{
                  //   marginLeft: "0.5em",
                  fontSize: "1.75em",
                  fontWeight: "bold",
                  color: "white",
				  cursor:"pointer"
                }}
				onClick={() => handleNavigateToGame("lottery")}
              >
                Lottery
              </span>

              <img
                src={infologo}
                style={{ width: "30px" }}
                onClick={() => setLotteryModal(true)}
              />
            </div>
            <div className="text-card-body">
              Blakiston Lottery is a game where you can purchase tickets and win
              prizes if selected in the draw!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
