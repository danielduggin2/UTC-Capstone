import React, { useState } from 'react';

import { DatePicker } from '@mui/lab';
import { Grid, Button, Divider, TextField, Typography } from '@mui/material';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import dayjs from 'dayjs';

function NewAppointment() {
  // State variables to store form data
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState(null);
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedDate, setSelectedDate] = useState(null); // Initialize as null
  const [selectedTime, setSelectedTime] = useState('');
  const [therapistFirstName, setTherapistFirstName] = useState('');
  const [therapistLastName, setTherapistLastName] = useState('');
  const [therapistEmail, setTherapistEmail] = useState('');
  const [therapistPhoneNumber, setTherapistPhoneNumber] = useState('');
  const [signature, setSignature] = useState('');
  const [insuranceCardImage, setInsuranceCardImage] = useState(null);
  const [therapistInfo, setTherapistInfo] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data (e.g., send it to the server)
    // Here you can implement your logic to handle the new appointment creation
    console.log("Form submitted:", { firstName, lastName, birthDate, email, phoneNumber, selectedDate, selectedTime, therapistFirstName, therapistLastName, therapistEmail, therapistPhoneNumber, therapistInfo, signature, insuranceCardImage });
  };

  // Function to handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setInsuranceCardImage(file);
  };
  // const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));
  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6">Patient Information</Typography>
      <Divider />
      {/* Patient Information Fields */}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField label="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Email Address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Contact Phone Number" type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required fullWidth />
        </Grid>
        <Grid item xs={12}>
           <DatePicker
            label="Birth Date"
            value={birthDate}
            onChange={(date) => setBirthDate(date)}
            renderInput={(params) => <TextField {...params} />}
            required
            fullWidth
          /> 
        </Grid>
      </Grid>

      <Typography variant="h6">Therapist Information</Typography>
      <Divider />
      {/* Therapist Information Fields */}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField label="Therapist First Name" value={therapistFirstName} onChange={(e) => setTherapistFirstName(e.target.value)} required fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Therapist Last Name" value={therapistLastName} onChange={(e) => setTherapistLastName(e.target.value)} required fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Therapist Email Address" type="email" value={therapistEmail} onChange={(e) => setTherapistEmail(e.target.value)} required fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Therapist Contact Phone Number" type="tel" value={therapistPhoneNumber} onChange={(e) => setTherapistPhoneNumber(e.target.value)} required fullWidth />
        </Grid>
      </Grid>

      {/* Additional Form Fields (Date, Time, Insurance Card Image, Signature, etc.) */}
      <Typography variant="h6">Appointment Information</Typography>
      <Divider />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <DatePicker
            label="Date"
            value={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            renderInput={(params) => <TextField {...params} />}
            required
            fullWidth
          /> 
        </Grid>
        <Grid item xs={6}>
          <TextField label="Time" type="time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} required fullWidth />
        </Grid>
      </Grid>
{/*       <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
        <DateTimePicker
          label="Uncontrolled picker"
          defaultValue={dayjs('2022-04-17T15:30')}
        />
        <DateTimePicker
          label="Controlled picker"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
     */}

      <input type="file" accept="image/*" onChange={handleFileUpload} required />
      <div>
        <TextField label="Signature" value={signature} onChange={(e) => setSignature(e.target.value)} required fullWidth />
      </div>
      
      <Button type="submit" variant="contained" color="primary">Create Appointment</Button>
    </form>
  );
}

export default NewAppointment;