import FAQItem from "./FAQItem";


export default function FAQ() {


	return (

		<div id="page-content-wrapper" style={{position:'relative'}}>
			<div id="home-page-hot-wrapper" style={{flex: "none"}}>
				<div id="home-page-hot">
					<div id="home-page-hot-border">
						<div id="home-page-hot-content-background" style={{backgroundColor:'rgba(24,5,80,1)'}}>
							<div id="home-page-inner-wrapper">
								<div style={{width: "100%", textAlign: "center", marginBottom: 20}}>
									<h1 style={{fontWeight:'900', fontSize:'50px',marginBottom:'0'}}><span style={{color:'white'}}>F</span><span style={{color:'#d70a84'}}>A</span><span style={{color:'white'}}>Q</span></h1>
									<p style={{color:'white', fontSize: "20px", padding: 8}}>Frequently asked questions regarding the Night Owl project.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 4 }}>
				<div style={{width: "100%"}}>
					<FAQItem title="Why do we exist in the first place" description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"}/>
				</div>
				<div style={{width: "100%"}}>
					<FAQItem title="Is there region restriction in the US?" description={"Who do we exist in the first place"}/>
				</div>
				<div>
					<FAQItem title="What is our main goal?" description="What is our main goal?"/>
				</div>
				<div>
					<FAQItem title="How do we stay decentralized?" description=""/>
				</div>
			</div>


		</div>
	);
}
