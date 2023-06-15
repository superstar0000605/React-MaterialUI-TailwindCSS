import { useState, useEffect } from 'react';
import { Grid, Typography, Box, Stack } from '@mui/material';
import Item from './item';
import Logo from 'components/Logo';
import CreatAccountImage from 'assets/images/landing/how-it-works/pic1.png';
import AddWebSiteImage from 'assets/images/landing/how-it-works/pic2.png';
import AnalyzingWebSiteImage from 'assets/images/landing/how-it-works/pic3.png';
import VisualizeDataImage from 'assets/images/landing/how-it-works/pic4.png';
import PredictFutureImage from 'assets/images/landing/how-it-works/pic5.png';
import ApplyBetaBtn from '../applyBetaBtn';
import LeftSideBackground from './LeftSideBackground';

const items = [
    {
        title: 'Sign up for our platform and create an account',
        image: CreatAccountImage
    },
    {
        title: ' Add your website to our platform by including a piece of code that we provide.',
        image: AddWebSiteImage
    },
    {
        title: ' Once connected, our platform will start analyzing your website data in real-time.',
        image: AnalyzingWebSiteImage
    },
    {
        title: 'Use our intuitive dashboard to explore and visualise your data, and gain valuable insights to improve your business.',
        image: VisualizeDataImage
    },
    {
        title: 'Take advantage of our machine learning algorithms to predict future trends and make data-driven decisions.',
        image: PredictFutureImage
    }
];
const HowItWorks = () => {
    const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });

    return (
        <Grid container width="100%" id="how-it-works" backgroundColor="#192A3E" color="#D9D9D9" position="relative">
            <Grid item md={4} xs={12} backgroundColor="#109CF1">
                <Typography color="#D9D9D9" fontSize="16px" paddingLeft="90px" marginTop="60px">
                    HOW IT WORKS
                </Typography>
                <LeftSideBackground width={windowSize[0]} classes="absolute top-0 left-[5%]" />
            </Grid>
            <Grid item md={8} xs={12} paddingBottom={'80px'}>
                <Grid container marginTop="40px">
                    <Grid
                        md={12}
                        item
                        width="100%"
                        display="flex"
                        justifyContent="flex-end"
                        alignItems="center"
                        paddingRight="98px"
                        paddingLeft="140px"
                    >
                        <Logo />
                    </Grid>
                    <Grid item paddingLeft={'140px'} paddingRight={'244px'}>
                        <Typography fontFamily="Poppins" fontSize={'60px'} textTransform="uppercase">
                            Get started with just a few clicks
                        </Typography>
                    </Grid>
                    <Stack direction="column" spacing={24} marginTop="96px" paddingRight={'100px'} paddingLeft={'140px'}>
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

export default HowItWorks;
