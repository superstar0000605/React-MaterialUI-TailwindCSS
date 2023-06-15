import { Grid, Typography, Box, Stack, CardMedia, Avatar } from '@mui/material';
import LogoEllipse from 'assets/images/landing/logoEllipse.svg';
import PropTypes from 'prop-types';

const Item = ({ item, index }) => {
    return (
        <Grid container sx={{ width: '100%' }}>
            <Grid item md={6}>
                <Grid container marginTop="160px">
                    <Grid item md={3} height="540px">
                        <CardMedia sx={{ height: '100%', objectFit: 'none' }} component="img" src={item.image1} alt={item.name} />
                    </Grid>
                    <Grid
                        item
                        md={9}
                        color="#D9D9D9"
                        sx={{
                            paddingLeft: '100px',
                            paddingRight: '40px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <Box sx={{ width: '560px', position: 'relative' }}>
                            <Typography fontSize="20px">{`0${index}`}</Typography>
                            <Typography fontSize="20px" margin={'20px 0px'}>
                                {item.description2}
                            </Typography>
                        </Box>
                        <Typography sx={{ position: 'absolute', bottom: '0', fontSize: '16px' }}>{`0${index} / 03`}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={6}>
                <Stack direction="column" width="516px">
                    <Typography marginTop={'16px'} color="#D9D9D9" fontSize="20px" marginBottom="78px">
                        {item.description1}
                    </Typography>
                    <Box sx={{ position: 'relative', height: '540px' }}>
                        <CardMedia component="img" src={item.image2} alt="algorithm" sx={{ width: '100%', height: 'auto' }} />
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '23px',
                                left: '-40px'
                            }}
                        >
                            <Avatar alt="profile user" src={LogoEllipse} sx={{ width: 80, height: 80 }} />
                        </Box>
                        <Typography
                            sx={{
                                position: 'absolute',
                                top: '380px',
                                textTransform: 'uppercase',
                                left: '187px',
                                width: '488px',
                                color: '#D9D9D9',
                                fontSize: '60px',
                                lineHeight: '121%',
                                fontFamily: 'Poppins'
                            }}
                        >
                            {item.name}
                        </Typography>
                    </Box>
                </Stack>
            </Grid>
        </Grid>
    );
};

Item.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
  }
export default Item;
