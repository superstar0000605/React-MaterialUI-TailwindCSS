import { Typography, Grid, Box, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from 'components/Logo';
import ApplyBetaBtn from '../../applyBetaBtn';
import LearnBackground from './LearnBackground';
import { FreeTrial } from 'components/shapes/landing/mobile/FreeTrial';
import { MobileLightSymbol } from 'components/shapes/landing/mobile/MobileLightSymbol';
import { MobileArrow } from 'components/shapes/landing/mobile/MobileArrow';

const MobileHome = () => {
    return (
        <Grid container backgroundColor="#192A3E" paddingBottom="40px">
            <Grid item xs={12} position="relative">
                <Stack
                    justifyContent="space-between"
                    direction="row"
                    alignItems="center"
                    paddingRight="40px"
                    paddingLeft="20px"
                    paddingTop="20px"
                    spacing={1}
                >
                    <Logo />
                    <Stack direction="row" spacing={4}>
                        <Link className="no-underline text-[#D9D9D9] text-base hover:underline" to="/about-us">
                            ABOUT US
                        </Link>
                        <Link className="no-underline text-[#D9D9D9] text-base hover:underline" to="/how-it-works">
                            HOW IT WORKS
                        </Link>
                    </Stack>
                </Stack>
                <LearnBackground />
            </Grid>
            <Grid container>
                <Grid item xs={12} paddingLeft="24px" marginTop="24px" paddingRight="40px">
                    <Typography
                        variant="h1"
                        component="h2"
                        className="uppercase"
                        sx={{
                            fontFamily: 'Poppins',
                            fontSize: '36px',
                            fontWeight: '400',
                            color: '#D9D9D9',
                            textTransform: 'uppercase'
                        }}
                    >
                        Get Ready to Supercharge Your Analytics with Our Private Beta Release
                    </Typography>
                </Grid>
                <Grid item xs={12} paddingLeft="36px" marginTop="20px">
                    <FreeTrial />
                </Grid>
                <Grid item xs={12} paddingLeft="30px">
                    <Stack direction="row" spacing={2} justifyContent="space-between">
                        <Box marginTop="34px">
                            <ApplyBetaBtn />
                        </Box>
                        <Box marginTop="10px">
                            <MobileLightSymbol />
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={12} display="flex" justifyContent="center" marginTop="-60px">
                    <MobileArrow />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default MobileHome;
