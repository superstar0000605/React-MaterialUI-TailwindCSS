import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import Chart from 'react-apexcharts';

// chart options
const areaChartOptions = {
    chart: {
        height: 280,
        type: 'area',
        toolbar: {
            show: false
        },
        redrawOnParentResize: true,
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 2
    },
    grid: {
        show: true,
        strokeDashArray: 0
    }
};

// ==============================|| INCOME AREA CHART ||============================== //

const IncomeAreaChart = ({ series }) => {
    const theme = useTheme();

    const { primary, secondary } = theme.palette.text;
    const line = theme.palette.divider;

    const [options, setOptions] = useState(areaChartOptions);

    useEffect(() => {
        setOptions((prevState) => ({
            ...prevState,
            colors: [theme.palette.primary.main, theme.palette.primary[700]],
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                axisBorder: {
                    show: true,
                    color: line
                },
                tickAmount: 11
            },
            yaxis: {
                labels: {
                    style: {
                        colors: [secondary]
                    },
                    formatter: (val) => {
                        return val + 'K';
                    }
                },
                axisBorder: {
                    show: true,
                    color: line
                }
            },
            grid: {
                borderColor: line,
                show: true
            },
            tooltip: {
                theme: 'light'
            }
        }));
    }, [primary, secondary, line, theme]);

    return <Chart options={options} series={series} type="area" height={280} />;
};

IncomeAreaChart.propTypes = {
    series: PropTypes.array
};

export default IncomeAreaChart;
