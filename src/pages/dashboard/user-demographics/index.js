import { Grid, Stack, Typography, Box } from '@mui/material';
import { BlueLogOut } from 'icons/BlueLogOut';
import MainCard from 'components/MainCard';
import AgeChartCard from './AgeChartCard';
import GenderChartCard from './GenderChartCard';
import LocationCard from './LocationCard';
import InterestChartCard from './InterestChartCard';
import LanguageChartCard from './LanguageChartCard';

const UserDemographics = () => {
    return (
        <Grid container rowSpacing={3.5} columnSpacing={3.5} sx={{ paddingTop: { md: 0, xs: '120px' } }}>
            <Grid item md={12}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="h1" fontSize="25px" color="#192A3E">
                        User Demographics
                    </Typography>
                    <Typography fontSize="20px" color="#192A3E" sx={{ display: { xs: 'none', md: 'block' } }}>
                        FEB 14, 2023
                    </Typography>
                </Stack>
            </Grid>
            <Grid item md={12}>
                <Stack direction="row" justifyContent="end" alignItems="center">
                    <BlueLogOut />
                </Stack>
            </Grid>
            <Grid item md={8}>
                <AgeChartCard />
            </Grid>
            <Grid item md={4}>
                <GenderChartCard />
            </Grid>
            <Grid item md={12}>
                <LocationCard />
            </Grid>
            <Grid item md={6}>
                <InterestChartCard />
            </Grid>
            <Grid item md={6}>
                <LanguageChartCard />
            </Grid>
        </Grid>
    );
};

export default UserDemographics;
