/* eslint-disable no-unused-vars */
import { Grid } from '@mui/material';
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';

const AnalyticCard = () => {
    return (
        <MainCard content={false} sx={{ display: 'flex', padding: '8px' }} className="shadow-md">
            <Grid container>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    sx={{ borderRight: { md: '1px solid #D9D9D9', xs: 0 }, borderBottom: { md: 0, xs: '1px solid #D9D9D9' } }}
                >
                    <AnalyticEcommerce title="Pageviews" count="212" percentage={2.5} extra="Epc: 302.12 USD" />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    sx={{ borderRight: { md: '1px solid #D9D9D9', xs: 0 }, borderBottom: { md: 0, xs: '1px solid #D9D9D9' } }}
                >
                    <AnalyticEcommerce title="Clicks" count="70.210" percentage={1.1} isLoss={true} extra="Ctr: 24.5%" />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    sx={{ borderRight: { md: '1px solid #D9D9D9', xs: 0 }, borderBottom: { md: 0, xs: '1px solid #D9D9D9' } }}
                >
                    <AnalyticEcommerce title="Conversations" count="42.440" percentage={2.15} extra="Ctr: 28.6%" />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <AnalyticEcommerce
                        class_name="border-r-0 last:pb-0"
                        title="Comission"
                        count="23.146"
                        percentage={2.5}
                        extra="Epc: 4.5 USD"
                    />
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default AnalyticCard;
