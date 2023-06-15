import { Box } from '@mui/material';
import PropTypes from 'prop-types';
export const MobileLearnShape = ({ width }) => {
    return (
        <Box>
            <svg width={width} viewBox="0 0 360 160" fill="none">
                <path
                    d="M-74.9036 157.277H145.666L280.501 3.70312L298.638 63.3692L309.972 54.2859L327.174 117.729L348.777 99.4229L357.818 155.841"
                    stroke="#D9D9D9"
                    strokeWidth="0.623517"
                />
                <circle cx="357.973" cy="155.841" r="2.02643" fill="#FFB946" />
                <circle cx="145.666" cy="157.399" r="2.02643" fill="#FFB946" />
                <circle cx="280.657" cy="2.45514" r="2.02643" fill="#FFB946" />
            </svg>
        </Box>
    );
};
MobileLearnShape.propTypes = {
    width: PropTypes.number.isRequired
};
