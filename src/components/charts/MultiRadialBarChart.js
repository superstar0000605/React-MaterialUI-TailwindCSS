import ReactApexChart from 'react-apexcharts';
export const MultiRadialBarChart = () => {
    const series = [78, 78, 78];
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
                hollow: {
                    size: '50%'
                },
                dataLabels: {
                    show: false,
                    name: {
                        fontSize: '22px'
                    },
                    value: {
                        fontSize: '16px'
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        formatter: function (w) {
                            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                            return 249;
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
        labels: ['Apples', 'Oranges', 'Bananas']
    };

    return <ReactApexChart options={options} series={series} type="radialBar" height={250}/>;
};
