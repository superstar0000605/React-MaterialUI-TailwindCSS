import { Grid, Box, Stack, Typography } from '@mui/material';
import BackgroundLearnMore from './BackgroundLearnMore';
import ApplyBetaBtn from 'pages/landing-page/applyBetaBtn';
import MobileFooter from 'layout/LandingLayout/footer/mobile';
const MobileContactUs = () => {
    return (
        <Grid position="relative" container backgroundColor="#192A3E" paddingTop="60px">
            <Grid item md={12}>
                <BackgroundLearnMore />
            </Grid>
            <Grid
                item
                md={5}
                xs={12}
                paddingLeft="20px"
                paddingTop="160px"
                paddingBottom="80px"
                borderBottom="1px solid rgba(217, 217, 217, 0.2)"
            >
                <Stack direction="column" spacing={7} color="#D9D9D9" marginTop="44px" alignItems="center">
                    <Typography fontSize="36px" fontFamily="Poppins" lineHeight="121%" textTransform="uppercase">
                        Ready to turn your data into actionable insights?
                    </Typography>
                    <Typography fontSize="20px" fontFamily="Poppins" paddingRight="60px">
                        Take the first step by Applying to the private beta of our platform today!
                    </Typography>
                    <Box>
                        <ApplyBetaBtn />
                    </Box>
                </Stack>
            </Grid>
            <Grid container padding="60px 20px">
                <MobileFooter />
            </Grid>
        </Grid>
    );
};

export default MobileContactUs;
