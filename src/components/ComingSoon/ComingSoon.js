import React from "react";
import "./ComingSoon.css";
// import topSectionRightImg from "../../assets/Elements/homePageRightImg.png";

import logo from "../../assets/Elements/logo.png";
// import { Link } from "react-router-dom";

function ComingSoon() {
	return (
		<div id="content-background">
			<div id="content-wrapper">
				<div id="logo-wrapper">
					<div id="logo-fill"></div>
					<div id="logo-background">
						<div id="logo-element">
							<div id="logo" style={{backgroundImage:`url(${logo})`}}></div>
						</div>
					</div>
				</div>
				<div id="about-wrapper">
					<h1>Coming Soon!</h1>
					<div id="about">
						<span>Our developers are working hard intending to catch the roadmap deadline date.</span>
						<br />
						<span id="night-owl-team">Night Owl Team</span>
					</div>
					<div id="icons-wrapper">
						<a href="https://twitter.com/NightOwlCasino" target="_blank" className="icon-wrapper">
							<div id="twitter-icon-blue" className="icon-color"></div>
							<div id="twitter-icon-white" className="icon-white"></div>
						</a>
						<a href="https://discord.com/invite/W69GTHe3pJ" target="_blank" className="icon-wrapper">
							<div id="discord-icon-blue" className="icon-color"></div>
							<div id="discord-icon-white" className="icon-white"></div>
						</a>
						<a href="https://linktr.ee/NightOwlCasino" target="_blank" className="icon-wrapper">
							<div id="linktree-icon-green" className="icon-color"></div>
							<div id="linktree-icon-white" className="icon-white"></div>
						</a>
					</div>
				</div>
				<div id="content-filler"></div>
			</div>
		</div>
	);
}

export default ComingSoon;
