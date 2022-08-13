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

const endAudio = new Audio(clangEndSound);
const spinButtonAudio = new Audio(spinButtonSound);
const errorAudio = new Audio(errorSound);
const choosingChip = new Audio(bigChipSound);
const placingChip = new Audio(smallChipSound);
const numberRevealAudio = new Audio(numberRevealSound);
const rouletteHoverAudio = new Audio(rouletteHoverSound);

const winningSounds = [
  new Audio(moneySound1),
  new Audio(moneySound2),
  new Audio(moneySound3),
  new Audio(moneySound4),
  new Audio(moneySound5),
  new Audio(moneySound6),
];



const singleNumberFields = [
  "num_val0",
  "num_val1",
  "num_val2",
  "num_val3",
  "num_val4",
  "num_val5",
  "num_val6",
  "num_val7",
  "num_val8",
  "num_val9",
  "num_val10",
  "num_val11",
  "num_val12",
  "num_val13",
  "num_val14",
  "num_val15",
  "num_val16",
  "num_val17",
  "num_val18",
  "num_val19",
  "num_val20",
  "num_val21",
  "num_val22",
  "num_val23",
  "num_val24",
  "num_val25",
  "num_val26",
  "num_val27",
  "num_val28",
  "num_val29",
  "num_val30",
  "num_val31",
  "num_val32",
  "num_val33",
  "num_val34",
  "num_val35",
  "num_val36",
];

const doubleNumberFields = [
  "num_val0_3",
  "num_val3_6",
  "num_val6_9",
  "num_val9_12",
  "num_val12_15",
  "num_val15_18",
  "num_val18_21",
  "num_val21_24",
  "num_val24_27",
  "num_val27_30",
  "num_val30_33",
  "num_val33_36",
  "num_val0_2",
  "num_val2_5",
  "num_val5_8",
  "num_val8_11",
  "num_val11_14",
  "num_val14_17",
  "num_val17_20",
  "num_val20_23",
  "num_val23_26",
  "num_val26_29",
  "num_val29_32",
  "num_val32_35",
  "num_val0_1",
  "num_val1_4",
  "num_val4_7",
  "num_val7_10",
  "num_val10_13",
  "num_val13_16",
  "num_val16_19",
  "num_val19_22",
  "num_val22_25",
  "num_val25_28",
  "num_val28_31",
  "num_val31_34",
  "num_val1_2",
  "num_val2_3",
  "num_val4_5",
  "num_val5_6",
  "num_val7_8",
  "num_val8_9",
  "num_val10_11",
  "num_val11_12",
  "num_val13_14",
  "num_val14_15",
  "num_val16_17",
  "num_val17_18",
  "num_val19_20",
  "num_val20_21",
  "num_val22_23",
  "num_val23_24",
  "num_val25_26",
  "num_val26_27",
  "num_val28_29",
  "num_val29_30",
  "num_val31_32",
  "num_val32_33",
  "num_val34_35",
  "num_val35_36",
];

const red = [32, 19, 21, 25, 34, 27, 36, 30, 23, 5, 16, 1, 14, 9, 18, 7, 12, 3];

const timer = 9000;

const backendBetObjectInitialValue = {
  history: [],
  betsIndex: {},
  backendBoard: {
    txFee: 0,
    totalWager: 0,
    bets: [],
  },
}

