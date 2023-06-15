import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import PropTypes from 'prop-types';
const DataSelect = ({ data }) => {
    const [content, setContent] = React.useState('');

    const handleChange = (event) => {
        setContent(event.target.value);
    };
    return (
        <>
            <FormControl sx={{ m: 1, minWidth: 160}}>
                <InputLabel id="demo-simple-select-autowidth-label">{data.name}</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={content}
                    onChange={handleChange}
                    autoWidth
                    label={data.name}
                >
                    {data.contents.map((content, index) => (
                        <MenuItem key={index} value={content}>
                            {content}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    );
};
DataSelect.propTypes = {
    data: PropTypes.object
};
export default DataSelect;
