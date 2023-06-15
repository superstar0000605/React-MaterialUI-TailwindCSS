import { Box, Typography } from '@mui/material';
import AgeBarChart from 'components/charts/AgeBarChart';
import InterestPieChart from 'components/charts/InterestPieChart';
import LanguagePieChart from 'components/charts/LanguagePieChart';
import PieChart from 'components/charts/PieChart';
const data = {
    labels: ['English', 'French', 'Spanish'],
    series: [67, 23, 10]
};
const LanguageChartCard = () => {
    return (
        <Box padding="20px">
            <Typography fontSize="18px" color="#192A3E" paddingBottom="20px ">
                Language
            </Typography>
            <LanguagePieChart data={data}/>
        </Box>
    );
};

export default LanguageChartCard;
