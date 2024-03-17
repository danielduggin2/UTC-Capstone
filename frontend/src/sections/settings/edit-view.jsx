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
import Grid from '@mui/material/Unstable_Grid2';

export default function EditPatientView({ setEditState, officeInfo }) {
    const states = [
        'AL', // Alabama
        'AK', // Alaska
        'AZ', // Arizona
        'AR', // Arkansas
        'CA', // California
        'CO', // Colorado
        'CT', // Connecticut
        'DE', // Delaware
        'FL', // Florida
        'GA', // Georgia
        'HI', // Hawaii
        'ID', // Idaho
        'IL', // Illinois
        'IN', // Indiana
        'IA', // Iowa
        'KS', // Kansas
        'KY', // Kentucky
        'LA', // Louisiana
        'ME', // Maine
        'MD', // Maryland
        'MA', // Massachusetts
        'MI', // Michigan
        'MN', // Minnesota
        'MS', // Mississippi
        'MO', // Missouri
        'MT', // Montana
        'NE', // Nebraska
        'NV', // Nevada
        'NH', // New Hampshire
        'NJ', // New Jersey
        'NM', // New Mexico
        'NY', // New York
        'NC', // North Carolina
        'ND', // North Dakota
        'OH', // Ohio
        'OK', // Oklahoma
        'OR', // Oregon
        'PA', // Pennsylvania
        'RI', // Rhode Island
        'SC', // South Carolina
        'SD', // South Dakota
        'TN', // Tennessee
        'TX', // Texas
        'UT', // Utah
        'VT', // Vermont
        'VA', // Virginia
        'WA', // Washington
        'WV', // West Virginia
        'WI', // Wisconsin
        'WY', // Wyoming
        'OTHER',
    ];
    console.log(officeInfo);
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
                value={officeInfo.officeName}
            />
            <TextField
                fullWidth
                id="outlined-basic"
                margin="normal"
                label="Email"
                variant="outlined"
                value={officeInfo.officeEmail}
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
                value={officeInfo.address?.address}
            />
            <Stack direction="row" spacing={2} mt={2} mb={1}>
                <TextField
                    id="outlined-basic"
                    label="City"
                    margin="normal"
                    variant="outlined"
                    value={officeInfo.address?.city}
                />
                <Autocomplete
                    sx={{ display: 'inline-flex', width: '250px' }}
                    options={states}
                    renderInput={(params) => <TextField {...params} label="State" />}
                    value={officeInfo.address?.state}
                />
                <TextField
                    id="outlined-basic"
                    margin="normal"
                    label="Zip"
                    variant="outlined"
                    defaultValue="37405"
                    value={officeInfo.address?.zipCode}
                />
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
