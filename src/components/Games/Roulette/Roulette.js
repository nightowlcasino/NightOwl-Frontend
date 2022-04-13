import React, { useState } from "react";
import "./Roulette.css";
import outterWheel1 from "../../../assets/Elements/behind2.png";
const Roulette = () => {
  var red = [32, 19, 21, 25, 34, 27, 36, 30, 23, 5, 16, 1, 14, 9, 18, 7, 12, 3];
  var inner = document.querySelector(".inner");
  var spin = document.querySelector("#spin");
  var data = document.querySelector(".data");
  var mask = document.querySelector(".mask");
  var maskDefault = "Place Your Bets",
    timer = 9000;
  console.log(inner);
  const [maskText, setMaskText] = useState("");

  function spinTheWheel() {
    var randomNumber = 19,//Math.floor(Math.random() * 36),
      color = null;
	console.log("he entrado");
    var lol = inner.setAttribute("data-spinto", randomNumber).querySelector("li:nth-child(" + randomNumber + ") input");
	console.log(lol);
      
	lol.prop("checked", "checked");

    // setTimeout(function () {
    //   setMaskText("No more bets");
    // }, timer / 2);

    // setTimeout(function () {
	// 	setMaskText(maskDefault);
    // }, timer + 500);
  }

  return (
    <div className="roulette-wrapper">
      <div className="roulette-wheel-content-wrapper">
        <div className="roulette-wheel-content">
          <button
            type="button"
            className="btn"
            id="spin"
            onClick={() => spinTheWheel()}
          >
            <span className="btn-label">Spin</span>
          </button>
          {/*<button type="button" className="btn btn-reset" id="reset">
            <span className="btn-label">New Game</span>
          </button> */}
          <div className="plate" id="plate">
            <img
              src={outterWheel1}
              className="behindlol"
              alt="outter-roulette-wheel"
            />
            <ul className="inner">
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
            <div className="data">
              <div className="data-inner">
                <div className="mask">{maskText}</div>
                <div className="result">
                  <div className="result-number">00</div>
                  <div className="result-color">red</div>
                </div>
              </div>
            </div>
          </div>
          <div className="previous-results">
            <ol className="previous-list">
              <li className="visuallyhidden placeholder">No results yet.</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="roulette-table-content-wrapper">
        <div className="roulette-table-content">
          Hello good afternoon sir Bane
        </div>
      </div>
    </div>
  );
};
export default Roulette;
