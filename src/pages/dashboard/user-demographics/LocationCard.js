import MainCard from 'components/MainCard';
import { Grid, Typography, Stack, CardMedia, Box } from '@mui/material';
import CountryBarChart from 'components/charts/CountryBarChart';
import image from 'assets/images/dashboard/map.png'
const series = [
    {
        data: [50, 14, 14, 4, 3, 15]
    }
]
const LocationCard = () => {
    return (
        <MainCard sx={{ borderRadius: '38px', padding: '15px 27px', height: '330px' }} content={false}>
            <Typography variant="h2" fontSize="18px" color="#192A3E">
                Location
            </Typography>
            <Stack direction="row" justifyContent="space-between" spacing={1}>
                <CountryBarChart series={series} />
                <Box>
                    <CardMedia component="img" src={image} alt="algorithm" sx={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                </Box>
            </Stack>
        </MainCard>
    );
};

export default LocationCard;
