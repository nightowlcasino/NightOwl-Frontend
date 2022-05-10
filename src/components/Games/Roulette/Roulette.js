import React, { useRef, useState } from "react";
import "./Roulette.css";
import outterWheel1 from "../../../assets/Elements/behind2.png";

import coin_100 from "../../../assets/Elements/coin_100.png";
import coin_500 from "../../../assets/Elements/coin_500.png";
import coin_2k5 from "../../../assets/Elements/coin_2k5.png";
import coin_10k from "../../../assets/Elements/coin_10k.png";
import coin_50k from "../../../assets/Elements/coin_50k.png";

const Roulette = () => {
  var red = [32, 19, 21, 25, 34, 27, 36, 30, 23, 5, 16, 1, 14, 9, 18, 7, 12, 3];

  var maskDefault = "Place Your Bets";
  var overlay_default = "Alright, thats enough";
  var timer = 9000;
  
  const [overlay_string, set_overlay_string] = useState(overlay_default);
  const [maskText, setMaskText] = useState(maskDefault);
  const [spinAvailable, setSpinAvailable] = useState(true);
  const [revealData, setRevealData] = useState(false);
  const [resultNumber, setResultNumber] = useState(null);
  const [resultColor, setResultColor] = useState(null);
  const [randomNumber, setRandomNumber] = useState(null);
  const [firstSpin, setFirstSpin] = useState(true);
  const [chipSelected, setChipSelected] = useState(100);
  const [totalBet, setTotalBet] = useState(0);
  const [bets_end, bets_end_toggle] = useState(false);

  const [table_filter_value, table_filter_set] = useState("");

  const [filter_first_12, filter_first_12_set] = useState(false);
  const [filter_first_12_value, filter_first_12_set_value] = useState(0);
  const [filter_second_12, filter_second_12_set] = useState(false);
  const [filter_second_12_value, filter_second_12_set_value] = useState(0);
  const [filter_third_12, filter_third_12_set] = useState(false);
  const [filter_third_12_value, filter_third_12_set_value] = useState(0);

  const [filter_first_18, filter_first_18_set] = useState(false);
  const [filter_first_18_value, filter_first_18_set_value] = useState(0);
  const [filter_second_18, filter_second_18_set] = useState(false);
  const [filter_second_18_value, filter_second_18_set_value] = useState(0);

  const [filter_even, filter_even_set] = useState(false);
  const [filter_even_value, filter_even_set_value] = useState(0);
  const [filter_odd, filter_odd_set] = useState(false);
  const [filter_odd_value, filter_odd_set_value] = useState(0);

  const [filter_red, filter_red_set] = useState(false);
  const [filter_red_value, filter_red_set_value] = useState(0);
  const [filter_black, filter_black_set] = useState(false);
  const [filter_black_value, filter_black_set_value] = useState(0);

  const [filter_first_row, filter_first_row_set] = useState(false);
  const [filter_first_row_value, filter_first_row_set_value] = useState(0);
  const [filter_second_row, filter_second_row_set] = useState(false);
  const [filter_second_row_value, filter_second_row_set_value] = useState(0);
  const [filter_third_row, filter_third_row_set] = useState(false);
  const [filter_third_row_value, filter_third_row_set_value] = useState(0);

  const [betObject, setBetObject] = useState({
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
  });
  var arrayWithNumVals = [
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
  var arrayWithNumVals1 = [
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
  var arrayWithNumVals2 = [
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
  var arrayWithNumVals3 = [
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

  var arrayWithNumVals4 = [
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

  const innerRef = useRef();

  function addBetToObject(e) {
    var numbers = e.target.getAttribute("num-val");
    let currentArrayCopy = betObject.num_val3.slice();
    currentArrayCopy.push(chipSelected);
    setBetObject({
      ...betObject,
      [`num_val${numbers}`]: currentArrayCopy, //betObject[`num_val${numbers}`] + chipSelected,
    });
    setTotalBet(totalBet + chipSelected);
  }
  function spinTheWheel() {
    innerRef.current.setAttribute("data-spinto", "");
    innerRef.current.classList.remove("stop-spin");
    innerRef.current.classList.remove("default-spin");
    if (!firstSpin) {
      setRevealData(false);
    }
    var randomNumber = Math.floor(Math.random() * 36);
    var color = null;
    setTimeout(() => {
      innerRef.current.setAttribute("data-spinto", randomNumber);
    }, 50);

    setTimeout(() => {
      bets_end_toggle(true);
    }, 20);

    setSpinAvailable(false);

    //$(".placeholder").remove();

    setMaskText("No more bets");

    set_overlay_string(overlay_default);

    setTimeout(() => {
      setMaskText(maskDefault);
    }, timer + 540);

    // remove the disabled attribute when the ball has stopped
    setTimeout(() => {
      setSpinAvailable(true);

      if (randomNumber === 0) {
        color = "green";
      } else if (red.indexOf(randomNumber) !== -1) {
        color = "red";
      } else {
        color = "black";
      }

      setTimeout(() => {
        set_overlay_string("WON ? LOST");
      }, 400);

      setTimeout(() => {
        bets_end_toggle(false);
      }, 5000);

      setResultNumber(randomNumber);
      setResultColor(color);
      setRevealData(true);
      setRandomNumber(randomNumber);
      if (firstSpin) setFirstSpin(false);
    }, timer + 50);
    setTimeout(() => {
      innerRef.current.classList.add("stop-spin");
    }, timer * 0.7);
  }

  function fromNumberToColor(number) {
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

  function check_if_zero(number)
  {
    if(number != 0)
    {
      return "active"
    }
    else
    {
      return "";
    }
  }

  function filter_first_12_click()
  {
    filter_first_12_set(true);
    filter_first_12_set_value(chipSelected);
    setTotalBet(totalBet + chipSelected);
  }

  function filter_second_12_click()
  {
    filter_second_12_set(true);
    filter_second_12_set_value(chipSelected);
    setTotalBet(totalBet + chipSelected);
  }

  function filter_third_12_click()
  {
    filter_third_12_set(true);
    filter_third_12_set_value(chipSelected);
    setTotalBet(totalBet + chipSelected);
  }

  function filter_first_18_click()
  {
    filter_first_18_set(true);
    filter_first_18_set_value(chipSelected);
    setTotalBet(totalBet + chipSelected);
  }

  function filter_second_18_click()
  {
    filter_second_18_set(true);
    filter_second_18_set_value(chipSelected);
    setTotalBet(totalBet + chipSelected);
  }

  function filter_even_click()
  {
    filter_even_set(true);
    filter_even_set_value(chipSelected);
    setTotalBet(totalBet + chipSelected);
  }

  function filter_odd_click()
  {
    filter_odd_set(true);
    filter_odd_set_value(chipSelected);
    setTotalBet(totalBet + chipSelected);
  }

  function filter_red_click()
  {
    filter_red_set(true);
    filter_red_set_value(chipSelected);
    setTotalBet(totalBet + chipSelected);
  }

  function filter_black_click()
  {
    filter_black_set(true);
    filter_black_set_value(chipSelected);
    setTotalBet(totalBet + chipSelected);
  }

  function filter_first_row_click()
  {
    filter_first_row_set(true);
    filter_first_row_set_value(chipSelected);
    setTotalBet(totalBet + chipSelected);
  }

  function filter_second_row_click()
  {
    filter_second_row_set(true);
    filter_second_row_set_value(chipSelected);
    setTotalBet(totalBet + chipSelected);
  }

  function filter_third_row_click()
  {
    filter_third_row_set(true);
    filter_third_row_set_value(chipSelected);
    setTotalBet(totalBet + chipSelected);
  }

  function centerOrBetween(index) {
    if (index % 2 === 0) {
      return "center";
    } else {
      return "between";
    }
  }

  return (
    <div className={bets_end ? "roulette-wrapper" : "roulette-wrapper bets-end"}>
      <div className="roulette-wheel-content-wrapper">
        <div className="roulette-wheel-content">
          <div className="plate" id="plate">
            <img
              src={outterWheel1}
              className="behindlol"
              alt="outter-roulette-wheel"
            />
            <ul id="fuckinginner" className="inner default-spin" ref={innerRef}>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="32" />
                  <span className="pit">32</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="15" />
                  <span className="pit">15</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="19" />
                  <span className="pit">19</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="4" />
                  <span className="pit">4</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="21" />
                  <span className="pit">21</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="2" />
                  <span className="pit">2</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="25" />
                  <span className="pit">25</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="17" />
                  <span className="pit">17</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="34" />
                  <span className="pit">34</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="6" />
                  <span className="pit">6</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="27" />
                  <span className="pit">27</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="13" />
                  <span className="pit">13</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="36" />
                  <span className="pit">36</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="11" />
                  <span className="pit">11</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="30" />
                  <span className="pit">30</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="8" />
                  <span className="pit">8</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="23" />
                  <span className="pit">23</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="10" />
                  <span className="pit">10</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="5" />
                  <span className="pit">5</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="24" />
                  <span className="pit">24</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="16" />
                  <span className="pit">16</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="33" />
                  <span className="pit">33</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="1" />
                  <span className="pit">1</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="20" />
                  <span className="pit">20</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="14" />
                  <span className="pit">14</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="31" />
                  <span className="pit">31</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="9" />
                  <span className="pit">9</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="22" />
                  <span className="pit">22</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="18" />
                  <span className="pit">18</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="29" />
                  <span className="pit">29</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="7" />
                  <span className="pit">7</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="28" />
                  <span className="pit">28</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="12" />
                  <span className="pit">12</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="35" />
                  <span className="pit">35</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="3" />
                  <span className="pit">3</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="26" />
                  <span className="pit">26</span>
                </label>
              </li>
              <li className="number">
                <label>
                  <input type="radio" name="pit" value="0" />
                  <span className="pit">0</span>
                </label>
              </li>
            </ul>

            <div className={revealData ? "data reveal" : "data"}>
              <div className="data-inner">
                <div className="mask">{maskText}</div>
                <div
                  className="result"
                  style={{ backgroundColor: resultColor }}
                >
                  <div className="result-number">{resultNumber}</div>
                  <div className="result-color">{resultColor}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="roulette-table-content-wrapper">
        <div id="before-table">
          <div id="table-total-bet">
            Total bet <span>{totalBet} OWL</span>
          </div>
          <div id="table-history">
            <div className="history-number red">1</div>
            <div className="history-spacer"></div>
            <div className="history-number black">2</div>
            <div className="history-spacer"></div>
            <div className="history-number red">3</div>
            <div className="history-spacer"></div>
            <div className="history-number black">4</div>
            <div className="history-spacer"></div>
            <div className="history-number red">5</div>
            <div className="history-spacer"></div>
            <div className="history-number black">6</div>
            <div className="history-spacer"></div>
            <div className="history-number red">7</div>
            <div className="history-spacer"></div>
            <div className="history-number black">8</div>
            <div className="history-spacer"></div>
            <div className="history-number red">9</div>
            <div className="history-spacer"></div>
            <div className="history-number black">10</div>
            <div className="history-spacer"></div>
            <div className="history-number red">9</div>
            <div className="history-spacer"></div>
            <div className="history-number black">10</div>
            <div className="history-spacer"></div>
            <div className="history-number red">9</div>
            <div className="history-spacer"></div>
            <div className="history-number black">10</div>
            <div className="history-spacer"></div>
            <div className="history-number red">9</div>
            <div className="history-spacer"></div>
            <div className="history-number black">10</div>
            <div className="history-spacer"></div>
            <div className="history-number red">9</div>
            <div className="history-spacer"></div>
            <div className="history-number black">10</div>
            <div className="history-spacer"></div>
          </div>
        </div>
        <div className="roulette-table-content" style={{ color: "white" }}>
          <div id="table-wrapper">
            <div id="top-row">
              <div id="numbers-table-wrapper">
                <div id="left-table">
                  <div className="table-value">
                    <div>0</div>
                  </div>
                </div>
                <div className={table_filter_value} id="table-numbers">
                  <div id="first-row" className="table-row">
                    <div id="number-3" className="table-value width-1-12th red">
                      3
                    </div>
                    <div id="number-6" className="table-value width-1-12th black">
                      6
                    </div>
                    <div id="number-9" className="table-value width-1-12th red">
                      9
                    </div>
                    <div id="number-12" className="table-value width-1-12th red">
                      12
                    </div>
                    <div id="number-15" className="table-value width-1-12th black">
                      15
                    </div>
                    <div id="number-18" className="table-value width-1-12th red">
                      18
                    </div>
                    <div id="number-21" className="table-value width-1-12th red">
                      21
                    </div>
                    <div id="number-24" className="table-value width-1-12th black">
                      24
                    </div>
                    <div id="number-27" className="table-value width-1-12th red">
                      27
                    </div>
                    <div id="number-30" className="table-value width-1-12th red">
                      30
                    </div>
                    <div id="number-33" className="table-value width-1-12th black">
                      33
                    </div>
                    <div id="number-36" className="table-value width-1-12th red">
                      36
                    </div>
                  </div>
                  <div id="second-row" className="table-row">
                    <div id="number-2" className="table-value width-1-12th black">
                      2
                    </div>
                    <div id="number-5" className="table-value width-1-12th red">
                      5
                    </div>
                    <div id="number-8" className="table-value width-1-12th black">
                      8
                    </div>
                    <div id="number-11" className="table-value width-1-12th black">
                      11
                    </div>
                    <div id="number-14" className="table-value width-1-12th red">
                      14
                    </div>
                    <div id="number-17" className="table-value width-1-12th black">
                      17
                    </div>
                    <div id="number-20" className="table-value width-1-12th black">
                      20
                    </div>
                    <div id="number-23" className="table-value width-1-12th red">
                      23
                    </div>
                    <div id="number-26" className="table-value width-1-12th black">
                      26
                    </div>
                    <div id="number-29" className="table-value width-1-12th black">
                      29
                    </div>
                    <div id="number-32" className="table-value width-1-12th red">
                      32
                    </div>
                    <div id="number-35" className="table-value width-1-12th black">
                      35
                    </div>
                  </div>
                  <div id="third-row" className="table-row">
                    <div id="number-1" className="table-value width-1-12th red">
                      1
                    </div>
                    <div id="number-4" className="table-value width-1-12th black">
                      4
                    </div>
                    <div id="number-7" className="table-value width-1-12th red">
                      7
                    </div>
                    <div id="number-10" className="table-value width-1-12th black">
                      10
                    </div>
                    <div id="number-13" className="table-value width-1-12th black">
                      13
                    </div>
                    <div id="number-16" className="table-value width-1-12th red">
                      16
                    </div>
                    <div id="number-19" className="table-value width-1-12th red">
                      19
                    </div>
                    <div id="number-22" className="table-value width-1-12th black">
                      22
                    </div>
                    <div id="number-25" className="table-value width-1-12th red">
                      25
                    </div>
                    <div id="number-28" className="table-value width-1-12th black">
                      28
                    </div>
                    <div id="number-31" className="table-value width-1-12th black">
                      31
                    </div>
                    <div id="number-34" className="table-value width-1-12th red">
                      34
                    </div>
                  </div>
                </div>
                <div id="numbers-overlay">
                  <div className="row spacer"></div>
                  <div className="row number-center">
                    <div className="inner-row spacer"></div>
                    {arrayWithNumVals.map((val, index) => (
                      <div
                        className={
                          betObject[val].length > 0
                            ? `inner-row number-${centerOrBetween(
                              index
                            )} ${check_if_zero(val.split("l")[1])} ${fromNumberToColor(
                                betObject[val][betObject[val].length - 1]
                              )} two-d`
                            : "inner-row number-center"
                        }
                        num-val={val.split("l")[1]}
                        onClick={(e) => addBetToObject(e)}
                      ></div>
                    ))}
                    <div className="inner-row spacer"></div>
                  </div>
                  <div className="row number-between">
                    <div className="inner-row spacer"></div>
                    {arrayWithNumVals1.map((val, index) => (
                      <div
                        className={
                          betObject[val].length > 0
                            ? `inner-row number-${centerOrBetween(
                                index
                              )} ${check_if_zero(val.split("l")[1])} ${fromNumberToColor(
                                betObject[val][betObject[val].length - 1]
                              )} two-d`
                            : `inner-row number-${centerOrBetween(index)}`
                        }
                        num-val={val.split("l")[1]}
                        onClick={(e) => addBetToObject(e)}
                      ></div>
                    ))}
                    <div className="inner-row spacer"></div>
                  </div>
                  <div className="row number-center">
                    <div className="inner-row spacer"></div>
                    {arrayWithNumVals2.map((val, index) => (
                      <div
                        className={
                          betObject[val].length > 0
                            ? `inner-row number-${centerOrBetween(
                                index
                              )} active ${fromNumberToColor(
                                betObject[val][betObject[val].length - 1]
                              )} two-d`
                            : `inner-row number-${centerOrBetween(index)}`
                        }
                        num-val={val.split("l")[1]}
                        onClick={(e) => addBetToObject(e)}
                      ></div>
                    ))}
                    <div className="inner-row spacer"></div>
                  </div>
                  <div className="row number-between">
                    <div className="inner-row spacer"></div>
                    {arrayWithNumVals3.map((val, index) => (
                      <div
                        className={
                          betObject[val].length > 0
                            ? `inner-row number-${centerOrBetween(
                                index
                              )} ${check_if_zero(val.split("l")[1])} ${fromNumberToColor(
                                betObject[val][betObject[val].length - 1]
                              )} two-d`
                            : `inner-row number-${centerOrBetween(index)}`
                        }
                        num-val={val.split("l")[1]}
                        onClick={(e) => addBetToObject(e)}
                      ></div>
                    ))}
                    <div className="inner-row spacer"></div>
                  </div>
                  <div className="row number-center">
                    <div className="inner-row spacer"></div>
                    {arrayWithNumVals4.map((val, index) => (
                      <div
                        className={
                          betObject[val].length > 0
                            ? `inner-row number-${centerOrBetween(
                                index
                              )} ${check_if_zero(val.split("l")[1])} ${fromNumberToColor(
                                betObject[val][betObject[val].length - 1]
                              )} two-d`
                            : `inner-row number-${centerOrBetween(index)}`
                        }
                        num-val={val.split("l")[1]}
                        onClick={(e) => addBetToObject(e)}
                      ></div>
                    ))}
                    <div className="inner-row spacer"></div>
                  </div>
                  <div className="row spacer"></div>
                </div>
              </div>
              <div id="right-table">
                <div onMouseEnter={() => table_filter_set("filter-applied first-row")} onMouseLeave={() => table_filter_set("")} onClick={() => filter_first_row_click()} className={filter_first_row ? `table-value table-filter width-1-3rd chip-${fromNumberToColor(filter_first_row_value)} active` : "table-value table-filter width-1-3rd"}><div>1st</div><div className="filter-overlay"><div className="filter-chip"></div></div></div>
                <div onMouseEnter={() => table_filter_set("filter-applied second-row")} onMouseLeave={() => table_filter_set("")} onClick={() => filter_second_row_click()} className={filter_second_row ? `table-value table-filter width-1-3rd chip-${fromNumberToColor(filter_second_row_value)} active` : "table-value table-filter width-1-3rd"}><div>2nd</div><div className="filter-overlay"><div className="filter-chip"></div></div></div>
                <div onMouseEnter={() => table_filter_set("filter-applied third-row")} onMouseLeave={() => table_filter_set("")} onClick={() => filter_third_row_click()} className={filter_third_row ? `table-value table-filter width-1-3rd chip-${fromNumberToColor(filter_third_row_value)} active` : "table-value table-filter width-1-3rd"}><div>3rd</div><div className="filter-overlay"><div className="filter-chip"></div></div></div>
              </div>
            </div>
            <div id="bottom-row">
              <div className="bottom-table-spacer">
                <div className="table-value"></div>
              </div>
              <div id="bottom-center-table">
                <div id="center-top-row" className="table-row">
                  <div onMouseEnter={() => table_filter_set("filter-applied first-12")} onMouseLeave={() => table_filter_set("")} onClick={() => filter_first_12_click()} className={filter_first_12 ? `table-value table-filter width-1-3rd chip-${fromNumberToColor(filter_first_12_value)} active` : "table-value table-filter width-1-3rd"}><div>1st 12</div><div className="filter-overlay"><div className="filter-chip"></div></div></div>
                  <div onMouseEnter={() => table_filter_set("filter-applied second-12")} onMouseLeave={() => table_filter_set("")} onClick={() => filter_second_12_click()} className={filter_second_12 ? `table-value table-filter width-1-3rd chip-${fromNumberToColor(filter_second_12_value)} active` : "table-value table-filter width-1-3rd"}><div>2nd 12</div><div className="filter-overlay"><div className="filter-chip"></div></div></div>
                  <div onMouseEnter={() => table_filter_set("filter-applied third-12")} onMouseLeave={() => table_filter_set("")} onClick={() => filter_third_12_click()} className={filter_third_12 ? `table-value table-filter width-1-3rd chip-${fromNumberToColor(filter_third_12_value)} active` : "table-value table-filter width-1-3rd"}><div>3rd 12</div><div className="filter-overlay"><div className="filter-chip"></div></div></div>
                </div>
                <div id="center-bottom-row" className="table-row">
                  <div onMouseEnter={() => table_filter_set("filter-applied first-18")} onMouseLeave={() => table_filter_set("")} onClick={() => filter_first_18_click()} className={filter_first_18 ? `table-value table-filter width-1-6th chip-${fromNumberToColor(filter_first_18_value)} active` : "table-value table-filter width-1-6th"}><div>1st 18</div><div className="filter-overlay"><div className="filter-chip"></div></div></div>
                  <div onMouseEnter={() => table_filter_set("filter-applied even")} onMouseLeave={() => table_filter_set("")} onClick={() => filter_even_click()} className={filter_even ? `table-value table-filter width-1-6th chip-${fromNumberToColor(filter_even_value)} active` : "table-value table-filter width-1-6th"}><div>Even</div><div className="filter-overlay"><div className="filter-chip"></div></div></div>
                  <div onMouseEnter={() => table_filter_set("filter-applied filter-color-red")} onMouseLeave={() => table_filter_set("")} onClick={() => filter_red_click()} className={filter_red ? `table-value table-filter width-1-6th chip-${fromNumberToColor(filter_red_value)} active romboid` : "table-value table-filter width-1-6th romboid"}><div className="red"></div><div className="filter-overlay"><div className="filter-chip"></div></div></div>
                  <div onMouseEnter={() => table_filter_set("filter-applied filter-color-black")} onMouseLeave={() => table_filter_set("")} onClick={() => filter_black_click()} className={filter_black ? `table-value table-filter width-1-6th chip-${fromNumberToColor(filter_black_value)} active romboid` : "table-value table-filter width-1-6th romboid"}><div className="black"></div><div className="filter-overlay"><div className="filter-chip"></div></div></div>
                  <div onMouseEnter={() => table_filter_set("filter-applied odd")} onMouseLeave={() => table_filter_set("")} onClick={() => filter_odd_click()} className={filter_odd ? `table-value table-filter width-1-6th chip-${fromNumberToColor(filter_odd_value)} active` : "table-value table-filter width-1-6th"}><div>Odd</div><div className="filter-overlay"><div className="filter-chip"></div></div></div>
                  <div onMouseEnter={() => table_filter_set("filter-applied second-18")} onMouseLeave={() => table_filter_set("")} onClick={() => filter_second_18_click()} className={filter_second_18 ? `table-value table-filter width-1-6th chip-${fromNumberToColor(filter_second_18_value)} active` : "table-value table-filter width-1-6th"}><div>2nd 18</div><div className="filter-overlay"><div className="filter-chip"></div></div></div>
                </div>
              </div>
              <div className="bottom-table-spacer">
                <div className="table-value"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="roulette-table-chips">
          <div
            onClick={() => setChipSelected(100)}
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
            onClick={() => setChipSelected(500)}
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
            onClick={() => setChipSelected(2500)}
            className={
              chipSelected === 2500
                ? "table-chip-wrapper active"
                : "table-chip-wrapper"
            }
          >
            <div
              className="table-chip"
              style={{ backgroundImage: `url(${coin_2k5})` }}
            ></div>
          </div>
          <div
            onClick={() => setChipSelected(10000)}
            className={
              chipSelected === 10000
                ? "table-chip-wrapper active"
                : "table-chip-wrapper"
            }
          >
            <div
              className="table-chip"
              style={{ backgroundImage: `url(${coin_10k})` }}
            ></div>
          </div>
          <div
            onClick={() => setChipSelected(50000)}
            className={
              chipSelected === 50000
                ? "table-chip-wrapper active"
                : "table-chip-wrapper"
            }
          >
            <div
              className="table-chip"
              style={{ backgroundImage: `url(${coin_50k})` }}
            ></div>
          </div>
        </div>
        <button
          type="button"
          className={spinAvailable ? "btn" : "btn disabled"}
          id="spin"
          onClick={() => spinTheWheel()}
        >
          <span className="btn-label">Spin</span>
        </button>
        <div id="table-overlay">
          <div id="table-overlay-text">{overlay_string}</div>
        </div>
      </div>
    </div>
  );
};

export default Roulette;
