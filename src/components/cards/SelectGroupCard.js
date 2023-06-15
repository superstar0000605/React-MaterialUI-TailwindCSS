/* eslint-disable no-unused-vars */
import { Grid } from '@mui/material';
import SelectCard from './SelectCard';

const SelectGroupCard = () => {
    return (
        <>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <SelectCard title="Date" contents={['01.02.23-16.02.23', '03.02.23-16.02.23']} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <SelectCard title="Time" contents={['00:00', '00:01']} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <SelectCard title="Username" contents={['Sam Wheller', 'Jerry Poole']} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <SelectCard
                    title="Topic"
                    contents={['Overview', 'traffic sources', 'content', 'user demographics', 'conversions', 'events']}
                />
            </Grid>
        </>
    );
};

export default SelectGroupCard;
