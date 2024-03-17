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

export default function EditPatientView({ setEditState ,patientInfo,editState}) {
    const states = [
        
        "AL", // Alabama
        "AK", // Alaska
        "AZ", // Arizona
        "AR", // Arkansas
        "CA", // California
        "CO", // Colorado
        "CT", // Connecticut
        "DE", // Delaware
        "FL", // Florida
        "GA", // Georgia
        "HI", // Hawaii
        "ID", // Idaho
        "IL", // Illinois
        "IN", // Indiana
        "IA", // Iowa
        "KS", // Kansas
        "KY", // Kentucky
        "LA", // Louisiana
        "ME", // Maine
        "MD", // Maryland
        "MA", // Massachusetts
        "MI", // Michigan
        "MN", // Minnesota
        "MS", // Mississippi
        "MO", // Missouri
        "MT", // Montana
        "NE", // Nebraska
        "NV", // Nevada
        "NH", // New Hampshire
        "NJ", // New Jersey
        "NM", // New Mexico
        "NY", // New York
        "NC", // North Carolina
        "ND", // North Dakota
        "OH", // Ohio
        "OK", // Oklahoma
        "OR", // Oregon
        "PA", // Pennsylvania
        "RI", // Rhode Island
        "SC", // South Carolina
        "SD", // South Dakota
        "TN", // Tennessee
        "TX", // Texas
        "UT", // Utah
        "VT", // Vermont
        "VA", // Virginia
        "WA", // Washington
        "WV", // West Virginia
        "WI", // Wisconsin
        "WY", // Wyoming
        "OTHER"
    ];
    let patientInfoExists = Object.keys(patientInfo).length > 0
    if (patientInfoExists) {
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
                display: editState ? 'block' : 'none'
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
                value={patientInfo.firstName}
            />
            <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                value={patientInfo.lastName}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker
                        size="small"
                        label="Controlled picker"
                        value={dayjs(patientInfo.birthdate?.toLocaleString('en-US', { year: "numeric", month: '2-digit', day: '2-digit'}).replace(/\//g, '-'))}
                    />
                </DemoContainer>
            </LocalizationProvider>

            <FormControl variant="filled" size="small">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                value={patientInfo.gender}
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="F" control={<Radio />} label="Female" />
                    <FormControlLabel value="M" control={<Radio />} label="Male" />
                    <FormControlLabel value="X" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>

            <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                value={patientInfo.user?.email}
            />
            <TextField
                id="outlined-basic"
                label="Phone"
                variant="outlined"
                value={patientInfo.phone}
            />

            <Typography variant="h6" mb={1}>
                Address Information
            </Typography>
            <TextField
                id="outlined-basic"
                label="Address"
                variant="outlined"
                value={patientInfo.address?.address}
            />
            <TextField
                id="outlined-basic"
                label="City"
                variant="outlined"
                value={patientInfo.address?.city}
            />
            <Autocomplete
                value={patientInfo.state}
                options={states}
                renderInput={(params) => <TextField {...params} label="State" />}
            />
            <TextField id="outlined-basic" label="Zip" variant="outlined" defaultValue={patientInfo.state} />
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
    } else {
        return(
            <p>No Info</p>
        )
    }
}
