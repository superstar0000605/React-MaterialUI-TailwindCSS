import { useState } from 'react';
import { Box, Button, Grid, Typography, Tab, Stack, Avatar } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Link } from 'react-router-dom';
import MainCard from 'components/MainCard';
import BasicTable from 'components/tables/basictable';
import SelectGroupCard from 'components/cards/SelectGroupCard';
import { BlueLogOut } from 'icons/BlueLogOut';
import MostPopularCard from './MostPopular';
import NetworksCard from './NetworksCard';
import PageViewsChart from './PageViewsChart';
import TopPerform from './TopPerform';
import BounceRateCard from './BounceRateCard';
import TopKeywordList from './TopKeywordList';

const series = [
    {
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 86, 115, 35]
    }
];

const Content = () => {
    const [value, setValue] = useState('pageviews');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75} sx={{ paddingTop: { md: 0, xs: '120px' } }}>
            <Grid item md={12} width="100%">
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottom="1px solid rgba(0,0,0,0.1)"
                    paddingBottom="15px"
                >
                    <Typography variant="h1" fontSize="25px">Content</Typography>
                    <Link to="/logout">
                        <BlueLogOut />
                    </Link>
                </Stack>
            </Grid>
            <SelectGroupCard />
            <Grid item md={12}>
                <MostPopularCard />
            </Grid>
            <Grid item xs={12} md={4}>
                <NetworksCard />
            </Grid>
            <Grid item xs={12} md={8}>
                <MainCard content={false} className="shadow-md" sx={{ borderRadius: "20px", paddingTop: "4px", height: "450px" }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid item>
                                    <Typography variant="h5" className="text-base" paddingLeft="16px">
                                        Activity
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <TabList onChange={handleChange} aria-label="graphs">
                                        <Tab className="text-xs" label="Pageviews" value="pageviews" />
                                        <Tab className="text-xs" label="Clicks" value="clicks" />
                                        <Tab className="text-xs" label="Conversions" value="conversions" />
                                        <Tab className="text-xs" label="Comission" value="comission" />
                                    </TabList>
                                </Grid>
                            </Grid>
                        </Box>
                        <TabPanel value="pageviews">
                            <PageViewsChart />
                        </TabPanel>
                        <TabPanel value="clicks">Item Two</TabPanel>
                        <TabPanel value="conversions">Item Three</TabPanel>
                        <TabPanel value="comission">Item Three</TabPanel>
                    </TabContext>
                </MainCard>
            </Grid>
            <Grid item md={12}>
                <TopPerform />
            </Grid>
            <Grid item md={12}>
                <Grid container spacing={4.5}>
                    <Grid item md={4} xs={12}>
                        <BounceRateCard />
                    </Grid>
                    <Grid item md={8} xs={12}>
                        <TopKeywordList />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Content;
