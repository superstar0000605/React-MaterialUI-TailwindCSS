import MainCard from 'components/MainCard';
import { Box, Typography, Stack, Grid } from '@mui/material';
import { RadialBarChart } from 'components/charts/RadialBarChart';
import Dot from 'components/@extended/Dot';
const BounceRateCard = () => {
    return (
        <MainCard content={false} sx={{ borderRadius: '20px', paddingBottom: '30px', height: '300px' }} className="shadow-md">
            <Box item md={12} borderBottom="1px solid rgba(217, 217, 217, 0.3)">
                <Typography variant="h2" fontSize="16px" padding="16px">
                    Bounce rate
                </Typography>
            </Box>
            <Stack direction="row" spacing={6} paddingLeft="16px" justifyContent="space-between" alignItems="center">
                <Box>
                    <Typography fontSize="16px">21.05</Typography>
                    <Typography fontSize="12px" color=" rgba(0, 0, 0, 0.45)">
                        Percentage of Bounce Rate
                    </Typography>
                </Box>
                <RadialBarChart />
            </Stack>
        </MainCard>
    );
};

export default BounceRateCard;
