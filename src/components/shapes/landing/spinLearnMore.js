import { Box } from '@mui/material';
import { LearnMore } from 'components/shapes/landing/LearnMore';
import { Arrow } from 'components/shapes/landing/Arrow';
import PropTypes from 'prop-types';
export const SpinLearnMore = ({ classes, width, fill, left }) => {
    const w = width / 5.76;
    const sw = width / 14.4;
    const le = (width * left) / 100;
    return (
        <Box width={w} height={w} position="relative" className={classes} left={le}>
            <LearnMore fill={fill} classes={'animate-[spin_10s_linear_infinite] z-10'} />
            <Box width={sw} height={sw} position="absolute" top="30%" left="30%">
                <Arrow />
            </Box>
        </Box>
    );
};
SpinLearnMore.propTypes = {
    classes: PropTypes.string,
    width: PropTypes.number.isRequired,
    fill: PropTypes.string.isRequired,
    left: PropTypes.number
};
