import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { SpinLearnMore } from 'components/shapes/landing/spinLearnMore';
import { VectorArrow } from 'components/shapes/landing/VectorArrow';
import { ContactUsLearnMore } from 'components/shapes/landing/ContactUsLearnMore';
const BackgroundShape = () => {
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
        <Container position="relative" width="100%">
            <ContactUsLearnMore width={windowSize[0]} classes="absolute left-0 top-[150px]" />
            <SpinLearnMore fill="transparent" width={windowSize[0]} classes="absolute left-[56%] top-[150px]" />
            {/* <VectorArrow width={windowSize[0]} classes="absolute top-[270px]" /> */}
        </Container>
    );
};
export default BackgroundShape;
