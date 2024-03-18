import PropTypes from 'prop-types';

import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

// ----------------------------------------------------------------------

MiniExerciseSort.propTypes = {
    options: PropTypes.array,
    onSort: PropTypes.func,
};

export default function MiniExerciseSort({ options, onSort, selected }) {
    return (
        <TextField select size="medium" sx={{ width: '120px' }} value={selected} onChange={onSort}>
            <MenuItem value="All">All</MenuItem>
            {options.map((option) => (
                <MenuItem key={option} value={option}>
                    {option}
                </MenuItem>
            ))}
        </TextField>
    );
}
