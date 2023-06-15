import { Box } from "@mui/material"
import PropTypes from 'prop-types';
export const VerticalLine = ({ height, classes, width, left }) => {
    const le = width * left / 100;
    return (
        <Box className={classes} left={le}>
            <svg width="1" height={`${height}`} viewBox={`0 0 1 ${height}`} fill="none">
                <line x1="0.5" x2="0.5" y2={`${height}`} stroke="#D9D9D9" strokeOpacity="0.2" />
            </svg>
        </Box>
    );
};
VerticalLine.propTypes = {
    height: PropTypes.number.isRequired,
    classes: PropTypes.string,
    width: PropTypes.number,
    left: PropTypes.number
};