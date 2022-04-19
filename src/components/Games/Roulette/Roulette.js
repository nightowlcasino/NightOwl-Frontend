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
                    {/* <table id="table-outter">
                        <tr id="top-row">
                            <td id="table-left-wrapper">
                                <table id="table-left">
                                    <td>0</td>
                                </table>
                            </td>
                            <td id="numbers-table-wrapper">
                                <table id="numbers-table">
                                    <tr>
                                        <td>3</td>
                                        <td>6</td>
                                        <td>9</td>
                                        <td>12</td>
                                        <td>15</td>
                                        <td>18</td>
                                        <td>21</td>
                                        <td>24</td>
                                        <td>27</td>
                                        <td>30</td>
                                        <td>33</td>
                                        <td>36</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>5</td>
                                        <td>8</td>
                                        <td>11</td>
                                        <td>14</td>
                                        <td>17</td>
                                        <td>20</td>
                                        <td>23</td>
                                        <td>26</td>
                                        <td>29</td>
                                        <td>32</td>
                                        <td>35</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>4</td>
                                        <td>7</td>
                                        <td>10</td>
                                        <td>13</td>
                                        <td>16</td>
                                        <td>19</td>
                                        <td>22</td>
                                        <td>25</td>
                                        <td>28</td>
                                        <td>31</td>
                                        <td>34</td>
                                    </tr>
                                </table>
                            </td>
                            <td id="table-right-wrapper">
                                <table id="table-right">
                                    <tr>
                                        <td>1st</td>
                                    </tr>
                                    <tr>
                                        <td>2nd</td>
                                    </tr>
                                    <tr>
                                        <td>3rd</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr id="bottom-row">
                            <td className="spacer"></td>
                            <td id="bottom-table-wrapper">
                                <table id="bottom-table">
                                    <tr>
                                        <td colSpan="2">1st 12</td>
                                        <td colSpan="2">2nd 12</td>
                                        <td colSpan="2">3rd 12</td>
                                    </tr>
                                    <tr>
                                        <td>1-18</td>
                                        <td>Even</td>
                                        <td>red</td>
                                        <td>black</td>
                                        <td>Odd</td>
                                        <td>19-36</td>
                                    </tr>
                                </table>
                            </td>
                            <td className="spacer"></td>
                        </tr>
                    </table> */}
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
                                        <div id="number-3" className="table-value width-1-12th">3</div>
                                        <div id="number-6" className="table-value width-1-12th">6</div>
                                        <div id="number-9" className="table-value width-1-12th">9</div>
                                        <div id="number-12" className="table-value width-1-12th">12</div>
                                        <div id="number-15" className="table-value width-1-12th">15</div>
                                        <div id="number-18" className="table-value width-1-12th">18</div>
                                        <div id="number-21" className="table-value width-1-12th">21</div>
                                        <div id="number-24" className="table-value width-1-12th">24</div>
                                        <div id="number-27" className="table-value width-1-12th">27</div>
                                        <div id="number-30" className="table-value width-1-12th">30</div>
                                        <div id="number-33" className="table-value width-1-12th">33</div>
                                        <div id="number-36" className="table-value width-1-12th">36</div>
                                    </div>
                                    <div id="second-row" className="table-row">
                                        <div id="number-2" className="table-value width-1-12th">2</div>
                                        <div id="number-5" className="table-value width-1-12th">5</div>
                                        <div id="number-8" className="table-value width-1-12th">8</div>
                                        <div id="number-11" className="table-value width-1-12th">11</div>
                                        <div id="number-14" className="table-value width-1-12th">14</div>
                                        <div id="number-17" className="table-value width-1-12th">17</div>
                                        <div id="number-20" className="table-value width-1-12th">20</div>
                                        <div id="number-23" className="table-value width-1-12th">23</div>
                                        <div id="number-26" className="table-value width-1-12th">26</div>
                                        <div id="number-29" className="table-value width-1-12th">29</div>
                                        <div id="number-32" className="table-value width-1-12th">32</div>
                                        <div id="number-35" className="table-value width-1-12th">35</div>
                                    </div>
                                    <div id="third-row" className="table-row">
                                        <div id="number-1" className="table-value width-1-12th">1</div>
                                        <div id="number-4" className="table-value width-1-12th">4</div>
                                        <div id="number-7" className="table-value width-1-12th">7</div>
                                        <div id="number-10" className="table-value width-1-12th">10</div>
                                        <div id="number-13" className="table-value width-1-12th">13</div>
                                        <div id="number-16" className="table-value width-1-12th">16</div>
                                        <div id="number-19" className="table-value width-1-12th">19</div>
                                        <div id="number-22" className="table-value width-1-12th">22</div>
                                        <div id="number-25" className="table-value width-1-12th">25</div>
                                        <div id="number-28" className="table-value width-1-12th">28</div>
                                        <div id="number-31" className="table-value width-1-12th">31</div>
                                        <div id="number-34" className="table-value width-1-12th">34</div>
                                    </div>
                                </div>
                                <div id="numbers-overlay">
                                    <div className="row spacer"></div>
                                    <div className="row number-center">
                                        <div className="inner-row spacer"></div>
                                        <div className="inner-row number-center" num-val="0"></div>
                                        <div className="inner-row number-between" num-val="0-3"></div>
                                        <div className="inner-row number-center" num-val="3"></div>
                                        <div className="inner-row number-between" num-val="3-6"></div>
                                        <div className="inner-row number-center" num-val="6"></div>
                                        <div className="inner-row number-between" num-val="6-9"></div>
                                        <div className="inner-row number-center" num-val="9"></div>
                                        <div className="inner-row number-between" num-val="9-12"></div>
                                        <div className="inner-row number-center" num-val="12"></div>
                                        <div className="inner-row number-between" num-val="12-15"></div>
                                        <div className="inner-row number-center" num-val="15"></div>
                                        <div className="inner-row number-between" num-val="15-18"></div>
                                        <div className="inner-row number-center" num-val="18"></div>
                                        <div className="inner-row number-between" num-val="18-21"></div>
                                        <div className="inner-row number-center" num-val="21"></div>
                                        <div className="inner-row number-between" num-val="21-24"></div>
                                        <div className="inner-row number-center" num-val="24"></div>
                                        <div className="inner-row number-between" num-val="24-27"></div>
                                        <div className="inner-row number-center" num-val="27"></div>
                                        <div className="inner-row number-between" num-val="27-30"></div>
                                        <div className="inner-row number-center" num-val="30"></div>
                                        <div className="inner-row number-between" num-val="30-33"></div>
                                        <div className="inner-row number-center" num-val="33"></div>
                                        <div className="inner-row number-between" num-val="33-36"></div>
                                        <div className="inner-row number-center" num-val="36"></div>
                                        <div className="inner-row spacer"></div>
                                    </div>
                                    <div className="row number-between">
                                        <div className="inner-row spacer"></div>
                                        <div className="inner-row number-center" num-val="0"></div>
                                        <div className="inner-row number-between" num-val="0-2-3"></div>
                                        <div className="inner-row number-center" num-val="2-3"></div>
                                        <div className="inner-row number-between" num-val="2-3-5-6"></div>
                                        <div className="inner-row number-center" num-val="5-6"></div>
                                        <div className="inner-row number-between" num-val="5-6-8-9"></div>
                                        <div className="inner-row number-center" num-val="8-9"></div>
                                        <div className="inner-row number-between" num-val="8-9-11-12"></div>
                                        <div className="inner-row number-center" num-val="11-12"></div>
                                        <div className="inner-row number-between" num-val="11-12-14-15"></div>
                                        <div className="inner-row number-center" num-val="14-15"></div>
                                        <div className="inner-row number-between" num-val="14-15-17-18"></div>
                                        <div className="inner-row number-center" num-val="17-18"></div>
                                        <div className="inner-row number-between" num-val="17-18-20-21"></div>
                                        <div className="inner-row number-center" num-val="20-21"></div>
                                        <div className="inner-row number-between" num-val="20-21-23-24"></div>
                                        <div className="inner-row number-center" num-val="23-24"></div>
                                        <div className="inner-row number-between" num-val="23-24-26-27"></div>
                                        <div className="inner-row number-center" num-val="26-27"></div>
                                        <div className="inner-row number-between" num-val="26-27-29-30"></div>
                                        <div className="inner-row number-center" num-val="29-30"></div>
                                        <div className="inner-row number-between" num-val="29-30-32-33"></div>
                                        <div className="inner-row number-center" num-val="32-33"></div>
                                        <div className="inner-row number-between" num-val="32-33-35-36"></div>
                                        <div className="inner-row number-center" num-val="35-36"></div>
                                        <div className="inner-row spacer"></div>
                                    </div>
                                    <div className="row number-center">
                                        <div className="inner-row spacer"></div>
                                        <div className="inner-row number-center" num-val="0"></div>
                                        <div className="inner-row number-between" num-val="0-2"></div>
                                        <div className="inner-row number-center" num-val="2"></div>
                                        <div className="inner-row number-between" num-val="2-5"></div>
                                        <div className="inner-row number-center" num-val="5"></div>
                                        <div className="inner-row number-between" num-val="5-8"></div>
                                        <div className="inner-row number-center" num-val="8"></div>
                                        <div className="inner-row number-between" num-val="8-11"></div>
                                        <div className="inner-row number-center" num-val="11"></div>
                                        <div className="inner-row number-between" num-val="11-14"></div>
                                        <div className="inner-row number-center" num-val="14"></div>
                                        <div className="inner-row number-between" num-val="14-17"></div>
                                        <div className="inner-row number-center" num-val="17"></div>
                                        <div className="inner-row number-between" num-val="17-20"></div>
                                        <div className="inner-row number-center" num-val="20"></div>
                                        <div className="inner-row number-between" num-val="20-23"></div>
                                        <div className="inner-row number-center" num-val="23"></div>
                                        <div className="inner-row number-between" num-val="23-26"></div>
                                        <div className="inner-row number-center" num-val="26"></div>
                                        <div className="inner-row number-between" num-val="26-29"></div>
                                        <div className="inner-row number-center" num-val="29"></div>
                                        <div className="inner-row number-between" num-val="29-32"></div>
                                        <div className="inner-row number-center" num-val="32"></div>
                                        <div className="inner-row number-between" num-val="32-35"></div>
                                        <div className="inner-row number-center" num-val="35"></div>
                                        <div className="inner-row spacer"></div>
                                    </div>
                                    <div className="row number-between">
                                        <div className="inner-row spacer"></div>
                                        <div className="inner-row number-center" num-val=""></div>
                                        <div className="inner-row number-between" num-val=""></div>
                                        <div className="inner-row number-center" num-val=""></div>
                                        <div className="inner-row number-between" num-val=""></div>
                                        <div className="inner-row number-center" num-val=""></div>
                                        <div className="inner-row number-between" num-val=""></div>
                                        <div className="inner-row number-center" num-val=""></div>
                                        <div className="inner-row number-between" num-val=""></div>
                                        <div className="inner-row number-center" num-val=""></div>
                                        <div className="inner-row number-between" num-val=""></div>
                                        <div className="inner-row number-center" num-val=""></div>
                                        <div className="inner-row number-between" num-val=""></div>
                                        <div className="inner-row number-center" num-val=""></div>
                                        <div className="inner-row number-between" num-val=""></div>
                                        <div className="inner-row number-center" num-val=""></div>
                                        <div className="inner-row number-between" num-val=""></div>
                                        <div className="inner-row number-center" num-val=""></div>
                                        <div className="inner-row number-between" num-val=""></div>
                                        <div className="inner-row number-center" num-val=""></div>
                                        <div className="inner-row number-between" num-val=""></div>
                                        <div className="inner-row number-center" num-val=""></div>
                                        <div className="inner-row number-between" num-val=""></div>
                                        <div className="inner-row number-center" num-val=""></div>
                                        <div className="inner-row number-between" num-val=""></div>
                                        <div className="inner-row number-center" num-val=""></div>
                                        <div className="inner-row spacer"></div>
                                    </div>
                                    <div className="row number-center">
                                        <div className="inner-row spacer"></div>
                                        <div className="inner-row number-center" num-val=""></div>
                                        <div className="inner-row number-between" num-val=""></div>
                                        <div className="inner-row number-center" num-val=""></div>
                                        <div className="inner-row number-between" num-val=""></div>
                                        <div className="inner-row number-center" num-val=""></div>
                                        <div className="inner-row number-between" num-val=""></div>
                                        <div className="inner-row number-center" num-val=""></div>
                                        <div className="inner-row number-between" num-val=""></div>
                                        <div className="inner-row number-center" num-val=""></div>
                                        <div className="inner-row number-between" num-val=""></div>
                                        <div className="inner-row number-center" num-val=""></div>
                                        <div className="inner-row number-between" num-val=""></div>
                                        <div className="inner-row number-center" num-val=""></div>
                                        <div className="inner-row number-between" num-val=""></div>
                                        <div className="inner-row number-center" num-val=""></div>
                                        <div className="inner-row number-between" num-val=""></div>
                                        <div className="inner-row number-center" num-val=""></div>
                                        <div className="inner-row number-between" num-val=""></div>
                                        <div className="inner-row number-center" num-val=""></div>
                                        <div className="inner-row number-between" num-val=""></div>
                                        <div className="inner-row number-center" num-val=""></div>
                                        <div className="inner-row number-between" num-val=""></div>
                                        <div className="inner-row number-center" num-val=""></div>
                                        <div className="inner-row number-between" num-val=""></div>
                                        <div className="inner-row number-center" num-val=""></div>
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
            </div>
        </div>
    );
};

export default Roulette;
