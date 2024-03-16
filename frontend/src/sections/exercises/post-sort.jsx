import PropTypes from 'prop-types';

import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

// ----------------------------------------------------------------------

PostSort.propTypes = {
    options: PropTypes.array,
    onSort: PropTypes.func,
    selected: PropTypes.string
};

export default function PostSort({ options, onSort,selected }) {
    return (
        <TextField select size="small" value={selected} onChange={onSort} >
            <MenuItem value={'All Body Parts'}>
                    All Body Parts
            </MenuItem>
            {options.map((option) => (
                <MenuItem key={option} value={option}>
                    {option}
                </MenuItem>
            ))}
        </TextField>
    );
}
