import React, { useRef, useState } from "react";
import "./Roulette.css";
import outterWheel1 from "../../../assets/Elements/behind2.png";
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

    const innerRef = useRef();

    function spinTheWheel()
    {
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

            if (randomNumber === 0)
            {
                color = "green";
            }
            else if (red.indexOf(randomNumber) !== -1)
            {
                color = "red";
            }
            else
            {
                color = "black";
            }

            setResultNumber(randomNumber);
            setResultColor(color);
            setRevealData(true);
            setRandomNumber(randomNumber);
            if (firstSpin) setFirstSpin(false);
        }, timer+50);
        setTimeout(() => {
            innerRef.current.classList.add("stop-spin");
        }, timer * 0.7);
    }
    console.log(randomNumber);
    console.log(revealData);
    console.log(resultColor);
    return (
        <div className="roulette-wrapper">
            <div className="roulette-wheel-content-wrapper">
                <div className="roulette-wheel-content">
                    <button
                        type="button"
                        className={spinAvailable ? "btn" : "btn disabled"}
                        id="spin"
                        onClick={() => spinTheWheel()}
                        >
                        <span className="btn-label">Spin</span>
                    </button>
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
                <div className="roulette-table-content" style={{color:"white"}}>
                <table id="table-outter">
                    <tr>
                        <td id="table-left-wrapper">
                            <table id="table-left">

                            </table>
                        </td>
                        <td id="numbers-table-wrapper">
                            <table id="numbers-table">

                            </table>
                        </td>
                        <td id="table-right-wrapper">
                            <table id="table-right">

                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td id="bottom-table-wrapper">
                            <table id="bottom-table">

                            </table>
                        </td>
                        <td></td>
                    </tr>
                </table>
                </div>
            </div>
        </div>
    );
};
export default Roulette;
