import React from 'react'
import './Coming-Soon.css'
import topSectionRightImg from "../../assets/Elements/homePageRightImg.png";

function ComingSoon() {
  return (
    <div className='mx-2 mb-6 lg:mx-0 w-full flex flex-col justify-center xl:mr-16 items-center lg:items-start'>
      
      <header
				style={{
					backgroundImage: "linear-gradient(to bottom right, #190551,#420d7c)",
				}}
				className="border-4 border-[#bd0b83] rounded-[25px] max-w-[1400px] w-[70%] flex justify-center items-center rounded-3xl h-[600px] text-white"
			>
				<div className="lg:text-left lg:h-full lg:flex lg:justify-between items-center lg:ml-20">
          <h1 className="text-center font-bold text-sm sm:text-6xl my-0">Coming Soon...</h1>
				</div>
				
      
			</header>
    </div>
  )
}

export default ComingSoon;