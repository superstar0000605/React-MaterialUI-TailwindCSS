import { Grid, Box, Typography, Stack } from '@mui/material';
import LogoIcon from 'icons/LogoIcon';
import ApplyBetaBtn from '../applyBetaBtn';
import LandingFooter from 'layout/LandingLayout/footer/index';
import BackgroundShape from './BackgroundShape';
const ContactUs = () => {
    return (
        <Grid position="relative" container paddingLeft={'80px'} paddingRight={'120px'} backgroundColor="#192A3E">
            <Grid
                item
                md={5}
                xs={12}
                paddingLeft="20px"
                paddingTop="67px"
                borderLeft="1px solid rgba(217, 217, 217, 0.2)"
                borderRight="1px solid rgba(217, 217, 217, 0.2)"
            >
                <LogoIcon />
                <Stack direction="column" spacing={7} color="#D9D9D9" marginTop="44px">
                    <Typography fontSize="60px" fontFamily="Poppins" lineHeight="120%" textTransform="uppercase">
                        Ready to turn your data into actionable insights?
                    </Typography>
                    <Typography fontSize="20px" fontFamily="Poppins" paddingRight="60px">
                        Take the first step by Applying to the private beta of our platform today!
                    </Typography>
                    <Box zIndex="1000">
                        <ApplyBetaBtn />
                    </Box>
                </Stack>
            </Grid>
            <Grid item md={2} xs={12} borderRight="1px solid rgba(217, 217, 217, 0.2)" height="500px"></Grid>
            <Grid item md={5} xs={12} borderRight="1px solid rgba(217, 217, 217, 0.2)" height="314px" paddingTop="156px"></Grid>
            <Grid item md={12} marginLeft="-80px" marginTop="-500px">
                <BackgroundShape />
            </Grid>
            <LandingFooter />
        </Grid>
    );
};

export default ContactUs;
