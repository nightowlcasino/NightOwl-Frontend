import React from "react";
import { Link } from "react-router-dom";
import Homepage from "../../assets/Elements/Design-2_0039_Layer-5.png";
import Games from "../../assets/Elements/Design-2_0037_Layer-7.png";
import Bonuses from "../../assets/Elements/Design-2_0036_Layer-8.png";
import Rules from "../../assets/Elements/Design-2_0035_Layer-9.png";
import P2P from "../../assets/Elements/Design-2_0038_Layer-6.png";
import Coinflip from "../../assets/Elements/Design-2_0051_Layer-11.png";
import Blackjack from "../../assets/Elements/Design-2_0050_Layer-12.png";
import Random from "../../assets/Elements/Design-2_0049_Layer-13.png";
import Swapicon from "../../assets/Elements/swap-icon.png";
// import "./LeftSideBar.css";
import { useTranslation } from "react-i18next";

const LeftSideBar = () => {
	const { t } = useTranslation();
	return (
		<div className="hidden lg:flex flex-col mt-[5rem] h-full">
				<div className="flex flex-col justify-center bg-gradient-to-tl from-[#d70a84] to-[#51127f] h-[60vh] lg:h-[60vh] xl:h-[70vh] 2xl:h-[84vh] w-[15vw] lg:w-[25vw] xl:max-w-[22vw] 2xl:w-[16vw] rounded-xl mt-[2rem] ">
					<div className="overflow-y-auto flex justify-center items-center">
						<div className="flex flex-col gap-9 2xl:gap-10 justify-center items-start mt-4 mb-4 sm:text-sm lg:text-lg text-white font-medium">
							<Link to="/" className="flex gap-4 justify-center items-center ">
								<img src={Homepage} className=" h-[2vh] w-auto " />
								{t("home_page")}
							</Link>

							<Link to="/soon" className="flex gap-4 justify-center items-center ">
								<img src={Games} className="h-[2vh] w-auto " />
								{t("games")}
							</Link>
							<Link to="/stake" className="flex gap-4 justify-center items-center ">
								<img src={Bonuses} className="pr-[15px] h-[2vh] w-auto " />
								{t("stake")}
							</Link>
							<Link to="/swap" className="flex gap-4 justify-center items-center ">
								<img src={Swapicon} className="pr-[15px] h-[2vh] w-auto " />
								{t("swap")}
							</Link>
							<Link to="/soon" className="flex gap-4 justify-center items-center ">
								<img src={Rules} className="pr-[15px] h-[2vh] w-auto " />
								{t("rules")}
							</Link>
							<Link to="/soon" className="flex gap-4 justify-center items-center ">
								<img src={P2P} className="pr-[15px] h-[2vh] w-auto " />
								{t("p2p_betting")}
							</Link>
							<span className="font-normal">Popular Games</span>
							<Link to="/coinflip" className="flex gap-4 justify-center items-center ">
								<img src={Coinflip} className="pr-[15px] h-[2vh] w-auto " />
								{t("coinflip")}
							</Link>
							<Link to="/soon" className="flex gap-4 justify-center items-center ">
								<img src={Blackjack} className="pr-[15px] h-[2vh] w-auto " />
								{t("blackjack")}
							</Link>
							<Link to="/soon" className="flex gap-4 justify-center items-center ">
								<img src={Random} className="pr-[15px] h-[2vh] w-auto " />
								{t("random")}
							</Link>
						</div>
					</div>
					<div className="text-white">
						<a href="#">▼</a>
					</div>
				</div>
		</div>
	);
};

export default LeftSideBar;
