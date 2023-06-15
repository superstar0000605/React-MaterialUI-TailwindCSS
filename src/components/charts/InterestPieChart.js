import ReactApexChart from 'react-apexcharts';
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
const InterestPieChart = ({ data }) => {
    const options = {
        chart: {
            width: 300,
            type: 'pie'
        },
        labels: data.labels,
        dataLabels: {
            enabled: false
        },
        legend: {
            position: 'left'
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 280
                    },
                    legend: {
                        position: 'left'
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
InterestPieChart.propTypes = {
    data: PropTypes.object
};
export default InterestPieChart;
