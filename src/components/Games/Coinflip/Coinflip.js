import React from "react";
import "./Coinflip.css";
import image from "../../../assets/Elements/coinflip-pyramid.png";
import { HiPlus, HiMinus } from "react-icons/hi";
import { ImHammer2 } from "react-icons/im";

const Coinflip = () => {
	return (
		<main className="flex flex-col xl:flex-row justify-center items-center gap-[6rem] xl:gap-[10rem] w-full ">
			<div className="flex flex-col gap-8 justify-center items-center bg-[#51127f] text-white w-[80%] lg:w-[40%] xl:w-[35%] h-[60vh] rounded-[35px] shadow-[1px_1px_16px_rgb(0,0,0)] mt-[45px] ">
				<h1 className="text-center text-5xl self-start ">
					<span style={{ color: "#d70a84" }} className="font-bold">
						Head{" "}
					</span>
					<span>/ Tail</span>
				</h1>

				<div className="below-head">
					<p>
						selected <span>{"Head"}</span>
					</p>
					<p>
						reward <span>{"20,000"}</span>
					</p>
				</div>

				<p>Please set a bet amount</p>

				<div className="flex">
					<h1 className="cursor-pointer ml-[5px] ">{<HiMinus size={35} />}</h1>
					<input
						type="text"
						pattern="[^a-zA-Z]+"
						className="border-t-[2px] bg-transparent w-[500%] text-white h-[20px] mt-[30px] mb-0 ml-[10px] mr-[10px] "
					/>
					<span className="mt-[1.8rem] text-[#d70a84] font-black">OWL</span>
					<h1 className="cursor-pointer ml-[5px] ">{<HiPlus size={35} />}</h1>
				</div>

				<button
					className="flex w-[50%] h-[60px] rounded-[35px] items-center justify-center shadow-[0.1px_0.1px_0px_rgb(0,0,0)]"
					style={{ background: "linear-gradient(to right, #51127f, #d70a84)" }}
				>
					<span style={{ marginRight: "5px", transform: "rotateY(180deg)" }}>
						{<ImHammer2 size={25} />}
					</span>
					Place bet
				</button>

				<p>Transaction ID: {}</p>
			</div>

			<img src={image} className="w-[30%] xl:w-[25%] 2xl:w-[30%] mb-28 mt-16 " />
		</main>
	);
};
export default Coinflip;
