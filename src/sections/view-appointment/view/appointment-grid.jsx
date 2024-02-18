import PropTypes from 'prop-types';

import Grid from '@mui/material/Unstable_Grid2';

import AppointmentCard from './appointment-card';

const AppointmentGrid = ({ appointments }) => (
    <Grid container spacing={3}>
      {appointments.map((appointment) => (
        <Grid item xs={12} sm={6} md={4} key={appointment.id}>
          <AppointmentCard appointment={appointment} />
        </Grid>
      ))}
    </Grid>
  );

  AppointmentGrid.propTypes = {
    appointments: PropTypes.array.isRequired,
  };
export default AppointmentGrid;