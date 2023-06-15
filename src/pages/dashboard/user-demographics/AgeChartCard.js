import MainCard from 'components/MainCard';
import { Grid, Typography, Box } from '@mui/material';
import AgeBarChart from 'components/charts/AgeBarChart';
const series = [
    {
        data: [23, 36, 12, 45, 24, 15, 1]
    }
]
const AgeChartCard = () => {
    return (
        <MainCard sx={{ borderRadius: '38px', padding: '15px 27px', height: '260px' }} content={false}>
            <Typography fontSize="18px" color="#192A3E">
                Age
            </Typography>
                <AgeBarChart series={series}/>
        </MainCard>
    );
};

export default AgeChartCard;
