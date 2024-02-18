import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { appointments } from 'src/_mock/appointment';

import Iconify from 'src/components/iconify';

import AppointmentGrid from './appointment-grid';

// ----------------------------------------------------------------------

export default function ViewAppointmentView() {
  // Mock data

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
         <Typography variant="h3">View Appointments</Typography>

         <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
           New Post
         </Button>
      </Stack>
      <div>
        {/* <h1>View Appointments</h1> */}
        <AppointmentGrid appointments={appointments} />
      </div>
    </Container>
    
  );
};
