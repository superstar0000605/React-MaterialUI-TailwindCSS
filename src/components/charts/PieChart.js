import ReactApexChart from 'react-apexcharts';
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
const PieChart = ({ data }) => {
    const options = {
        chart: {
            width: 300,
            type: 'pie'
        },
        labels: data.labels,
        dataLabels: {
            enabled: false
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 280
                    },
                    legend: {
                        position: 'right'
                    }
                }
            }
        ]
    };
    return (
        <div id="chart">
            <ReactApexChart options={options} series={data.series} type="pie" width={300} />
        </div>
    );
};
PieChart.propTypes = {
    data: PropTypes.object
};
export default PieChart;
