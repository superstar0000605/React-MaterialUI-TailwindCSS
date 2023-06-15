import { Typography, Grid, Stack, Box } from '@mui/material';
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
const data = [
    {
        title: 'Main Page',
        count: '873',
        percentage: 2.5,
        isLoss: false
    },
    {
        title: 'Categories',
        count: '650',
        percentage: 4.7,
        isLoss: true
    },
    {
        title: 'Sale',
        count: '600',
        percentage: 1.28,
        isLoss: true
    },
    {
        title: 'Special Offer',
        count: '432',
        percentage: 1.99,
        isLoss: false
    },
    {
        title: 'How to find',
        count: '259',
        percentage: 3.26,
        isLoss: false
    },
    {
        title: 'Contacts',
        count: '120',
        percentage: 1.1,
        isLoss: true
    },
    {
        title: 'Sign Up',
        count: '67',
        percentage: 2.15,
        isLoss: false
    }
];
const MostPopularCard = () => {
    return (
        <MainCard sx={{ borderRadius: '20px' }} content={false}>
            <Grid container>
                <Grid item md={12} borderBottom="1px solid rgba(217, 217, 217, 0.3)">
                    <Typography variant="h2" fontSize="16px" padding="16px">
                        Most popular pages
                    </Typography>
                </Grid>
                <Grid item md={12} padding="16px" width="100%">
                    <Stack direction="row" spacing={2} justifyContent="space-around">
                        {data.map((item, index) => (
                            <Box key={index} borderRight="1px solid rgba(217, 217, 217, 0.3)" sx={{ '&:last-child': { borderRight: 0 } }}>
                                <AnalyticEcommerce
                                    title={item.title}
                                    count={item.count}
                                    percentage={item.percentage}
                                    isLoss={item.isLoss}
                                />
                            </Box>
                        ))}
                    </Stack>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default MostPopularCard;
