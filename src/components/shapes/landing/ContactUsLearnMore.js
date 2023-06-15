import PropTypes from 'prop-types';
export const ContactUsLearnMore = ({ width, classes }) => {
    const w = width / 1.0607;
    return (
        <div className={classes}>
            <svg width={w} viewBox="0 0 1353 535" fill="none">
                <circle cx="1105" cy="125" r="125" fill="#109CF1" />
                <path d="M1105 118V527H0" stroke="#D9D9D9" strokeWidth="2" />
                <path
                    d="M1107 130L1165.3 299.409L1201.73 273.619L1257.02 453.753L1326.46 401.776L1347 527"
                    stroke="#D9D9D9"
                    strokeWidth="2"
                />
                <circle cx="1346.5" cy="528.5" r="6.5" fill="#FFB946" />
                <circle cx="1104.5" cy="525.5" r="6.5" fill="#FFB946" />
                <circle cx="1107.5" cy="125.5" r="6.5" fill="#FFB946" />
            </svg>
        </div>
    );
};

ContactUsLearnMore.propTypes = {
    width: PropTypes.number.isRequired,
    classes: PropTypes.string
};