const betObjectInitialValue = {
  num_val0: [],
  num_val0_3: [],
  num_val3: [],
  num_val3_6: [],
  num_val6: [],
  num_val6_9: [],
  num_val9: [],
  num_val9_12: [],
  num_val12: [],
  num_val12_15: [],
  num_val15: [],
  num_val15_18: [],
  num_val18: [],
  num_val18_21: [],
  num_val21: [],
  num_val21_24: [],
  num_val24: [],
  num_val24_27: [],
  num_val27: [],
  num_val27_30: [],
  num_val30: [],
  num_val30_33: [],
  num_val33: [],
  num_val33_36: [],
  num_val36: [],

  num_val0_2_3: [],
  num_val2_3: [],
  num_val2_3_5_6: [],
  num_val5_6: [],
  num_val5_6_8_9: [],
  num_val8_9: [],
  num_val8_9_11_12: [],
  num_val11_12: [],
  num_val11_12_14_15: [],
  num_val14_15: [],
  num_val14_15_17_18: [],
  num_val17_18: [],
  num_val17_18_20_21: [],
  num_val20_21: [],
  num_val20_21_23_24: [],
  num_val23_24: [],
  num_val23_24_26_27: [],
  num_val26_27: [],
  num_val26_27_29_30: [],
  num_val29_30: [],
  num_val29_30_32_33: [],
  num_val32_33: [],
  num_val32_33_35_36: [],
  num_val35_36: [],

  num_val0_2: [],
  num_val2: [],
  num_val2_5: [],
  num_val5: [],
  num_val5_8: [],
  num_val8: [],
  num_val8_11: [],
  num_val11: [],
  num_val11_14: [],
  num_val14: [],
  num_val14_17: [],
  num_val17: [],
  num_val17_20: [],
  num_val20: [],
  num_val20_23: [],
  num_val23: [],
  num_val23_26: [],
  num_val26: [],
  num_val26_29: [],
  num_val29: [],
  num_val29_32: [],
  num_val32: [],
  num_val32_35: [],
  num_val35: [],

  num_val0_1_2: [],
  num_val1_2: [],
  num_val1_2_4_5: [],
  num_val4_5: [],
  num_val4_5_7_8: [],
  num_val7_8: [],
  num_val7_8_10_11: [],
  num_val10_11: [],
  num_val10_11_13_14: [],
  num_val13_14: [],
  num_val13_14_16_17: [],
  num_val16_17: [],
  num_val16_17_19_20: [],
  num_val19_20: [],
  num_val19_20_22_23: [],
  num_val22_23: [],
  num_val22_23_25_26: [],
  num_val25_26: [],
  num_val25_26_28_29: [],
  num_val28_29: [],
  num_val28_29_31_32: [],
  num_val31_32: [],
  num_val31_32_34_35: [],
  num_val34_35: [],

  num_val0_1: [],
  num_val1: [],
  num_val1_4: [],
  num_val4: [],
  num_val4_7: [],
  num_val7: [],
  num_val7_10: [],
  num_val10: [],
  num_val10_13: [],
  num_val13: [],
  num_val13_16: [],
  num_val16: [],
  num_val16_19: [],
  num_val19: [],
  num_val19_22: [],
  num_val22: [],
  num_val22_25: [],
  num_val25: [],
  num_val25_28: [],
  num_val28: [],
  num_val28_31: [],
  num_val31: [],
  num_val31_34: [],
  num_val34: [],

  num_val1st: [],
  num_val2nd: [],
  num_val3rd: [],
  num_val_first_12: [],
  num_val_second_12: [],
  num_val_third_12: [],
  num_val_first_18: [],
  num_val_second_18: [],
  num_val_red: [],
  num_val_black: [],
  num_val_even: [],
  num_val_odd: [],
};
function fromNumberToColor(number) {
  if (number === 0) {
    return "green";
  } else if (red.indexOf(number) !== -1) {
    return "red";
  } else {
    return "black";
  }
}

function fromChipValueToColor(number) {
  switch (number) {
    case 100:
      return "purple";
    case 500:
      return "green";
    case 2500:
      return "pink";
    case 10000:
      return "blue";
    case 50000:
      return "black";
    default:
      return "";
  }
}

function getMultiplier(spot) {
  // 4 connected numbers
  if (spot.length == 4) {
    return 8
    // 3 connected numbers
  } else if (spot.length == 3) {
    return 12
    // 2 connected numbers
  } else if (spot.length == 2) {
    return 18
  } else if (spot.length == 1) {
    if (spot[0] == "red" || spot[0] == "black" || spot[0] == "even" || spot[0] == "odd" || spot[0] == "first18" || spot[0] == "second18") {
      return 1
    } else if (spot[0] == "1st" || spot[0] == "2nd" || spot[0] == "3rd" || spot[0] == "first12" || spot[0] == "second12" || spot[0] == "third12") {
      return 2
    } else {
      // exact number
      return 35
    }
  }
}

function getSpotNumber(spot) {
  switch (spot) {
    case "red":
      return 0
    case "black":
      return 1
    case "even":
      return 0
    case "odd":
      return 1
    case "first18":
      return 10
    case "second18":
      return 28
    case "1st":
      return 1
    case "2nd":
      return 2
    case "3rd":
      return 3
    case "first12":
      return 6
    case "second12":
      return 18
    case "third12":
      return 30
    default:
      return Number(spot)
  }
}

