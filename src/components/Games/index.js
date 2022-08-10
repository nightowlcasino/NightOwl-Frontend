import "./index.css";

const GamesDashboard = () => {
	return (
		<div className="gamesPage">
			<div className="gamesCard">
				<div className="gameImage">
					<div>
						<img src="https://pbs.twimg.com/media/FEaFK4OWUAAlgiV?format=jpg&name=900x900" />
					</div>
					<div className="authorMetaData">
						<img src="https://w7.pngwing.com/pngs/378/398/png-transparent-tokyo-ghoul-anime-manga-ghoul-black-hair-fictional-character-film-thumbnail.png" />
						<span>Your Name</span>
					</div>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						width: "93%",
					}}
				>
					<span style={{ fontWeight: "bolder" }}>Game Title Here</span>
					<span
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							marginTop: "4px",
							widht: "9px",
							height: "5px",
							fontWeight: "bolder",
							paddingRight:'14px',
							cursor:'pointer'
						}}
					>
						<img
							style={{ width: "30px",  }}
							alt="svgImg"
							src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAzMCAzMCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij4gICAgPHBhdGggZD0iTTE1LDNDOC4zNzMsMywzLDguMzczLDMsMTVjMCw2LjYyNyw1LjM3MywxMiwxMiwxMnMxMi01LjM3MywxMi0xMkMyNyw4LjM3MywyMS42MjcsMywxNSwzeiBNMTYsMjFoLTJ2LTdoMlYyMXogTTE1LDExLjUgYy0wLjgyOCwwLTEuNS0wLjY3Mi0xLjUtMS41czAuNjcyLTEuNSwxLjUtMS41czEuNSwwLjY3MiwxLjUsMS41UzE1LjgyOCwxMS41LDE1LDExLjV6Ij48L3BhdGg+PC9zdmc+"
						/>
					</span>
				</div>
				<span>
					Hello this is a demo games project card here. Hello this is a demo
					games project card here.
				</span>
			</div>
		</div>
	);
};

export default GamesDashboard;
