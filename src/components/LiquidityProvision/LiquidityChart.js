import React, { Fragment, useRef } from 'react'

 // javascipt plugin for creating charts
 import Chart from "chart.js";
 // react plugin used to create charts
 import { Line } from "react-chartjs-2";

export default function FloorChart(props) {

    // const chartComponent = useRef(null);

    React.useEffect(()=> {
        if (window.Chart) {
            parseOptions(Chart, chartOptions());
        }
          
    },[window.Chart])


    //------ Chart Info ------
    const options = {
        scales: {
          yAxes: [
            {
              gridLines: {
                zeroLineColor: "none",
              },
              ticks: {},
              label: "none"
            },
          ],
          xAxes: [
            {
              gridLines: {
                color: "#5b0084",
                zeroLineColor: "transparent",
                // lineWidth: 2,
                
              },
              ticks: {},
            },
          ],
        },
      }

      const data ={
        labels: ["A", "B", "C", "D", "E", "F", "G", "H"],
        datasets: [
          {
            label: "Total",
            data: [0, 20, 10, 30, 15, 40, 20, 60],
          },
        ],
      }

    return (
        <Fragment>
            {/* <Button onClick={onToggle}>See Floor Chart</Button>           */}

            {/* <Collapse in={isOpen} animateOpacity unmountOnExit> */}
                <div>
                    <Line
                        data={data}
                        redraw
                        options={options}
                        height={"400"}
                        // id="chart-sales"
                        // className="chart-canvas"
                    />
                </div>
            {/* </Collapse> */}


        </Fragment>
    )
}


// Chart.js global options

const theme = {
    primary: "rgb(255, 255, 255, 0.8)"
}
function chartOptions() {
    // Options
    var options = {
      defaults: {
        global: {
          responsive: true,
          maintainAspectRatio: false,
          defaultColor: "rgb(255, 255, 255, 0.9)",
          defaultFontColor: "rgb(255, 255, 255, 0.9)",
          defaultFontFamily: "inherit",
          defaultFontSize: 14,
          layout: {
            padding: 0,
          },
          legend: {
            display: false,
            position: "bottom",
            labels: {
              usePointStyle: true,
              padding: 16,
            },
          },
          elements: {
            point: {
              radius: 0,
              backgroundColor: theme["primary"],
            },
            line: {
              tension: 0.4,
              borderWidth: 4,
              borderColor: theme["primary"],
              backgroundColor: "transparent",
              borderCapStyle: "rounded",
            },
            rectangle: {
              backgroundColor: theme["warning"],
            },
            arc: {
              backgroundColor: theme["primary"],
              borderColor: "white",
              borderWidth: 4,
            },
          },
          tooltips: {
            enabled: true,
            mode: "index",
            intersect: false,
          },
        },
        // doughnut: {
        //   cutoutPercentage: 83,
        //   legendCallback: function (chart) {
        //     var data = chart.data;
        //     var content = "";
  
        //     data.labels.forEach(function (label, index) {
        //       var bgColor = data.datasets[0].backgroundColor[index];
  
        //       content += '<span class="chart-legend-item">';
        //       content +=
        //         '<i class="chart-legend-indicator" style="background-color: ' +
        //         bgColor +
        //         '"></i>';
        //       content += label;
        //       content += "</span>";
        //     });
  
        //     return content;
        //   },
        // },
      },
    };
  
    // yAxes
    Chart.scaleService.updateScaleDefaults("linear", {
      gridLines: {
        borderDash: [2],
        borderDashOffset: [2],
        color: "darkgrey",
        drawBorder: false,
        drawTicks: false,
        lineWidth: 1,
        zeroLineWidth: 1,
        zeroLineColor: "darkgrey",
        zeroLineBorderDash: [2],
        zeroLineBorderDashOffset: [2],
      },
      ticks: {
        beginAtZero: true,
        padding: 10,
        callback: function (value) {
          if (!(value % 10)) {
            return value;
          }
        },
      },
    });
  
    // xAxes
    Chart.scaleService.updateScaleDefaults("category", {
      gridLines: {
        drawBorder: false,
        drawOnChartArea: false,
        drawTicks: false,
      },
      ticks: {
        padding: 20,
      },
    });
  
    return options;
  }
  

  // Parse global options
function parseOptions(parent, options) {
    for (var item in options) {
      if (typeof options[item] !== "object") {
        parent[item] = options[item];
      } else {
        parseOptions(parent[item], options[item]);
      }
    }
  }