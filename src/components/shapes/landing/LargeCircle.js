import { Box } from '@mui/material';
import PropTypes from 'prop-types';
export const LargeCircle = ({ classes, width }) => {
    const w = width / 3.2142;
    const le = width / 1.75;
    return (
        <Box className={classes} style={{left: le}}>
            <svg width={w} viewBox="0 0 250 250" fill="none">
                <circle cx="125" cy="125" r="125" fill="#109CF1" />
            </svg>
        </Box>
    );
};
LargeCircle.propTypes = {
    width: PropTypes.number.isRequired,
    classes: PropTypes.string
};