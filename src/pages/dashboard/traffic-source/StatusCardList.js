/* eslint-disable no-unused-vars */
import { Grid } from '@mui/material';
import MainCard from 'components/MainCard';
import StatusCardItem from './StatusCardItem';

const series = [
    {
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 86, 115, 35]
    }
];

const StatusCardList = () => {
    return (
        <MainCard content={false} sx={{ borderRadius: 0 }} className="shadow-md">
            <Grid container>
                <Grid item md={6} xs={12}>
                    <Grid container>
                        <Grid item xs={6} sx={{ borderRight:'1px solid #707683' }}>
                            <StatusCardItem title="Sessions today" value="456" />
                        </Grid>
                        <Grid item xs={6} sx={{ borderRight: { md: '1px solid #707683', xs: 'none' } }}>
                            <StatusCardItem title="Users" value="96" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Grid container>
                        <Grid item xs={6} sx={{ borderRight: '1px solid #707683' }}>
                            <StatusCardItem title="Average page depth" value="4" />
                        </Grid>
                        <Grid item xs={6}>
                            <StatusCardItem title="Average time on site" value="07:12" unit="min"/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default StatusCardList;
