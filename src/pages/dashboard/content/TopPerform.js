import MainCard from "components/MainCard";
import { Stack, Box, Typography, Button } from '@mui/material'
import TopPerformTable from "components/tables/TopPerformTable";
const topPerformsTableData = [
    {
        id: "main page",
        Pages: "Main page",
        Date: "01/05/2023/18:20",
        User: {
            color: "#1E67D6",
            name: "Virtual Local"
        },
        Time: "15.0 min",
        Status: "Offline",
        Transaction: "39.44USD"
    },
    {
        id: "categories",
        Pages: "Categories",
        Date: "01/05/2023/18:20",
        User: {
            color: "#FFB946",
            name: "Virtual Private",
        },
        Time: "15.0 min",
        Status: "Offline",
        Transaction: "15.49USD"
    },
    {
        id: "sale",
        Pages: "Sale",
        Date: "01/05/2023/18:20",
        User: {
            color: "#F7685B",
            name:  "Virtual Session",
        },
        Time: "15.0 min",
        Status: "Online",
        Transaction: "21.68USD"
    },
    {
        id: "special offer",
        Pages: "Special Offer",
        Date: "01/05/2023/18:20",
        User: {
            color: "#83B672",
            name: "Virtual Action",
        },
        Time: "15.0 min",
        Status: "Online",
        Transaction: "12.00USD"
    },
]
const TopPerform = () => {
    return (
        <MainCard content={false} className="shadow-md" sx={{borderRadius: "20px"}}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={3.5}>
                <Stack direction="row" padding="20px" alignItems="center">
                    <Typography variant="h5" className="text-base" paddingRight="80px">
                        Top Performs
                    </Typography>
                    <Button variant="outlined" sx={{ color: "#39383A", borderRadius: "20px", padding: "2px 10px", borderColor: "#39383A" }}>
                        Live Data
                    </Button>
                </Stack>
                <Typography variant="h6" color="rgba(0, 0, 0, 0.45)" sx={{ padding: "20px" }}>
                    You have <Typography variant="span" color="#83B672">120 users now </Typography>
                </Typography>
            </Stack>
            <Box>
                <TopPerformTable rows={topPerformsTableData} />
            </Box>
        </MainCard>
    )
}

export default TopPerform;