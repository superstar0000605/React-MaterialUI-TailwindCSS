import { Box, Typography } from '@mui/material';
import AgeBarChart from 'components/charts/AgeBarChart';
import InterestPieChart from 'components/charts/InterestPieChart';
import PieChart from 'components/charts/PieChart';
const data = {
    labels: ['Languages', 'Marketing', 'Gaming', 'Dance', 'Others'],
    series: [37, 23, 10, 25, 5]
};
const InterestChartCard = () => {
    return (
        <Box padding="20px">
            <Typography fontSize="18px" color="#192A3E" paddingBottom="20px ">
                Interests
            </Typography>
            <InterestPieChart data={data}/>
        </Box>
    );
};

export default InterestChartCard;