function getSubgame(spot) {
  // remove any '_' characters
  const s = spot.replace('_', '')
  if (spot == "red" || spot == "black") {
    return 0
  } else if (spot == "even" || spot == "odd") {
    return 1
  } else if (spot == "first18" || spot == "second18") {
    return 2
  } else if (spot == "1st" || spot == "2nd" || spot == "3rd") {
    return 3
  } else if (spot == "first12" || spot == "second12" || spot == "third12") {
    return 4
  } else {
    return 5
  }
}

function checkIfZero(number) {
  if (number != 0) {
    return "active";
  } else {
    return "";
  }
}

function centerOrBetween(index) {
  if (index % 2 === 0) {
    return "center";
  } else {
    return "between";
  }
}

const arrayWithNumVals = [
  "num_val0",
  "num_val0_3",
  "num_val3",
  "num_val3_6",
  "num_val6",
  "num_val6_9",
  "num_val9",
  "num_val9_12",
  "num_val12",
  "num_val12_15",
  "num_val15",
  "num_val15_18",
  "num_val18",
  "num_val18_21",
  "num_val21",
  "num_val21_24",
  "num_val24",
  "num_val24_27",
  "num_val27",
  "num_val27_30",
  "num_val30",
  "num_val30_33",
  "num_val33",
  "num_val33_36",
  "num_val36",
];
const arrayWithNumVals1 = [
  "num_val0",
  "num_val0_2_3",
  "num_val2_3",
  "num_val2_3_5_6",
  "num_val5_6",
  "num_val5_6_8_9",
  "num_val8_9",
  "num_val8_9_11_12",
  "num_val11_12",
  "num_val11_12_14_15",
  "num_val14_15",
  "num_val14_15_17_18",
  "num_val17_18",
  "num_val17_18_20_21",
  "num_val20_21",
  "num_val20_21_23_24",
  "num_val23_24",
  "num_val23_24_26_27",
  "num_val26_27",
  "num_val26_27_29_30",
  "num_val29_30",
  "num_val29_30_32_33",
  "num_val32_33",
  "num_val32_33_35_36",
  "num_val35_36",
];
const arrayWithNumVals2 = [
  "num_val0",
  "num_val0_2",
  "num_val2",
  "num_val2_5",
  "num_val5",
  "num_val5_8",
  "num_val8",
  "num_val8_11",
  "num_val11",
  "num_val11_14",
  "num_val14",
  "num_val14_17",
  "num_val17",
  "num_val17_20",
  "num_val20",
  "num_val20_23",
  "num_val23",
  "num_val23_26",
  "num_val26",
  "num_val26_29",
  "num_val29",
  "num_val29_32",
  "num_val32",
  "num_val32_35",
  "num_val35",
];
const arrayWithNumVals3 = [
  "num_val0",
  "num_val0_1_2",
  "num_val1_2",
  "num_val1_2_4_5",
  "num_val4_5",
  "num_val4_5_7_8",
  "num_val7_8",
  "num_val7_8_10_11",
  "num_val10_11",
  "num_val10_11_13_14",
  "num_val13_14",
  "num_val13_14_16_17",
  "num_val16_17",
  "num_val16_17_19_20",
  "num_val19_20",
  "num_val19_20_22_23",
  "num_val22_23",
  "num_val22_23_25_26",
  "num_val25_26",
  "num_val25_26_28_29",
  "num_val28_29",
  "num_val28_29_31_32",
  "num_val31_32",
  "num_val31_32_34_35",
  "num_val34_35",
];

const arrayWithNumVals4 = [
  "num_val0",
  "num_val0_1",
  "num_val1",
  "num_val1_4",
  "num_val4",
  "num_val4_7",
  "num_val7",
  "num_val7_10",
  "num_val10",
  "num_val10_13",
  "num_val13",
  "num_val13_16",
  "num_val16",
  "num_val16_19",
  "num_val19",
  "num_val19_22",
  "num_val22",
  "num_val22_25",
  "num_val25",
  "num_val25_28",
  "num_val28",
  "num_val28_31",
  "num_val31",
  "num_val31_34",
  "num_val34",
];

export { rouletteHoverAudio, numberRevealAudio, choosingChip, placingChip, spinButtonAudio, errorAudio, singleNumberFields, doubleNumberFields, fromNumberToColor, red, timer, betObjectInitialValue, backendBetObjectInitialValue, endAudio, winningSounds, arrayWithNumVals, arrayWithNumVals1, arrayWithNumVals2, arrayWithNumVals3, arrayWithNumVals4, fromChipValueToColor, getSubgame, getSpotNumber, getMultiplier, checkIfZero, centerOrBetween };
