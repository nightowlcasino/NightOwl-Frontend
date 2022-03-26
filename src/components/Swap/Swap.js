import React from "react";
import image from "../../assets/Elements/swap-desktop.png";
import "./Swap.css";

const Swap = () => {
	return (
        <main className="flex flex-col items-center xl:flex-row justify-center lg:justify-around xl:items-start xl:ml-20 2xl:ml-0 max-w-full">
            <div className="flex flex-col justify-center items-center bg-[#51127f] text-white w-[70%] sm:w-[50%] lg:w-[40%] xl:w-[28%] h-[45vh] xl:h-[60vh] rounded-[25px] shadow-[5px_10px_16px_rgb(0,0,0)] mt-[45px] ">
                <h1 className="text-[#d70a84] m-0 pl-2 pb-2">Swap</h1>
                <p className="pb-[20px]">Ergo blockchain token swap</p>
                <div className="initial-swap-token flex flex-col justify-center items-center">
                    <div className="custom-select">
                        <select>
                            <option value="erg">ERG</option>
                        </select>
                    </div>
                    
                    <input type="number" className="token-input w-[80%] " />
                </div>

                <div className="mid-swap flex flex-col justify-center items-center h-[120px] ">
                    <div>
                        <p>.</p>
                        <p style={{marginBottom:"8px"}}>.</p>
                    </div>
                    <p className="text-center">To</p>
                    <div>
                        <p>.</p>
                        <p>.</p>
                    </div>
                </div>

                <div className="final-swap-token flex flex-col justify-center items-center mt-4">
                    <div className="custom-select">
                        <select>
                            <option value="erg">OWL</option>
                        </select>
                    </div>

                    <input type="number" className="token-input w-[80%]" />
                </div>

                <span><input type="checkbox" name="Private" />Private</span>

                <button>Swap</button>

                <p>Slippage: {}</p>
            </div>
            <img src={image} className="w-[40%] lg:w-[40%] lg:mr-8 xl:mr-28" />
        </main>
	);
};
export default Swap;
