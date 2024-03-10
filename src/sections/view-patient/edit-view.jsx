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
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 2, width: '27ch' },
                '& .MuiFormControl-root': { m: 2, width: '27ch' },
                '& .css-1nrlq1o-MuiFormControl-root': { width: '50ch' },
                '& .css-4jnixx-MuiStack-root': { p: 0 },
                '& .css-106nasd-MuiFormLabel-root': { fontSize: '12px' },
                '& .ss-4jnixx-MuiStack-root': { display: 'inline-flex' },
            }}
            noValidate
            autoComplete="off"
        >
            <Typography variant="h6" mb={1}>
                General Information
            </Typography>
            <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                defaultValue="Andres"
            />
            <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                defaultValue="Cavalie"
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker
                        size="small"
                        label="Controlled picker"
                        value={dayjs('2022-04-17')}
                    />
                </DemoContainer>
            </LocalizationProvider>

            <FormControl variant="filled" size="small">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
            </FormControl>

            <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                defaultValue="andrescavalie@gmail.com"
            />
            <TextField
                id="outlined-basic"
                label="Phone"
                variant="outlined"
                defaultValue="(931) 409 - 9499"
            />

            <Typography variant="h6" mb={1}>
                Address Information
            </Typography>
            <TextField
                id="outlined-basic"
                label="Address"
                variant="outlined"
                defaultValue="900 Mountain Creek Rd"
            />
            <TextField
                id="outlined-basic"
                label="City"
                variant="outlined"
                defaultValue="Chattanooga"
            />
            <Autocomplete
                options={states}
                renderInput={(params) => <TextField {...params} label="State" />}
            />
            <TextField id="outlined-basic" label="Zip" variant="outlined" defaultValue="37405" />
            <Stack spacing={2} direction="row-reverse">
                <Button variant="contained">Apply</Button>
                <Button
                    onClick={() => {
                        setEditState(false);
                    }}
                >
                    Cancel
                </Button>
            </Stack>
        </Box>
    );
}
