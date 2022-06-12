import "../BodyContent/BodyContent.css";

export default function AboutUs() {
	return (
		<div id="page-content-wrapper" style={{position:'relative'}}>
			<div id="home-page-hot-wrapper">
				<div id="home-page-hot">
					<div id="home-page-hot-border">
						<div id="home-page-hot-content-background" style={{backgroundColor:'rgba(24,5,80,1)'}}>
							<div id="home-page-inner-wrapper" style={{ marginLeft:'3rem'}}>
								<div>
									<h1 style={{fontWeight:'900', fontSize:'50px',marginBottom:'0'}}><span style={{color:'#d70a84'}}>Who</span> <span style={{color:'white'}}>are we</span><span style={{color:'#d70a84'}}>?</span></h1>
									<p style={{color:'white', width:'50%'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="page-content-wrapper" style={{position:'absolute', bottom:'0', width:'100%', height:'70%'}}>
				<div id="home-page-hot-wrapper">
					<div id="home-page-hot">
						<div id="home-page-hot-border">
							<div id="home-page-hot-content-background">
							<div id="home-page-inner-wrapper" style={{flexDirection:'column', alignItems:'self-end'}}>
								<h1 style={{fontWeight:'900', fontSize:'50px',marginBottom:'0',marginRight:'3rem'}}><span style={{color:'#d70a84'}}>Our</span> <span style={{color:'white'}}>mission</span><span style={{color:'#d70a84'}}>?</span></h1>
                                <p style={{color:'white', width:'50%', marginRight:'3rem', textAlign:'right'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
							</div>
						</div>
					</div>
				</div>
                <div id="page-content-wrapper" style={{position:'absolute', bottom:'0', width:'100%', height:'60%'}}>
				<div id="home-page-hot-wrapper">
					<div id="home-page-hot">
						<div id="home-page-hot-border">
							<div id="home-page-hot-content-background">
							<div id="home-page-inner-wrapper" style={{flexDirection:'column', marginLeft:'3rem', alignItems:'center'}}>
								<h1 style={{fontWeight:'900', fontSize:'50px',marginBottom:'0'}}><span style={{color:'white'}}>Why we</span> <span style={{color:'#d70a84'}}>love ERGO</span> <span style={{color:'white'}}>?</span></h1>
                                <p style={{color:'white', width:'50%', textAlign:'center'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
		</div>
	);
}
