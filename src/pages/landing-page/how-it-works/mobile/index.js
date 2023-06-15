import { Grid, Typography, Box, Stack } from '@mui/material';
import Item from './item';
import Logo from 'components/Logo';
import MobileCreatAccountImage from 'assets/images/landing/how-it-works/mobile1.svg';
import MobileAddWebSiteImage from 'assets/images/landing/how-it-works/mobile2.svg';
import MobileAnalyzingWebSiteImage from 'assets/images/landing/how-it-works/mobile3.svg';
import MobileVisualizeDataImage from 'assets/images/landing/how-it-works/mobile4.svg';
import MobilePredictFutureImage from 'assets/images/landing/how-it-works/mobile5.svg';
import ApplyBetaBtn from '../../applyBetaBtn';

const items = [
    {
        title: 'Sign up for our platform and create an account',
        mobileImage: MobileCreatAccountImage
    },
    {
        title: ' Add your website to our platform by including a piece of code that we provide.',
        mobileImage: MobileAddWebSiteImage
    },
    {
        title: ' Once connected, our platform will start analyzing your website data in real-time.',
        mobileImage: MobileAnalyzingWebSiteImage
    },
    {
        title: 'Use our intuitive dashboard to explore and visualise your data, and gain valuable insights to improve your business.',
        mobileImage: MobileVisualizeDataImage
    },
    {
        title: 'Take advantage of our machine learning algorithms to predict future trends and make data-driven decisions.',
        mobileImage: MobilePredictFutureImage
    }
];
const MobileHowItWorks = () => {
    return (
        <Grid container width="100%" id="how-it-works" backgroundColor="#192A3E" color="#D9D9D9" position="relative">
            <Grid item xs={12} paddingBottom="76px">
                <Grid container marginTop="40px">
                    <Grid
                        item
                        width="100%"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        paddingRight="16px"
                        paddingLeft="20px"
                        paddingBottom="40px"
                    >
                        <Typography color="#D9D9D9" fontSize="16px">
                            HOW IT WORKS
                        </Typography>
                        <Logo />
                    </Grid>
                    <Grid item paddingLeft="20px">
                        <Typography fontFamily="Poppins" fontSize="36px" textTransform="uppercase">
                            Get started with just a few clicks
                        </Typography>
                    </Grid>
                    <Stack direction="column" spacing={7} marginTop="96px">
                        {items.map((item, index) => {
                            return <Item key={index} item={item} />;
                        })}
                        <Box textAlign="center">
                            <ApplyBetaBtn />
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default MobileHowItWorks;
