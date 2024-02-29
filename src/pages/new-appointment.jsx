// import { Helmet } from 'react-helmet-async';

// import { NewAppointmentView } from 'src/sections/new-appointment/view';

// // ----------------------------------------------------------------------

// export default function NewAppointmentPage() {
//   return (
//     <>
//       <Helmet>
//         <title> New Appointment | GetRite PT </title>
//       </Helmet>

//       <NewAppointmentView />

//     </>
//   );
// }
// Bri's version of New-appointment.jsx for use on dashboard.
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { NewAppointmentView } from 'src/sections/new-appointment/view';

export default function NewAppointment() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!startDate || !endDate) {
      alert('Please select both start and end dates for the appointment.');
      return;
    }

    const newAppointment = {
      title: event.target.appointmentTitle.value,
      start: startDate.$d,
      end: endDate.$d,
    };

    // This should be used to navigate back to the dashboard and update the calendar events state.
    navigate('/dashboard');
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <NewAppointmentView onSubmit={handleSubmit}>
        <DatePicker
          label="Start Date"
          value={startDate}
          onChange={(newValue) => setStartDate(newValue)}
        />
        <DatePicker
          label="End Date"
          value={endDate}
          onChange={(newValue) => setEndDate(newValue)}
        />
        <button type="submit">Create Appointment</button>

      </NewAppointmentView>
    </LocalizationProvider>
  );
}