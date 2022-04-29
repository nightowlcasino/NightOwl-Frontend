import React, { useRef, useState } from "react";
import "./Roulette.css";
import outterWheel1 from "../../../assets/Elements/behind2.png";

import coin_100 from "../../../assets/Elements/coin_100.png";
import coin_500 from "../../../assets/Elements/coin_500.png";
import coin_2k5 from "../../../assets/Elements/coin_2k5.png";
import coin_10k from "../../../assets/Elements/coin_10k.png";
import coin_50k from "../../../assets/Elements/coin_50k.png";

import coin_purple from "../../../assets/Elements/coin_purple.png";
import coin_green from "../../../assets/Elements/coin_green.png";
import coin_pink from "../../../assets/Elements/coin_pink.png";
import coin_blue from "../../../assets/Elements/coin_blue.png";
import coin_black from "../../../assets/Elements/coin_black.png";

const Roulette = () => {
  var red = [32, 19, 21, 25, 34, 27, 36, 30, 23, 5, 16, 1, 14, 9, 18, 7, 12, 3];

  var maskDefault = "Place Your Bets";
  var timer = 9000;

  const [maskText, setMaskText] = useState(maskDefault);
  const [spinAvailable, setSpinAvailable] = useState(true);
  const [revealData, setRevealData] = useState(false);
  const [resultNumber, setResultNumber] = useState(null);
  const [resultColor, setResultColor] = useState(null);
  const [randomNumber, setRandomNumber] = useState(null);
  const [firstSpin, setFirstSpin] = useState(true);
  const [chipSelected, setChipSelected] = useState(100);
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
  });
  var arrayWithNumVals = ["num_val0", "num_val0_3", "num_val3", "num_val3_6", "num_val6", "num_val6_9", "num_val9", "num_val9_12", "num_val12", "num_val12_15", "num_val15", "num_val15_18", "num_val18", "num_val18_21", "num_val21", "num_val21_24", "num_val24", "num_val24_27", "num_val27", "num_val27_30", "num_val30", "num_val30_33", "num_val33", "num_val33_36", "num_val36"];
  var arrayWithNumVals1 = [
    "num_val0_2_3", "num_val2_3", "num_val2_3_5_6", "num_val5_6", "num_val5_6_8_9", "num_val8_9", "num_val8_9_11_12", "num_val11_12", "num_val11_12_14_15", "num_val14_15", "num_val14_15_17_18", "num_val17_18",
    "num_val17_18_20_21", "num_val20_21", "num_val20_21_23_24", "num_val23_24", "num_val23_24_26_27", "num_val26_27", "num_val26_27_29_30", "num_val29_30", "num_val29_30_32_33", "num_val32_33", "num_val32_33_35_36", "num_val35_36"];
  console.log(betObject["num_val3"]);
  const innerRef = useRef();

  function addBetToObject(e) {
    var numbers = e.target.getAttribute("num-val");
    let currentArrayCopy = betObject.num_val3.slice();
    currentArrayCopy.push(chipSelected);
    setBetObject({
      ...betObject,
      [`num_val${numbers}`]: currentArrayCopy, //betObject[`num_val${numbers}`] + chipSelected,
    });
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

    setSpinAvailable(false);

    //$(".placeholder").remove();

    setMaskText("No more bets");

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

    }
  }

  function centerOrBetween(index) {
    if (index % 2 === 0) {
      return "center";
    } else {
      return "between";
    }
  }
  return (
    <div className="roulette-wrapper place-bets">
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
        <div id="table-total-bet">
          Total bet <span>20.000</span>
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
                <div id="table-numbers">
                  <div id="first-row" className="table-row">
                    <div id="number-3" className="table-value width-1-12th">
                      3
                    </div>
                    <div id="number-6" className="table-value width-1-12th">
                      6
                    </div>
                    <div id="number-9" className="table-value width-1-12th">
                      9
                    </div>
                    <div id="number-12" className="table-value width-1-12th">
                      12
                    </div>
                    <div id="number-15" className="table-value width-1-12th">
                      15
                    </div>
                    <div id="number-18" className="table-value width-1-12th">
                      18
                    </div>
                    <div id="number-21" className="table-value width-1-12th">
                      21
                    </div>
                    <div id="number-24" className="table-value width-1-12th">
                      24
                    </div>
                    <div id="number-27" className="table-value width-1-12th">
                      27
                    </div>
                    <div id="number-30" className="table-value width-1-12th">
                      30
                    </div>
                    <div id="number-33" className="table-value width-1-12th">
                      33
                    </div>
                    <div id="number-36" className="table-value width-1-12th">
                      36
                    </div>
                  </div>
                  <div id="second-row" className="table-row">
                    <div id="number-2" className="table-value width-1-12th">
                      2
                    </div>
                    <div id="number-5" className="table-value width-1-12th">
                      5
                    </div>
                    <div id="number-8" className="table-value width-1-12th">
                      8
                    </div>
                    <div id="number-11" className="table-value width-1-12th">
                      11
                    </div>
                    <div id="number-14" className="table-value width-1-12th">
                      14
                    </div>
                    <div id="number-17" className="table-value width-1-12th">
                      17
                    </div>
                    <div id="number-20" className="table-value width-1-12th">
                      20
                    </div>
                    <div id="number-23" className="table-value width-1-12th">
                      23
                    </div>
                    <div id="number-26" className="table-value width-1-12th">
                      26
                    </div>
                    <div id="number-29" className="table-value width-1-12th">
                      29
                    </div>
                    <div id="number-32" className="table-value width-1-12th">
                      32
                    </div>
                    <div id="number-35" className="table-value width-1-12th">
                      35
                    </div>
                  </div>
                  <div id="third-row" className="table-row">
                    <div id="number-1" className="table-value width-1-12th">
                      1
                    </div>
                    <div id="number-4" className="table-value width-1-12th">
                      4
                    </div>
                    <div id="number-7" className="table-value width-1-12th">
                      7
                    </div>
                    <div id="number-10" className="table-value width-1-12th">
                      10
                    </div>
                    <div id="number-13" className="table-value width-1-12th">
                      13
                    </div>
                    <div id="number-16" className="table-value width-1-12th">
                      16
                    </div>
                    <div id="number-19" className="table-value width-1-12th">
                      19
                    </div>
                    <div id="number-22" className="table-value width-1-12th">
                      22
                    </div>
                    <div id="number-25" className="table-value width-1-12th">
                      25
                    </div>
                    <div id="number-28" className="table-value width-1-12th">
                      28
                    </div>
                    <div id="number-31" className="table-value width-1-12th">
                      31
                    </div>
                    <div id="number-34" className="table-value width-1-12th">
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
                            ? `inner-row number-center active ${fromNumberToColor(betObject[val][betObject[val].length - 1])} two-d`
                            : "inner-row number-center"
                        }
                        num-val={val.split("l")[1]}
                        onClick={(e) => addBetToObject(e)}
                      >

                      </div>
                    ))}

                    <div className="inner-row spacer"></div>
                  </div>
                  <div className="row number-between">
                    <div className="inner-row spacer"></div>
                    {arrayWithNumVals1.map((val, index) => (
                      <div
                        className={
                          betObject[val].length > 0
                            ? `inner-row number-${centerOrBetween(index)} active ${fromNumberToColor(betObject[val][betObject[val].length - 1])} two-d`
                            : `inner-row number-${centerOrBetween(index)}`
                        }
                        num-val={val.split("l")[1]}
                        onClick={(e) => addBetToObject(e)}
                      >

                      </div>
                    ))}
                    
                    {/* <div
                      className="inner-row number-center"
                      num-val="35_36"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div> */}
                    <div className="inner-row spacer"></div>
                  </div>
                  <div className="row number-center">
                    <div className="inner-row spacer"></div>
                    <div
                      className="inner-row number-center"
                      num-val="0"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-between"
                      num-val="0-2"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-center"
                      num-val="2"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-between"
                      num-val="2-5"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-center"
                      num-val="5"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-between"
                      num-val="5-8"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-center"
                      num-val="8"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-between"
                      num-val="8-11"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-center"
                      num-val="11"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-between"
                      num-val="11-14"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-center"
                      num-val="14"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-between"
                      num-val="14-17"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-center"
                      num-val="17"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-between"
                      num-val="17-20"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-center"
                      num-val="20"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-between"
                      num-val="20-23"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-center"
                      num-val="23"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-between"
                      num-val="23-26"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-center"
                      num-val="26"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-between"
                      num-val="26-29"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-center"
                      num-val="29"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-between"
                      num-val="29-32"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-center"
                      num-val="32"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-between"
                      num-val="32-35"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-center"
                      num-val="35"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div className="inner-row spacer"></div>
                  </div>
                  <div className="row number-between">
                    <div className="inner-row spacer"></div>
                    <div
                      className="inner-row number-center"
                      num-val="0"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-between"
                      num-val="0-1-2"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-center"
                      num-val="1-2"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-between"
                      num-val="1-2-4-5"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-center"
                      num-val="4-5"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-between"
                      num-val="4-5-7-8"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-center"
                      num-val="7-8"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-between"
                      num-val="7-8-10-11"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-center"
                      num-val="10-11"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-between"
                      num-val="10-11-13-14"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-center"
                      num-val="13-14"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-between"
                      num-val="13-14-16-17"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-center"
                      num-val="16-17"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-between"
                      num-val="16-17-19-20"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-center"
                      num-val="19-20"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-between"
                      num-val="19-20-22-23"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-center"
                      num-val="22-23"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-between"
                      num-val="22-23-25-26"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-center"
                      num-val="25-26"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-between"
                      num-val="25-26-28-29"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-center"
                      num-val="28-29"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-between"
                      num-val="28-29-31-32"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-center"
                      num-val="31-32"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-between"
                      num-val="31-32-34-35"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-center"
                      num-val="34-35"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div className="inner-row spacer"></div>
                  </div>
                  <div className="row number-center">
                    <div className="inner-row spacer"></div>
                    <div
                      className="inner-row number-center"
                      num-val="0"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-between"
                      num-val="0-1"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-center"
                      num-val="1"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-between"
                      num-val="1-4"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-center"
                      num-val="4"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-between"
                      num-val="4-7"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-center"
                      num-val="7"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-between"
                      num-val="7-10"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-center"
                      num-val="10"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-between"
                      num-val="10-13"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-center"
                      num-val="13"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-between"
                      num-val="13-16"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-center"
                      num-val="16"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-between"
                      num-val="16-19"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-center"
                      num-val="19"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-between"
                      num-val="19-22"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-center"
                      num-val="22"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-between"
                      num-val="22-25"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-center"
                      num-val="25"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-between"
                      num-val="25-28"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-center"
                      num-val="28"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-between"
                      num-val="28-31"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-center"
                      num-val="31"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-between"
                      num-val="31-34"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div
                      className="inner-row number-center"
                      num-val="34"
                      onClick={(e) => addBetToObject(e)}
                    >
                      <div></div>
                    </div>
                    <div className="inner-row spacer"></div>
                  </div>
                  <div className="row spacer"></div>
                </div>
              </div>
              <div id="right-table">
                <div className="table-value">1st</div>
                <div className="table-value">2nd</div>
                <div className="table-value">3rd</div>
              </div>
            </div>
            <div id="bottom-row">
              <div className="bottom-table-spacer">
                <div className="table-value"></div>
              </div>
              <div id="bottom-center-table">
                <div id="center-top-row" className="table-row">
                  <div className="table-value width-1-3rd">1st 12</div>
                  <div className="table-value width-1-3rd">2nd 12</div>
                  <div className="table-value width-1-3rd">3rd 12</div>
                </div>
                <div id="center-bottom-row" className="table-row">
                  <div className="table-value width-1-6th">1-18</div>
                  <div className="table-value width-1-6th">Even</div>
                  <div className="table-value width-1-6th">red</div>
                  <div className="table-value width-1-6th">black</div>
                  <div className="table-value width-1-6th">Odd</div>
                  <div className="table-value width-1-6th">19-36</div>
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
      </div>
    </div>
  );
};

export default Roulette;
