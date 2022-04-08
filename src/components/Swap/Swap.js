// import { Listbox } from "@headlessui/react";
import React from "react";
import swap_image from "../../assets/Elements/swap-desktop.png";
import "./Swap.css";

const Swap = () => {
	return (
        <div id="swap-wrapper">
            <div id="swap-content-wrapper">
                <div id="swap-content-inner-wrapper">
                    <div id="swap-content">
                        <div id="swap-header">
                            <h1>Swap</h1>
                            <span>Ergo blockchain token swap</span>
                        </div>
                        <div id="swap-input-fields-wrapper">
                            <div id="swap-input-fields">
                                <div className="input-field">
                                    <select>
                                        <option value="erg">ERG</option>
                                    </select>
                                    <input placeholder="ERG amount" />
                                </div>
                                <div id="input-separator-wrapper">
                                    <div id="input-seperator">To</div>
                                </div>
                                <div className="input-field">
                                    <select>
                                        <option value="erg">ERG</option>
                                    </select>
                                    <input value="20.0000" />
                                </div>
                            </div>
                        </div>
                        <div id="swap-buttons">
                            <label id="private-wrapper" className="container">
                                <input id="private-checkbox" type="checkbox" />
                                <span class="checkmark"></span>
                                Private
                            </label>
                            <div id="swap-button">
                                <button>Swap</button>
                            </div>
                            <div id="swap-slippage">Slippage <span id="swap-slippage-value">0.5</span>%</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="swap-image-wrapper">
                <div id="swap-image" style={{ backgroundImage: `url(${swap_image})` }}></div>
            </div>
        </div>
    );
};
export default Swap;
