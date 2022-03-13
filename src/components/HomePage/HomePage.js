import React from "react";
import "./HomePage.css";
import image1 from "../../assets/Elements/Design-2_0000_Layer-21.png";
import topSectionRightImg from "../../assets/Elements/homePageRightImg.png";

const HomePage = () => {
	return (
		<div className="flex flex-col justify-center items-start sm:items-center lg:items-start">
			<header className="flex justify-start items-center object-cover rounded-xl w-[90%] h-auto lg:h-[30rem] text-white bg-home-1 bg-cover bg-no-repeat lg:mr-50 ">
				<div className="left-section">
					<div className="top-para hidden lg:block">
						<p>Hot right</p>
						<p>now!</p>
					</div>

					<h1>Win 100$ and</h1>
					<h1>5 free spins!</h1>
					<p className="hidden lg:block">
						Have fun in a decentralized way and enjoy <br />
						the freedom of the blockchain!
					</p>

					<button>CLAIM HERE</button>
				</div>

				<div>
					<img src={topSectionRightImg} />
				</div>
			</header>
			<div className="w-[90%] flex gap-1  mt-[-20px] ">
				<div className="mt-[2rem] text-white bg-[#1f0452] border-[5px] border-[#bd0b83] rounded-[25px] w-[55%] h-auto ">
					<div className="bottom-top-section">
						<h2>Leaderboard</h2>
					</div>

					<div className="table-div">
						<table>
							<tbody>
								<th>
									<span>Address</span>
									<span>Amount</span>
									<span>TXID</span>
								</th>

								{/* {map the table rows here} */}

								<tr>
									<td>
										<span>2hRSbf...FKbhnz</span>
										<span>1534 ERG</span>
										<span>kjj3nDS...d342sz</span>
									</td>
								</tr>

								<tr>
									<td>
										<span>2hRSbf...FKbhnz</span>
										<span>1534 ERG</span>
										<span>kjj3nDS...d342sz</span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<div className="flex text-white bg-[#1f0452] border-[5px] border-[#bd0b83] rounded-[25px] w-[45%] h-auto mt-[30px] ">
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							height: "100%",
						}}
					>
						<div style={{ margin: "2rem" }}>
							<h2
								style={{
									textAlign: "start",
									margin: "0",
									padding: "0",
									top: 0,
								}}
							>
								Popular games
							</h2>
							<p
								style={{
									textAlign: "start",
									margin: "0",
									padding: "0",
									top: 0,
								}}
							>
								Slots
							</p>
						</div>

						<button style={{ margin: "2rem", width: "50%", height: "3rem" }}>
							Play it now
						</button>
					</div>

					<img src={image1} style={{ maxWidth: "40%", height: "auto" }} />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
