import MainCard from 'components/MainCard';
import { Grid, Typography, Box } from '@mui/material';
import AgeBarChart from 'components/charts/AgeBarChart';
import PieChart from 'components/charts/PieChart';
const data = {
    labels: ['Female', 'Male', 'Others'],
    series: [67, 23, 10]
};
const AgeChartCard = () => {
    return (
        <MainCard sx={{ borderRadius: '38px', padding: '15px 27px', height: '260px' }} content={false}>
            <Typography fontSize="18px" color="#192A3E" paddingBottom="20px ">
                Gender
            </Typography>
            <PieChart data={data} />
        </MainCard>
    );
};

export default AgeChartCard;
