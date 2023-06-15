import PropTypes from 'prop-types';
export const VectorArrow = ({ width, classes }) => {
    const left = width / 1.31;
    const w = width / 5.6;
    return (
        <div className={classes} style={{ left: left }}>
            <svg width={`${w}`} viewBox="0 0 255 416" fill="none">
                <path d="M9 11L67.2955 180.409L103.728 154.619L159.021 334.753L228.457 282.776L249 408" stroke="#D9D9D9" strokeWidth="2" />
                <circle cx="248.5" cy="409.5" r="6.5" fill="#FFB946" />
                <circle cx="6.5" cy="406.5" r="6.5" fill="#FFB946" />
                <circle cx="6.5" cy="6.5" r="6.5" fill="#FFB946" />
            </svg>
        </div>
    );
};
VectorArrow.propTypes = {
    width: PropTypes.number.isRequired,
    classes: PropTypes.string
};
