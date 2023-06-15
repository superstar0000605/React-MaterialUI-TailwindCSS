import MainCard from "components/MainCard";
import { Stack, Box, Typography, Button } from '@mui/material'
import TopKeywordListTable from "components/tables/TopKeywordListTable";
const topKeywordListTableData = [
    {
        id: "Keywords",
        Keywords: "New Collection",
        Clicks: "282",
        Impress: "2.275",
        CTR: "12.40%",
    },
    {
        id: "Special Offer",
        Keywords: "Special Offer",
        Clicks: "186",
        Impress: "1.435",
        CTR: "11.92%",
    },
    {
        id: "Sale",
        Keywords: "Sale",
        Clicks: "1022",
        Impress: "0.467",
        CTR: "3.73%",
    },
]
const TopKeywordList = () => {
    return (
        <MainCard content={false} className="shadow-md" sx={{ borderRadius: "20px" }} height="300px">
            <Typography variant="h2" fontSize="16px" padding="16px">
                Top Keywords List
            </Typography>
            <Box>
                <TopKeywordListTable rows={topKeywordListTableData} />
            </Box>
        </MainCard>
    )
}

export default TopKeywordList;