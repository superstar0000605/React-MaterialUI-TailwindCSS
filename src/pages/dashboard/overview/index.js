/* eslint-disable no-unused-vars */
import { useState } from 'react';

// material-ui
import { Box, Button, Grid, Typography, Tab, Stack, Avatar } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Link } from 'react-router-dom';
// project import
import IncomeAreaChart from './chart/IncomeAreaChart';
import MainCard from 'components/MainCard';
import AnalyticCard from './AnalyticCard';
// assets
import BasicTable from 'components/tables/basictable';
import LiveDataTable from './LiveDataTabel';
import SelectGroupCard from 'components/cards/SelectGroupCard';
import { BlueLogOut } from 'icons/BlueLogOut';

const series = [
    {
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 86, 115, 35]
    }
];

const OverView = () => {
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
                    <Typography variant="h1" fontSize="25px">
                        Overview
                    </Typography>
                    <Link to="/logout">
                        <BlueLogOut />
                    </Link>
                </Stack>
            </Grid>
            <SelectGroupCard />
            <Grid item md={12}>
                <AnalyticCard />
            </Grid>
            <Grid item xs={12} md={7}>
                <MainCard content={false} className="p-5 shadow-md h-96">
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid item>
                                    <Typography variant="h5" className="text-base">
                                        Timeframe
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
                        <TabPanel value="pageviews" className="px-0 py-2">
                            <IncomeAreaChart series={series} />
                        </TabPanel>
                        <TabPanel value="clicks">Item Two</TabPanel>
                        <TabPanel value="conversions">Item Three</TabPanel>
                        <TabPanel value="comission">Item Three</TabPanel>
                    </TabContext>
                </MainCard>
            </Grid>
            <Grid item xs={12} md={5}>
                <MainCard content={false} className="p-5 shadow-md h-96">
                    <Box className="py-3" sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item>
                                <Typography variant="h5" className="text-base">
                                    Networks
                                </Typography>
                            </Grid>
                            <Grid item />
                        </Grid>
                    </Box>
                    <Box>
                        <BasicTable />
                    </Box>
                </MainCard>
            </Grid>

            {/* row 4 */}
            <Grid item xs={12} md={12} lg={12}>
                <MainCard content={false} className="px-5 py-8 shadow-md h-96">
                    <Grid container alignItems="center" justifyContent="space-start" columnSpacing={3.5}>
                        <Grid item>
                            <Typography variant="h5" className="text-base">
                                Networks
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" className="rounded-[20px] text-black border-black px-[10px] py-[3px] text-[10px]">
                                Live Data
                            </Button>
                        </Grid>
                    </Grid>
                    <Box className="pt-5">
                        <LiveDataTable />
                    </Box>
                </MainCard>
            </Grid>
        </Grid>
    );
};

export default OverView;
