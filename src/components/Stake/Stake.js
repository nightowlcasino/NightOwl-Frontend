import React, { useState } from "react";
import Chart from "react-apexcharts";
import './Stake.css'
import topSectionRightImg from "../../assets/Elements/homePageRightImg.png";

const Stake = ()=> {
    const [options, setOptions] = useState({
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          }
        ]
      });

    const [series, setSeries] = useState([
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
          colors: ['#F44336', '#E91E63', '#9C27B0']
        }
      ]);
      

    return (
      <div className="flex flex-col gap-16 mx-2 lg:mx-0 max-w-full justify-center items-center xl:items-start xl:ml-20 2xl:items-center">
       <header
				style={{
					backgroundImage: "linear-gradient(to bottom right, #190551,#420d7c)",
				}}
				className="border-4 border-[#bd0b83] rounded-[25px] max-w-[1150px] w-[80%] 2xl:w-[90%] flex flex-col lg:flex-row lg:gap-12 xl:gap-8 justify-evenly lg:justify-between items-start object-contain rounded-[25px] h-[400px] text-white lg:mr-50"
			>
				<div className="lg:text-left lg:h-full lg:flex flex-col lg:justify-center gap-5 items-start mx-8 lg:ml-20">
          <h1 className="font-bold text-4xl xl:text-6xl tracking-wide min-w-[20rem]">Become a house!</h1>
            <p className="xl:min-w-[40rem]">By staking your coins you are providing liquidity for other people to <br/>
            play their favourite games and have fun.</p>
            <button style={{backgroundImage: "linear-gradient(to right, #420d7c,#bd0b83)", lineHeight:"1.6"}}
            className="w-[60%] h-[40px] lg:w-[200px] lg:h-[50px] rounded-3xl text-lg">STAKE NOW</button>
				</div>
				
				

			</header>

        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={options}
              series={series}
              type="bar"
              width="500"
            />
          </div>
        </div>
        <div className='mx-2 lg:mx-0 max-w-full flex flex-col justify-center xl:mr-16 items-center lg:items-start'>
      <div className='w-full bg-red-500'>
        
      </div>
    </div>
      </div>

      
    );
}


export default Stake;