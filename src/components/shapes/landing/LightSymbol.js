import { PropTypes } from 'prop-types';
export const LightSymbol = ({ width, classes }) => {
    const w = width / 12.2;
    return (
        <div className={classes}>
            <svg width={w} viewBox="0 0 118 435" fill="none">
                <path
                    d="M94.5383 213.408L0.644401 301.619L15.5 0.000366211L45.4017 201.753L177.702 90.2775L118.5 435L94.5383 213.408Z"
                    fill="#FFB946"
                />
            </svg>
        </div>
    );
};
LightSymbol.propTypes = {
    width: PropTypes.number.isRequired,
    classes: PropTypes.string
};
