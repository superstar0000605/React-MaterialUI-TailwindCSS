import ReactApexChart from 'react-apexcharts';
import PropTypes from 'prop-types';
import { useMediaQuery } from '@mui/material';
const BarChart = ({ series }) => {
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
            categories: [
                '01',
                '02',
                '03',
                '04',
                '05',
                '06',
                '07',
                '08',
                '09',
                '10',
                '11',
                '12',
                '13',
                '14',
                '15',
                '16',
                '17',
                '18',
                '19',
                '20',
                '21',
                '22',
                '23'
            ]
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
                        },
                        axisBorder: {
                            show: false
                        },
                        axisTicks: {
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
BarChart.propTypes = {
    series: PropTypes.array
};
export default BarChart;
