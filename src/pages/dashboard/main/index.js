/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { data } from 'data.js';
// material-ui
import { Stack, Box, Button, Grid, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import MainCard from 'components/MainCard';

const DashboardDefault = () => {
    return (
        <Grid container sx={{ padding: { md: '42px', xs: '102px 30px' } }}>
            <Stack direction="row" justifyContent="space-between" width="100%">
                <Typography color="#192A3E" sx={{ fontSize: { md: '50px', xs: '30px' } }}>
                    Welcome back, Jane Doe!
                </Typography>
                <Typography fontSize="20px" color="#323C47" sx={{ display: { xs: 'none', md: 'block' } }}>
                    FEB 14, 2023
                </Typography>
            </Stack>
            <Grid item md={12}>
                <Typography sx={{ fontSize: { md: '20px', xs: '16px' } }} marginTop="12px" color="#323C47">
                    Select the required KPI preference
                </Typography>
            </Grid>
            <Grid item md={12} marginTop="42px">
                <Grid container columnSpacing={3.5} rowSpacing={3.5}>
                    {data.dashboard.map((item, index) => (
                        <Grid item md={4} xs={12} key={index}>
                            <Link to={item.url} style={{ textDecoration: 'none' }}>
                                <MainCard sx={{ width: '100%', height: '300px' }} className="shadow-md">
                                    <Typography fontSize="26px" textAlign="left" paddingTop="20px" paddingLeft="12px">
                                        {item.title}
                                    </Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <CardMedia
                                            component="img"
                                            src={item.image}
                                            alt={item.title}
                                            sx={{ objectFit: 'none', width: '200px', height: '200px' }}
                                        />
                                    </Box>
                                </MainCard>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default DashboardDefault;
