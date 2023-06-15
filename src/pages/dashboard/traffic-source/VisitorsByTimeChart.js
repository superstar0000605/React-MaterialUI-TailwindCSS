import MainCard from 'components/MainCard';
import { Typography, Box } from '@mui/material';
import { lazy } from 'react';
import Loadable from 'components/Loadable';
const BarChart = Loadable(lazy(() => import('components/charts/BarChart')));
const VistorsByTimeChart = () => {
    const series = [
        {
            data: [23, 2, 12, 3, 14, 15, 8, 12, 4, 9, 18, 11, 9, 8, 11, 17, 23, 25, 15, 10, 11, 5, 12]
        }
    ];
    return (
        <MainCard content={false} sx={{ borderRadius: '38px' }}>
            <Box borderBottom="1px solid #192A3E">
                <Typography variant="h2" padding="15px 25px" fontSize="18px" color="#192A3E">
                    Visitors by time
                </Typography>
            </Box>
            <Box sx={{paddingLeft: {md: 0, xs: "30px"}}}>
                <BarChart series={series} />
            </Box>
        </MainCard>
    );
};

export default VistorsByTimeChart;
