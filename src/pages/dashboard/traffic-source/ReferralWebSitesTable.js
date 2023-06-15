import MainCard from 'components/MainCard';
import { Typography, Box } from '@mui/material';
import ReferralTable from 'components/tables/referraltable';
const ReferralWebSitesTable = () => {
    return (
        <MainCard content={false} sx={{ borderRadius: '38px' }}>
            <Box borderBottom="1px solid #192A3E">
                <Typography variant="h2" padding="15px 25px" fontSize="18px" color="#192A3E">
                    Referral websites
                </Typography>
            </Box>
            <Box padding="12px">
                <ReferralTable />
            </Box>
        </MainCard>
    );
};

export default ReferralWebSitesTable;
