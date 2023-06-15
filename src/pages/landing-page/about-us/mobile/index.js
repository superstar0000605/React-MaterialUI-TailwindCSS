import { Grid, Typography, Stack } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import Item from './item';
import AnalyticImage from 'assets/images/landing/about-us/analytic.png';
import AlgorithmImage from 'assets/images/landing/about-us/algorithm.png';
import ProvidingImage from 'assets/images/landing/about-us/providing.png';
import { NextIcon } from 'components/shapes/landing/NextIcon';
import { PrevIcon } from 'components/shapes/landing/PrevIcon';
import '../carousel.css';

const MobileAboutUs = () => {
    const items = [
        {
            name: 'Your analytics',
            description1: 'Our platform is here to help businesses unlock valuable insights from their data.',
            description2: 'data-driven solutions to businesses of all sizes',
            image1: ProvidingImage,
            image2: AnalyticImage
        },
        {
            name: 'algorithms and intuitive',
            description1: 'Team of dedicated developers and data scientists. Ability to track user behavior across multiple channels',
            description2:
                'We utilise advanced machine learning algorithms and intuitive data visualisation tools to make data analysis easy and accessible for all.',
            image1: AnalyticImage,
            image2: AlgorithmImage
        },
        {
            name: 'providing everything ',
            description1: 'Optimize their online presence and improve engagement with their audience',
            description2:
                'Our platform is suitable for both small business owners and large corporations, providing everything needed to transform raw data into actionable insights.',
            image1: AlgorithmImage,
            image2: ProvidingImage
        }
    ];
    return (
        <Stack direction="column" width="100%" backgroundColor="#192A3E" padding="80px 20px" position="relative">
            <Carousel
                id="about-us"
                animation="slide"
                NextIcon={<NextIcon />}
                PrevIcon={<PrevIcon />}
                navButtonsAlwaysInvisible
                indicators={false}
            >
                {items.map((item, i) => (
                    <Item key={i} item={item} index={i + 1} />
                ))}
            </Carousel>
            <Stack direction="row" spacing={1.5} marginTop="20px">
                <PrevIcon />
                <NextIcon />
            </Stack>
        </Stack>
    );
};

export default MobileAboutUs;
