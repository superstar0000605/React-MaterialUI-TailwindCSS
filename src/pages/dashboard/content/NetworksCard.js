import MainCard from 'components/MainCard';
import { Box, Typography, Stack, Grid } from '@mui/material';
import { MultiRadialBarChart } from 'components/charts/MultiRadialBarChart';
import Dot from 'components/@extended/Dot';
const NetworksCard = () => {
    return (
        <MainCard content={false} sx={{ borderRadius: '20px', paddingBottom: "30px", height: "450px" }} className="shadow-md">
            <Box item md={12} borderBottom="1px solid rgba(217, 217, 217, 0.3)">
                <Typography variant="h2" fontSize="16px" padding="16px">
                    Networks
                </Typography>
            </Box>
            <Stack direction="row" spacing={6} paddingLeft="16px" justifyContent="space-between" alignItems="center">
                <Grid container direction="row" alignItems="center">
                    <Grid item md={4}>
                        <Box>
                            <Typography fontSize="16px">75%</Typography>
                            <Typography fontSize="12px" color=" rgba(0, 0, 0, 0.45)">
                                Goal Completing
                            </Typography>
                        </Box>
                        <Box marginTop="24px">
                            <Typography fontSize="16px">21.05</Typography>
                            <Typography fontSize="12px" color=" rgba(0, 0, 0, 0.45)">
                                Another data
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid md={8} item>
                        <MultiRadialBarChart />
                    </Grid>
                </Grid>
            </Stack>
            <Stack direction="column">
                <Stack
                    direction="row"
                    spacing={3}
                    justifyContent="space-between"
                    borderBottom="1px solid rgba(217, 217, 217, 0.3)"
                    padding="16px 40px 16px 16px"
                >
                    <Stack direction="row">
                        <Dot size={21} color="red" />
                        <Typography paddingLeft="16px"> Virtual Session</Typography>
                    </Stack>
                    <Typography color="rgba(0, 0, 0, 0.45)">22</Typography>
                    <Typography color="#DF2929">1.15%</Typography>
                </Stack>
                <Stack
                    direction="row"
                    spacing={3}
                    justifyContent="space-between"
                    borderBottom="1px solid rgba(217, 217, 217, 0.3)"
                    padding="16px 40px 16px 16px"
                >
                    <Stack direction="row">
                        <Dot size={21} color="yellow" />
                        <Typography paddingLeft="16px"> Virtual Private</Typography>
                    </Stack>
                    <Typography paddingLeft="5px" color="rgba(0, 0, 0, 0.45)">21</Typography>
                    <Typography color="#83B672">1.87%</Typography>
                </Stack>
                <Stack
                    direction="row"
                    spacing={3}
                    justifyContent="space-between"
                    borderBottom="1px solid rgba(217, 217, 217, 0.3)"
                    padding="16px 40px 16px 16px"
                >
                    <Stack direction="row">
                        <Dot size={21} color="blue" />
                        <Typography paddingLeft="16px"> Virtual Local</Typography>
                    </Stack>
                    <Typography paddingLeft="12px" color="rgba(0, 0, 0, 0.45)">21</Typography>
                    <Typography color="#83B672">3.03%</Typography>
                </Stack>
            </Stack>
        </MainCard>
    );
};

export default NetworksCard;
