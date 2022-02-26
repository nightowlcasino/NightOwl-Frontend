import React, { useState } from "react";
import Chart from "react-apexcharts";
import './Stake.css'

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
      <div className="app">
        <div className="text-content">
            <h1>Become a house!</h1>
            <p>By staking your coins you are providing liquidity for other people to <br/>
            play their favourite games and have fun.</p>
            <button>STAKE NOW</button>
        </div>

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
      </div>
    );
}


export default Stake;