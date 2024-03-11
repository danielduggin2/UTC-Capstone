import dayjs from 'dayjs';

import Box from '@mui/material/Box';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import {
    Radio,
    Stack,
    Button,
    FormLabel,
    TextField,
    RadioGroup,
    Typography,
    FormControl,
    Autocomplete,
    FormControlLabel,

} from '@mui/material';

import Grid from '@mui/material/Unstable_Grid2'
export default function EditPatientView({ setEditState }) {
    const states = [
        'Alabama',
        'Alaska',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Florida',
        'Georgia',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',
    ];
    return (
        // <Grid container
        //     component="form"
        //     noValidate
        //     autoComplete="off"
        // >
            <>
                    <Typography variant="h6" mb={1}>
                        Office Information
                    </Typography>
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Account Name"
                        margin="normal"
                        variant="outlined"
                        defaultValue="UTC Therapy"
                    />
                <TextField
                    fullWidth
                    id="outlined-basic"
                    margin="normal"
                    label="Email"
                    variant="outlined"
                    defaultValue="andrescavalie@gmail.com"
                />
                    <TextField
                        id="outlined-basic"
                        margin="normal"
                        label="Office Phone #"
                        variant="outlined"
                        defaultValue="(931) 409 - 9499"
                    />
                
                    <Typography variant="h6" mb={1}>
                        Address Information
                    </Typography>
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Address"
                        margin="normal"
                        variant="outlined"
                        defaultValue="900 Mountain Creek Rd"
                    />
                <Stack direction="row" spacing={2} mt={2} mb={1}>
                   
                    <TextField
                        id="outlined-basic"
                        label="City"
                        margin="normal"
                        variant="outlined"
                        defaultValue="Chattanooga"
                    />
                    <Autocomplete
                    sx={{display:'inline-flex', width: '250px'}}
                    options={states}
                    renderInput={(params) => <TextField {...params} label="State" />}
                />
                <TextField id="outlined-basic" margin="normal" label="Zip" variant="outlined" defaultValue="37405" />
                </Stack>
                
                
                <Stack spacing={2} direction="row-reverse" mt={2} mb={1}>
                    <Button variant="contained">Apply</Button>
                    <Button
                        onClick={() => {
                            setEditState(false);
                        }}
                    >
                        Cancel
                    </Button>
                </Stack>
            </>
        // </Grid>
    );
}
