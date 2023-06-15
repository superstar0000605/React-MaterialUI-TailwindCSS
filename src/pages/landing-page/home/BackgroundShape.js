import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { LargePoline } from 'components/shapes/landing/LargePoline';
import { VerticalLine } from 'components/shapes/landing/VerticalLine';
import { LightSymbol } from 'components/shapes/landing/LightSymbol';
import { FreeTrialSymbol } from 'components/shapes/landing/FreeTrialSymbol';
import { SpinLearnMore } from 'components/shapes/landing/spinLearnMore';

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
            <LargePoline width={windowSize[0]} classes="absolute left-0 top-[194px]" />
            <VerticalLine height={578} width={windowSize[0]} left={5.55} classes="absolute top-0" />
            <VerticalLine height={578} width={windowSize[0]} left={35.8} classes="absolute top-0" />
            <VerticalLine height={695} width={windowSize[0]} left={49.0} classes="absolute top-0" />
            <VerticalLine height={196} width={windowSize[0]} left={79.0} classes="absolute top-0" />
            <LightSymbol width={windowSize[0]} classes="absolute right-0 top-[20%]" />
            <FreeTrialSymbol classes="absolute left-[14.44%] top-[530px]" />
            <SpinLearnMore fill="#192A3E" width={windowSize[0]} left={57.5} classes="absolute top-[300px]" />
        </Container>
    );
};
export default BackgroundShape;
