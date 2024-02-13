import { Helmet } from 'react-helmet-async';

import { NewAppointmentView } from 'src/sections/new-appointment/view';

// ----------------------------------------------------------------------

export default function NewAppointmentPage() {
  return (
    <>
      <Helmet>
        <title> New Appointment | GetRite PT </title>
      </Helmet>

      <NewAppointmentView />

    </>
  );
}
