import { Grid } from '@mui/material';
import { lazy } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Loadable from 'components/Loadable';
const AboutUs = Loadable(lazy(() => import('./about-us')));
const ContactUs = Loadable(lazy(() => import('./contact-us')));
const Home = Loadable(lazy(() => import('./home')));
const HowItWorks = Loadable(lazy(() => import('./how-it-works')));
const MobileAboutUs = Loadable(lazy(() => import('./about-us/mobile')));
const MobileContactUs = Loadable(lazy(() => import('./contact-us/mobile')));
const MobileHome = Loadable(lazy(() => import('./home/mobile')));
const MobileHowItWorks = Loadable(lazy(() => import('./how-it-works/mobile')));

const LandingPage = () => {
    const matchesMD = useMediaQuery('(max-width: 900px)');
    return (
        <Grid container direction="column" margin="0 auto">
            {matchesMD ? (
                <>
                    <MobileHome />
                    <MobileAboutUs />
                    <MobileHowItWorks />
                    <MobileContactUs />
                </>
            ) : (
                <>
                    <Home />
                    <AboutUs />
                    <HowItWorks />
                    <ContactUs />
                </>
            )}
        </Grid>
    );
};

export default LandingPage;
