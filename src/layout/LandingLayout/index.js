/* eslint-disable no-unused-vars */
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

//assets
import Background from 'assets/images/auth/AuthBackground';

// material-ui
import { Box, Grid } from '@mui/material';

const LandingLayout = () => (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#192A3E' }}>
        <Grid container direction="column" justifyContent="flex-end">
            <Grid item xs={12} container justifyContent="center" alignItems="center">
                <Outlet />
            </Grid>
        </Grid>
    </Box>
);

LandingLayout.propTypes = {
    children: PropTypes.node
};

export default LandingLayout;
