export const LogoEllipse = () => {
    return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="40" fill="#FFB946" />
            <mask id="mask0_138_679" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="20" y="17" width="40" height="46">
                <rect x="20" y="17" width="40" height="45.7143" fill="url(#pattern0)" />
            </mask>
            <g mask="url(#mask0_138_679)">
                <rect x="20" y="17" width="40" height="45.7143" fill="url(#pattern1)" />
                <rect x="20" y="17" width="40" height="45.7143" fill="#109CF1" />
            </g>
            <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_138_679" transform="matrix(0.00179687 0 0 0.00155405 -0.90625 -0.405405)" />
                </pattern>
                <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_138_679" transform="matrix(0.00179687 0 0 0.00155405 -0.90625 -0.405405)" />
                </pattern>
            </defs>
        </svg>
    );
};
