import { Grid, Typography, Box, Stack, CardMedia, Avatar } from '@mui/material';
import LogoEllipse from 'assets/images/landing/logoEllipse.svg';
import PropTypes from 'prop-types';
const Item = ({ item, index }) => {
    return (
        <Grid container color="#D9D9D9">
            <Grid item xs={12}>
                <Stack direction="row" justifyContent="space-between" >
                    <Typography fontSize="16px"> ABOUT US</Typography>
                    <Typography fontSize="16px">{`0${index}`}</Typography>
                </Stack>
            </Grid>
            <Typography fontSize="20px" marginTop="30px" height="150px">
                {item.description2}
            </Typography>
            <Grid item xs={12} marginTop="40px">
                <Stack direction="column" spacing={3}>
                    <Box position="relative">
                        <CardMedia component="img" src={item.image2} alt="algorithm" sx={{ width: '100%', height: 'auto' }} />
                        <Box position="absolute" top="-24px" right="0px">
                            <Avatar alt="profile user" src={LogoEllipse} width="80" height="80" />
                        </Box>
                        <Typography
                            sx={{
                                position: 'absolute',
                                bottom: '50px',
                                textTransform: 'uppercase',
                                left: '12px',
                                fontSize: '36px',
                                lineHeight: '121%',
                                fontFamily: 'Poppins'
                            }}
                        >
                            {item.name}
                        </Typography>
                    </Box>
                </Stack>
            </Grid>
            <Grid xs={12} item marginTop="20px">
                <Typography color="#D9D9D9" fontSize="20px">
                    {item.description1}
                </Typography>
            </Grid>
        </Grid>
    );
};

Item.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
};
export default Item;
