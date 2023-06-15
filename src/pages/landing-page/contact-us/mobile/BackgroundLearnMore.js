import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { VectorArrow } from 'components/shapes/landing/mobile/VectorArrow';
import { ContactLearnMore } from 'components/shapes/landing/mobile/ContactLearnMore';
import { LargeCircle } from 'components/shapes/landing/LargeCircle';

const BackgroundLearnMore = () => {
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
        <Box position="relative">
            <LargeCircle width={windowSize[0]} classes={'absolute top-[-65px]'} />
            <ContactLearnMore width={windowSize[0]} classes={'absolute top-[-65px]'} />
            <VectorArrow width={windowSize[0]} classes={'absolute left-0'} />
        </Box>
    );
};

export default BackgroundLearnMore;
