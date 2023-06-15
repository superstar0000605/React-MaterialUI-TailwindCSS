
import { Grid, Typography } from '@mui/material'
import PieChart from 'components/charts/PieChart'
import MainCard from 'components/MainCard'
import PropTypes from 'prop-types'
const PieCardItem = ({ item }) => {
    return (
        <Grid item md={4} xs={12}>
            <MainCard content={false} sx={{ borderRadius: '38px', height: "100%", padding: "15px 15px" }} className="shadow-md">
                <Typography fontSize="18px" color="#192A3E" marginBottom="24px">
                    {item.title}
                </Typography>
                <PieChart data={item.data} />
            </MainCard>
        </Grid>
    )
}
PieCardItem.propTypes = {
    item: PropTypes.object
}
export default PieCardItem;