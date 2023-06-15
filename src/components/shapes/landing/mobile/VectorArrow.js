import { Box, Avatar } from '@mui/material'
import LogoEllipse from 'assets/images/landing/logoEllipse.svg';
import PropTypes from 'prop-types';
export const VectorArrow = ({ width, classes }) => {
    const w = width / 1.05;
    return (
        <Box className={classes}>
            <svg width={w} viewBox="0 0 342 133" fill="none">
                <path
                    d="M340.094 129.6L333.569 89.823L311.512 106.333L295.5 60L283.5 74L263.859 3.49414V129.6H-0.000244141"
                    stroke="#D9D9D9"
                    strokeWidth="0.635294"
                />
                <circle cx="339.935" cy="130.076" r="2.06471" fill="#FFB946" />
                <circle cx="263.064" cy="129.124" r="2.06471" fill="#FFB946" />
                <circle cx="264.018" cy="2.06471" r="2.06471" fill="#FFB946" />
            </svg>
            <Avatar alt="logo" src={LogoEllipse} sx={{ width: 47, height: 47, transform: "translate(40px, -30px)" }} />
        </Box>
    );
};
VectorArrow.propTypes = {
    width: PropTypes.number.isRequired,
    classes: PropTypes.string
};