import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';

// chart options
const areaChartOptions = {
    chart: {
        height: "auto",
        type: 'area',
        toolbar: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 2
    },
    grid: {
        strokeDashArray: 0
    }
};

// ==============================|| INCOME AREA CHART ||============================== //

const PageViewsChart = ({ slot }) => {
    const theme = useTheme();

    const { primary, secondary } = theme.palette.text;
    const line = theme.palette.divider;

    const [options, setOptions] = useState(areaChartOptions);

    useEffect(() => {
        setOptions((prevState) => ({
            ...prevState,
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                axisBorder: {
                    show: true,
                },
                tickAmount: 11
            },
            yaxis: {
                labels: {
                    style: {
                        colors: [secondary]
                    }
                }
            },
            grid: {
                borderColor: line
            },
            tooltip: {
                theme: 'light'
            },
            legend: {
                show: false
            }
        }));
    }, [primary, secondary, line, theme]);

    const [series, setSeries] = useState([
        {
            name: 'Page Views',
            data: [0, 86, 28, 115, 48, 210, 136]
        },
        {
            name: 'Sessions',
            data: [0, 43, 14, 56, 24, 105, 68]
        },
        {
            name: 'Sessions',
            data: [0, 43, 14, 56, 24, 105, 68]
        }
    ]);

    useEffect(() => {
        setSeries([
            {
                name: 'Page Views',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 86, 115, 35]
            },
            {
                name: 'Sessions',
                data: [110, 60, 150, 35, 60, 36, 26, 45, 65, 52, 53, 41]
            },
            {
                name: 'Sessions',
                data: [11, 6, 50, 65, 40, 76, 126, 145, 95, 72, 153, 141]
            }
        ]);
    }, [slot]);

    return <ReactApexChart options={options} type="line" series={series} height={350} />;
};

PageViewsChart.propTypes = {
    slot: PropTypes.string
};

export default PageViewsChart;
