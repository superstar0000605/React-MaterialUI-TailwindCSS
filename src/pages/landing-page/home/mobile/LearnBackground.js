import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { MobileLearnShape } from "components/shapes/landing/mobile/MobileLearnShape";
import { MobileSpinLearnMore } from 'components/shapes/landing/mobile/mobileSpinLearnMore';
import { VerticalLine } from 'components/shapes/landing/VerticalLine';

const LearnBackground = () => {
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
        <Box>
            <MobileLearnShape width={windowSize[0]} />
            <Box position="absolute" top="40%" left="40%">
                <MobileSpinLearnMore width={windowSize[0]} />
            </Box>
            <VerticalLine classes="absolute top-0 left-[20px]" height={578} width={windowSize[0]} />
        </Box>
    );
};

export default LearnBackground;