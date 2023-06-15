import PropTypes from 'prop-types';
export const LargePoline = ({ width, classes }) => {
    const w = width / 1.037;
    return (
        <div className={classes}>
            <svg width={`${w}`} viewBox="0 0 1389 500" fill="none">
                <path
                    d="M0 495.104H707.5L1140 2.5L1198.17 193.885L1234.53 164.75L1289.71 368.251L1359 309.532L1380 490.5"
                    stroke="#D9D9D9"
                    strokeWidth="2"
                />
                <circle cx="1380" cy="490.5" r="6.5" fill="#FFB946" />
                <circle cx="1140" cy="6.5" r="6.5" fill="#FFB946" />
                <circle cx="707.57" cy="493.5" r="6.5" fill="#FFB946" />
            </svg>
        </div>
    );
};
LargePoline.propTypes = {
    width: PropTypes.number.isRequired,
    classes: PropTypes.string
};
