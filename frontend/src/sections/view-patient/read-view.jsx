import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

export default function ReadPatientView({ setEditState,patientInfo,editState }) {

    let patientInfoExists = Object.keys(patientInfo).length > 0
    if (patientInfoExists) {
    return (
        <Box sx={{display: editState ? 'none' : 'block'}}>
            <Typography variant="h6" mb={1}>
                General Information
            </Typography>
            <Grid container xs={12} spacing={3} mb={4}>
                <Grid xs={6}>
                    <Typography variant="caption">First Name</Typography>
                    <Typography variant="body1">{patientInfo.firstName}</Typography>
                </Grid>
                <Grid xs={6}>
                    <Typography variant="caption">Last Name</Typography>
                    <Typography variant="body1">{patientInfo.lastName}</Typography>
                </Grid>
                <Grid xs={6}>
                    <Typography variant="caption">Birthday</Typography>
                    <Typography variant="body1">{patientInfo.birthdate?.toLocaleString('en-US', { year: "numeric", month: '2-digit', day: '2-digit'}).replace(/\//g, '-')}</Typography>
                </Grid>
                <Grid xs={6}>
                    <Typography variant="caption">Gender</Typography>
                    <Typography variant="body1">{patientInfo.gender}</Typography>
                </Grid>
                <Grid xs={6}>
                    <Typography variant="caption">Email</Typography>
                    <Typography variant="body1">{patientInfo.user?.email}</Typography>
                </Grid>
                <Grid xs={6}>
                    <Typography variant="caption">Phone</Typography>
                    <Typography variant="body1">{patientInfo.phone}</Typography>
                </Grid>
            </Grid>
            <Typography variant="h6" mb={1}>
                Address Information
            </Typography>
            <Grid container xs={12} spacing={3}>
                <Grid xs={12}>
                    <Typography variant="caption">Address</Typography>
                    <Typography variant="body1">{patientInfo.address?.address}</Typography>
                </Grid>
                <Grid xs={4}>
                    <Typography variant="caption">City</Typography>
                    <Typography variant="body1">{patientInfo.address?.city}</Typography>
                </Grid>
                <Grid xs={4}>
                    <Typography variant="caption">State</Typography>
                    <Typography variant="body1">{patientInfo.state}</Typography>
                </Grid>
                <Grid xs={4}>
                    <Typography variant="caption">Zip</Typography>
                    <Typography variant="body1">{patientInfo.address?.zipCode}</Typography>
                </Grid>
            </Grid>
        </Box>
    );} else {
        return(
            <p>No Info</p>
        )
    }
}
