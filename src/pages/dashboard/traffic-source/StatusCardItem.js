import { Box, Typography, Stack } from '@mui/material'
import PropTypes from 'prop-types'
const StatusCardItem = ({sx, title, value, unit}) => {
    return (
        <Box padding="24px">
            <Typography variant="h6" sx={{ fontSize: {md: "15px", xs: "10px"}}} color="#192A3E">{title}</Typography>
            <Stack direction="row" alignItems="end">
                <Typography sx={{ fontSize: { md: "50px", xs: "32px" } }} fontSize="50px" color="#1E67D6">{value}</Typography>
                <Typography lineHeight="3.57" paddingLeft="15px">{unit && unit}</Typography>
            </Stack>
        </Box>
    );
};
StatusCardItem.propTypes = {
    sx: PropTypes.object,
    title: PropTypes.string,
    value: PropTypes.string,
    unit: PropTypes.string
};
export default StatusCardItem;