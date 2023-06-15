import PropTypes from 'prop-types';

// material-ui
import { Box, Chip, Grid, Stack, Typography, FormControl, Select, MenuItem } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// assets
import { RiseOutlined, FallOutlined } from '@ant-design/icons';

// ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //
const SelectCard = ({ title, contents }) => {
    return (
        <MainCard content={false} sx={{padding: '8px 18px', borderRadius: "20px"}} className="shadow-md">
            <Stack>
                <Grid container alignItems="center" className="flex justify-between">
                    <Grid item className="pl-3">
                        <Typography variant="h5" color="inherit" className="text-base">
                            {title}:
                        </Typography>
                    </Grid>
                    <Grid item>
                        <FormControl variant={'standard'} sx={{ m: 1, minWidth: 120 }}>
                            <Select displayEmpty inputProps={{ 'aria-label': 'Without label' }} disableUnderline>
                                {contents.map((content, index) => (
                                    <MenuItem className="h-10 border-0" key={index}>
                                        {content}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Stack>
        </MainCard>
    );
};

SelectCard.propTypes = {
    title: PropTypes.string,
    content: PropTypes.array
};

SelectCard.defaultProps = {
    color: 'primary'
};

export default SelectCard;
