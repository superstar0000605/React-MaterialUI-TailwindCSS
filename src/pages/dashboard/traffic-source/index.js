import { Grid, Stack, Typography, Box } from '@mui/material';
import DataSelect from './DataSelect';
import { BlueLogOut } from 'icons/BlueLogOut';
import StatusCardList from './StatusCardList';
import MainCard from 'components/MainCard';
import PieChart from 'components/charts/PieChart';
import PieCardItem from './PieCardItem';
import VistorsByTimeChart from './VisitorsByTimeChart';
import ReferralWebSitesTable from './ReferralWebSitesTable';
const userNames = ['Jack', 'John', 'Anna'];
const filterTimes = ['Feb 2', 'Feb 12', 'Mar 3'];
const pieData = [
    {
        title: 'Visits by device',
        data: {
            labels: ['Phone', 'Desktop'],
            series: [67, 33]
        }
    },
    {
        title: 'Search engines',
        data: {
            labels: ['Google', 'Safari', 'Firebox'],
            series: [24, 16, 60]
        }
    },
    {
        title: 'Social media',
        data: {
            labels: ['Facebook', 'Instagram', 'Linkedin', 'Tiktok', 'Others'],
            series: [12, 8, 24, 36, 20]
        }
    }
];
const TrafficSources = () => {
    return (
        <Grid container rowSpacing={3.5} sx={{ paddingTop: { md: 0, xs: '120px' } }}>
            <Grid item md={12} xs={6}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="h1" fontSize="25px" color="#192A3E">
                        Traffic sources
                    </Typography>
                    <Typography fontSize="20px" color="#192A3E" sx={{ display: { xs: 'none', md: 'block' } }}>
                        FEB 14, 2023
                    </Typography>
                </Stack>
            </Grid>
            <Grid item md={12} xs={6} width="100%">
                <Stack direction="row" justifyContent="end" alignItems="center">
                    <BlueLogOut />
                </Stack>
            </Grid>
            <Grid item md={12} width="100%">
                <StatusCardList />
            </Grid>
            <Grid item md={12} width="100%">
                <Grid container spacing={3.5} justifyContent="space-between">
                    {pieData.map((item, index) => {
                        return <PieCardItem key={index} item={item} />;
                    })}
                </Grid>
            </Grid>
            <Grid item md={12} width="100%">
                <Grid container direction={{ md: 'row', sx: 'column' }} spacing={3.5}>
                    <Grid item md={7} xs={12}>
                        <VistorsByTimeChart />
                    </Grid>
                    <Grid item md={5} xs={12}>
                        <ReferralWebSitesTable />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default TrafficSources;
