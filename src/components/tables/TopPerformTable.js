import * as React from 'react';
import { Grid, Box, Typography, Stack } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Dot from 'components/@extended/Dot';

export const Offline = () => (
    <Box className="px-3 border text-[#1E67D6] border-solid drop-shadow rounded-[20px] flex justify-around items-center">
        <Dot color={'#1E67D6'} />
        <span className="pl-2">Offline</span>
    </Box>
);

export const Online = () => (
    <Box className="px-3 border text-[#83B672] border-solid drop-shadow rounded-[20px] flex justify-around items-center">
        <Dot color={'#83B672'} />
        <span className="pl-2">Online</span>
    </Box>
);

const columns = [
    {
        field: 'Pages',
        headerName: 'Pages',
        width: 200
    },
    {
        field: 'Date',
        headerName: 'Date',
        width: 200,
        cellClassName: 'text-black/50'
    },
    {
        field: 'User',
        headerName: 'User',
        width: 200,
        renderCell: (params) => (
            <Stack direction="row" spacing={2}>
                <Dot size={21} color={params.value.color} />
                <Typography>{params.value.name}</Typography>
            </Stack>
        )
    },
    {
        field: 'Time',
        headerName: 'Time',
        width: 200,
        cellClassName: 'text-black/50'
    },
    {
        field: 'Status',
        headerName: 'Status',
        width: 200,
        renderCell: (params) => {
            if (params.value === 'Offline') {
                return <Offline />;
            }
            return <Online />;
        }
    },
    {
        field: 'Transaction',
        headerName: 'Transaction'
    }
];

const TopPerformTable = ({rows}) => {
    return (
        <div className="h-[320px]">
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

export default TopPerformTable;
