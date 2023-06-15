import * as React from 'react';
import { Grid, Box, Typography, Stack } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Dot from 'components/@extended/Dot';
const columns = [
    {
        field: 'Keywords',
        headerName: 'Keywords',
        width: 200
    },
    {
        field: 'Clicks',
        headerName: 'Clicks',
        width: 200,
        cellClassName: 'text-black/50'
    },
    {
        field: 'Impress',
        headerName: 'Impress',
        width: 200,
    },
    {
        field: 'CTR',
        headerName: 'CTR'
    }
];

const TopKeywordListTable = ({rows}) => {
    return (
        <div className="h-[245px]">
            <DataGrid
                sx={{
                    '& .MuiDataGrid-columnHeaders': {
                        padding: '6px 0',
                        backgroundColor: '#FAFCFE',
                        color: 'rgba(0, 0, 0, 0.45)',
                        fontSize: '12px',
                        borderTop: '1px solid rgba(217, 217, 217, 0.3)'
                    },
                    '& .MuiDataGrid-row': {
                        borderTop: '1px solid rgba(217, 217, 217, 0.3)'
                    }
                }}
                headerHeight={32}
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
};

export default TopKeywordListTable;
