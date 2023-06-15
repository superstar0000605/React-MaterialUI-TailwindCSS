import ReactApexChart from 'react-apexcharts';
import PropTypes from 'prop-types';
import { useMediaQuery } from '@mui/material';
const CountryBarChart = ({ series }) => {
    const matchDownSM = useMediaQuery('(max-width: 600px)');

    const options = {
        chart: {
            type: 'bar',
            toolbar: {
                show: false
            },
        },
        plotOptions: {
            bar: {
                barHeight: '30%',
                horizontal: true,
                rangeBarOverlap: false,
                rangeBarGroupRows: true,
                colors: {
                    backgroundBarColors: ['#E7E7E8']
                }
            }
        },
        colors: ['#1E67D6'],
        dataLabels: {
            enabled: true,
            offsetX: 0,
            style: {
                fontSize: '12px',
                colors: ['#FFF']
            }
        },
        yaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            max: 100
        },
        xaxis: {
            categories: ['UK', 'France', 'Spain', 'Germany', 'USA', 'Other'],
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
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
        <ReactApexChart options={options} series={series} type="bar" width={matchDownSM ? 100 : '100%'} height={matchDownSM ? 400 : 260} />
    );
};
CountryBarChart.propTypes = {
    series: PropTypes.array
};
export default CountryBarChart;
