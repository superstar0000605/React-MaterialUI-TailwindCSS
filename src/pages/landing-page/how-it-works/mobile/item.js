import { Typography, Stack, CardMedia, Box } from '@mui/material';
import PropTypes from 'prop-types';
const Item = ({ item }) => {
    return (
        <Stack direction='column-reverse' spacing={4} color="#D9D9D9">
            <Typography fontSize="16px" fontFamily="Poppins" paddingLeft={'22px'}>
                {item.title}
            </Typography>
            <Box>
                <CardMedia component="img" src={item.mobileImage} alt={item.title} />
            </Box>
        </Stack>
    );
};

Item.propTypes = {
    item: PropTypes.object.isRequired
};
export default Item;
