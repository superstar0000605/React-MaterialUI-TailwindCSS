import ReactApexChart from 'react-apexcharts';
export const RadialBarChart = () => {
    const series = [31];
    const options = {
        chart: {
            height: 350,
            type: 'radialBar'
        },
        plotOptions: {
            radialBar: {
                track: {
                    strokeWidth: "100%",
                },
                dataLabels: {
                    name: {
                        fontSize: '22px'
                    },
                    value: {
                        fontSize: '16px'
                    },
                    total: {
                        show: false,
                        // label: 'Total',
                        formatter: function (w) {
                            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                            return "";
                        }
                    }
                }
            }
        },
        stroke: {
            lineCap: "round",
            colors: ["red", "blue", "green"],
            width: 8
          },
        labels: ['31%']
    };

    return <ReactApexChart options={options} series={series} type="radialBar" height={250}/>;
};
