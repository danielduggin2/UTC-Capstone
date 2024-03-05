import { Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

export default function ReadPatientView({setEditState}) {
return (
	<>
		
	<Typography variant="h6" mb={1}>
		General Information
	</Typography>
	<Grid container xs={12} spacing={3} mb={4}>
		<Grid xs={6}>
			<Typography variant="caption">First Name</Typography>
			<Typography variant="body1">Andres</Typography>
		</Grid>
		<Grid xs={6}>
			<Typography variant="caption">Last Name</Typography>
			<Typography variant="body1">Cavalie</Typography>
		</Grid>
		<Grid xs={6}>
			<Typography variant="caption">Birthday</Typography>
			<Typography variant="body1">2/15/2024</Typography>
		</Grid>
		<Grid xs={6}>
			<Typography variant="caption">Gender</Typography>
			<Typography variant="body1">Male</Typography>
		</Grid>
		<Grid xs={6}>
			<Typography variant="caption">Email</Typography>
			<Typography variant="body1">andrescavalie@gmail.com</Typography>
		</Grid>
		<Grid xs={6}>
			<Typography variant="caption">Phone</Typography>
			<Typography variant="body1">(931) 409 - 9499</Typography>
		</Grid>
	</Grid>
	<Typography variant="h6" mb={1}>
		Address Information
	</Typography>
	<Grid container xs={12} spacing={3}>
		<Grid xs={12}>
			<Typography variant="caption">Address</Typography>
			<Typography variant="body1">900 Mountain Creek Rd</Typography>
		</Grid>
		<Grid xs={4}>
			<Typography variant="caption">City</Typography>
			<Typography variant="body1">Chattanooga</Typography>
		</Grid>
		<Grid xs={4}>
			<Typography variant="caption">State</Typography>
			<Typography variant="body1">TN</Typography>
		</Grid>
		<Grid xs={4}>
			<Typography variant="caption">Zip</Typography>
			<Typography variant="body1">37405</Typography>
		</Grid>
	</Grid>
	</>
)}
