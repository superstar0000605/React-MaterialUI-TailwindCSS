import ReactApexChart from 'react-apexcharts';
import PropTypes from 'prop-types';
import { useMediaQuery } from '@mui/material';
const AgeBarChart = ({ series }) => {
    const matchDownSM = useMediaQuery('(max-width: 600px)');

    const options = {
        chart: {
            type: 'bar',
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                columnWidth: '30%'
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['<15', '15-18', '19-25', '26-35', '36-45', '46-60', '60+'],
        },
        yaxis: {
            labels: {
                show: false
            }
        },
        grid: {
            show: false
        },
        responsive: [
            {
                breakpoint: 600,
                options: {
                    plotOptions: {
                        bar: {
                            horizontal: true,
                            barHeight: '30%'
                        }
                    },
                    xaxis: {
                        labels: {
                            show: false
                        }
                    },
                    yaxis: {
                        labels: {
                            show: true
                        }
                    }
                }
            }
        ]
    };
    return (
        <ReactApexChart options={options} series={series} type="bar" width={matchDownSM ? 100 : '100%'} height={matchDownSM ? 400 : 200} />
    );
};
AgeBarChart.propTypes = {
    series: PropTypes.array
};
export default AgeBarChart;
