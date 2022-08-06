import "./RouletteModal.css";
import closeModalIcon from "../../assets/Elements/closeModal.svg";

const RouletteModal = ({ showModal, setModalOff, gameMascotImg }) => {
  return (
    <div className={`warning-modal-wrapper ${showModal ? "show" : "hide"}`}>
      <div id="overlay-popup" style={{ margin: "0 auto" }}>
        <div id="overlay-close" onClick={() => setModalOff(false)}>
          <img
            src={closeModalIcon}
            alt="Close this window"
            style={{ width: "30px", height: "30px" }}
          />
        </div>
        <div id="overlay-text">
          <span id="title">European Roulette</span>
          <span className="subtitle">Description</span>
          <span id="subtitle-text">
            European Roulette is a game where a ball is dropped onto a revolving
            wheel with numbered and colored components. A player can bet on
            where the number will fall in. European Roulette has one green zero
            instead of two (American).
          </span>
          <span className="subtitle">More Information</span>
          <span id="subtitle-text">
            In European roulette, players can choose from two main categories of
            bets, inside and outside bets. Inside bets are made on a single
            number, adjacent numbers, or small groups of numbers, while outside
            bets encompass larger groups of numbers.
            <br /><br />
            Most bets offer different odds of winning and different payouts from
            each other. <br /><br />
            These payouts and odds of winning are usually not listed on the
            board. Therefore, before entering the game, players should know the
            payouts and odds regarding each bet.
          </span>
          <span className="subtitle">Inside bets</span>
          <span className="bet-option">
            <span style={{fontWeight:"bold"}}>&#8226; Straight-Up Bet: </span>It is placed on any single number, including “0“, and directly on the number. Its payout is 35 to 1.
          </span>
          <span className="bet-option">
            <span style={{fontWeight:"bold"}}>&#8226; Split Bet: </span>It features two adjacent numbers and is placed on the line between them. The bet may include 0 and 1, 0 and 2, 0, and 3. Its payout is 17 to 1.
          </span>
          <span className="bet-option">
            <span style={{fontWeight:"bold"}}>&#8226; Street Bet: </span>It features all three numbers in a row and is placed on the line at the end of the row. There are other options for its placement as well – it can include 0, 1, 2; 0, 2, 3. Its payout is 11 to 1.
          </span>
          <span className="bet-option">
            <span style={{fontWeight:"bold"}}>&#8226; Corner Bet: </span>It features a group of four numbers and is placed at the corner where these four numbers touch. The bet can also be placed on the corner of 0, 1, 2, and 3. Its payout is 8 to 1.
          </span>
          <span className="bet-option">
            <span style={{fontWeight:"bold"}}>&#8226; Line Bet: </span>It features six numbers (or two rows of three numbers) and is placed at the end of two rows on the border between them. Its payout is 5 to 1.
          </span>
          <span className="subtitle">Outside bets</span>
          <span className="bet-option">
            <span style={{fontWeight:"bold"}}>&#8226; Column Bet: </span>It features an entire column and is placed on the ”2-1” box at the end of a column. Its payout is 2 to 1.
          </span>
          <span className="bet-option">
            <span style={{fontWeight:"bold"}}>&#8226; Dozen Bet: </span>It features a group of 12 numbers and can be placed on the ”1st 12” box (1 to 12), the ”2nd 12” box (13 to 24), or the ”3rd 12” box (25 to 36). Its payout is 2 to 1.
          </span>
          <span className="bet-option">
            <span style={{fontWeight:"bold"}}>&#8226; Bet on Color: </span>It features all of the red numbers or all of the black numbers on the layout and is placed on the ”Red” box (all red numbers) or the ”Black” box (all black numbers). Its payout is 1 to 1.
          </span>
          <span className="bet-option">
            <span style={{fontWeight:"bold"}}>&#8226; Bet on Odd/Even: </span>It features all even numbers or all odd numbers on the layout and is placed on the ”Even” box (all even numbers) or the ”Odd” box (all odd numbers). Its payout is 1 to 1.
          </span>
          <span className="bet-option">
            <span style={{fontWeight:"bold"}}>&#8226; Bet on Low/High: </span>It features all low numbers or all high numbers and is placed on the ”Low” box (numbers 1 to 18) or the ”High” box (numbers 19 to 36). Its payout is 1 to 1.
          </span>
        </div>
      </div>
      <div>
        <img src={gameMascotImg} id="mascotImg" />
      </div>
    </div>
  );
};

export default RouletteModal;
