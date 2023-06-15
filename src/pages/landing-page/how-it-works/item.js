import { Typography, Stack, Avatar, CardMedia, Box } from '@mui/material';
import PropTypes from 'prop-types';
const Item = ({ item }) => {
    return (
        <Stack direction={'column'} spacing={5} color="#D9D9D9">
            <Typography fontSize="20px">
                {item.title}
            </Typography>
            <Box>
                <CardMedia component="img" src={item.image} alt={item.title} />
            </Box>
        </Stack>
    );
};

Item.propTypes = {
    item: PropTypes.object.isRequired
};
export default Item;
