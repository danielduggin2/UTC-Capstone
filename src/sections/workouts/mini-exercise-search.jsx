import PropTypes from 'prop-types';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

MiniExerciseSearch.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function MiniExerciseSearch({ posts }) {
  return (
    <Autocomplete
      sx={{ width: 220 }}
      autoHighlight
      popupIcon={null}
      options={posts}
      getOptionLabel={(post) => post.title}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      renderInput={(params) => (
        <TextField
          
          {...params}
          placeholder="Search exercises..."
          InputProps={{
            ...params.InputProps,
            sx:{justifyContent:'space-between',pr:'20px !important'},
            startAdornment: (
              <InputAdornment position="start">
                <Iconify
                  icon="eva:search-fill"
                  sx={{ ml: 1, width: 20, height: 20, color: 'text.disabled' }}
                />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
}
