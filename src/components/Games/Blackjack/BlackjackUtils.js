import moneySound1 from "../../../assets/Sounds/moneySound1.mp3";
import moneySound2 from "../../../assets/Sounds/moneySound2.mp3";
import moneySound3 from "../../../assets/Sounds/moneySound3.mp3";
import moneySound4 from "../../../assets/Sounds/moneySound4.mp3";
import moneySound5 from "../../../assets/Sounds/moneySound5.mp3";
import moneySound6 from "../../../assets/Sounds/moneySound6.mp3";
import clangEndSound from "../../../assets/Sounds/clangEnd.mp3";
import startSound from "../../../assets/Sounds/start.mp3";
import spinButtonSound from "../../../assets/Sounds/spinButtonSound.mp3";
import errorSound from "../../../assets/Sounds/errorSound.wav";
import bigChipSound from "../../../assets/Sounds/bigChipSound.mp3";
import smallChipSound from "../../../assets/Sounds/smallChipSound.mp3";
import numberRevealSound from "../../../assets/Sounds/numberRevealSound.mp3";
import rouletteHoverSound from "../../../assets/Sounds/rouletteHoverSound.mp3";
import cardPlacedSound from "../../../assets/Sounds/cardPlaced.mp3";
import cardMixingSound from "../../../assets/Sounds/cardMixing.mp3";


const errorAudio = new Audio(errorSound);
const choosingChip = new Audio(bigChipSound);
const placingChip = new Audio(smallChipSound);
const cardPlaced = new Audio(cardPlacedSound);
const cardMixing = new Audio(cardMixingSound);

const winningSounds = [
  new Audio(moneySound1),
  new Audio(moneySound2),
  new Audio(moneySound3),
  new Audio(moneySound4),
  new Audio(moneySound5),
  new Audio(moneySound6),
];

const fulldeck = [
  { card: "clubsA", value: 11, visible: false, down: false },
  { card: "clubs2", value: 2, visible: false, down: false },
  { card: "clubs3", value: 3, visible: false, down: false },
  { card: "clubs4", value: 4, visible: false, down: false },
  { card: "clubs5", value: 5, visible: false, down: false },
  { card: "clubs6", value: 6, visible: false, down: false },
  { card: "clubs7", value: 7, visible: false, down: false },
  { card: "clubs8", value: 8, visible: false, down: false },
  { card: "clubs9", value: 9, visible: false, down: false },
  { card: "clubs10", value: 10, visible: false, down: false },
  { card: "clubsJ", value: 10, visible: false, down: false },
  { card: "clubsQ", value: 10, visible: false, down: false },
  { card: "clubsK", value: 10, visible: false, down: false },
  { card: "diamondsA", value: 11, visible: false, down: false },
  { card: "diamonds2", value: 2, visible: false, down: false },
  { card: "diamonds3", value: 3, visible: false, down: false },
  { card: "diamonds4", value: 4, visible: false, down: false },
  { card: "diamonds5", value: 5, visible: false, down: false },
  { card: "diamonds6", value: 6, visible: false, down: false },
  { card: "diamonds7", value: 7, visible: false, down: false },
  { card: "diamonds8", value: 8, visible: false, down: false },
  { card: "diamonds9", value: 9, visible: false, down: false },
  { card: "diamonds10", value: 10, visible: false, down: false },
  { card: "diamondsJ", value: 10, visible: false, down: false },
  { card: "diamondsQ", value: 10, visible: false, down: false },
  { card: "diamondsK", value: 10, visible: false, down: false },
  { card: "heartsA", value: 11, visible: false, down: false },
  { card: "hearts2", value: 2, visible: false, down: false },
  { card: "hearts3", value: 3, visible: false, down: false },
  { card: "hearts4", value: 4, visible: false, down: false },
  { card: "hearts5", value: 5, visible: false, down: false },
  { card: "hearts6", value: 6, visible: false, down: false },
  { card: "hearts7", value: 7, visible: false, down: false },
  { card: "hearts8", value: 8, visible: false, down: false },
  { card: "hearts9", value: 9, visible: false, down: false },
  { card: "hearts10", value: 10, visible: false, down: false },
  { card: "heartsJ", value: 10, visible: false, down: false },
  { card: "heartsQ", value: 10, visible: false, down: false },
  { card: "heartsK", value: 10, visible: false, down: false },
  { card: "spadesA", value: 11, visible: false, down: false },
  { card: "spades2", value: 2, visible: false, down: false },
  { card: "spades3", value: 3, visible: false, down: false },
  { card: "spades4", value: 4, visible: false, down: false },
  { card: "spades5", value: 5, visible: false, down: false },
  { card: "spades6", value: 6, visible: false, down: false },
  { card: "spades7", value: 7, visible: false, down: false },
  { card: "spades8", value: 8, visible: false, down: false },
  { card: "spades9", value: 9, visible: false, down: false },
  { card: "spades10", value: 10, visible: false, down: false },
  { card: "spadesJ", value: 10, visible: false, down: false },
  { card: "spadesQ", value: 10, visible: false, down: false },
  { card: "spadesK", value: 10, visible: false, down: false },
];

function getRandomDeck() {
  const fulldeckAux = [...fulldeck];
  let deck = [];
  for (let i = 0; i < 52; i++) {
    let randomCard = Math.floor(Math.random() * fulldeckAux.length);
    deck.push(fulldeckAux[randomCard]);
    fulldeckAux.splice(randomCard, 1);
  }
  return deck;
}






export { choosingChip, placingChip, errorAudio,cardPlaced, cardMixing, getRandomDeck };
