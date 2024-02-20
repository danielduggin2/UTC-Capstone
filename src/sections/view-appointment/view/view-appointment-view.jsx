import React, { useState } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

import { appointments } from 'src/_mock/appointment';

import Iconify from 'src/components/iconify';

import AppointmentGrid from './appointment-grid';

// ----------------------------------------------------------------------

export default function ViewAppointmentView() {
  const [selectedAppointment  , setSelectedAppointment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDetailsClick = (appointment) => {
    setSelectedAppointment(appointment);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


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
        <AppointmentGrid appointments={appointments} onDetailsClick={handleDetailsClick} />
      </div>
      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <DialogTitle>Appointment Details</DialogTitle>
        <DialogContent>
          {selectedAppointment && (
            <>
              <Typography variant="h6">{selectedAppointment.name}</Typography>
              <Typography variant="body1">Age: {selectedAppointment.age}</Typography>
              <Typography variant="body1">Gender: {selectedAppointment.gender}</Typography>
              <Typography variant="body1">Time: {selectedAppointment.time}</Typography>
              <Typography variant="body1">Reason: {selectedAppointment.reason}</Typography>
            </>
            )}
        </DialogContent>
      </Dialog>
    </Container>
  );
};
