import { Typography, Grid, Stack, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import  Logo from 'components/Logo';
import ApplyBetaBtn from '../applyBetaBtn';
import BackgroundShape from './BackgroundShape';

const Home = () => {
    return (
        <Grid container backgroundColor="#192A3E" height="800px">
            <Grid item md={12}>
                <Stack justifyContent="space-between" direction="row" alignItems="center" sx={{ padding: '32px 80px' }} spacing={2}>
                    <Logo />
                    <Stack direction="row" divider={<Divider orientation="vertical" />} spacing={4}>
                        <Link className="no-underline px-4 py-3 text-[#D9D9D9] text-base hover:underline" to="/about-us">
                            ABOUT US
                        </Link>
                        <Link className="no-underline px-4 py-3 text-[#D9D9D9] text-base hover:underline" to="/how-it-works">
                            HOW IT WORKS
                        </Link>
                        <ApplyBetaBtn />
                    </Stack>
                </Stack>
                <Grid container>
                    <Grid item md={7} sx={{ paddingLeft: '80px', marginTop: '100px' }}>
                        <Typography
                            variant="h1"
                            component="h2"
                            className="uppercase"
                            sx={{
                                fontFamily: 'Poppins',
                                fontSize: '60px',
                                fontWeight: '400',
                                color: '#D9D9D9',
                                textTransform: 'uppercase'
                            }}
                        >
                            Get Ready to Supercharge Your Analytics with Our Private Beta Release
                        </Typography>
                    </Grid>
                    <Grid item md={5}></Grid>
                </Grid>
            </Grid>
            <Grid item md={12}>
                <BackgroundShape />
            </Grid>
        </Grid>
    );
};

export default Home;
