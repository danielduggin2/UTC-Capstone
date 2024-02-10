import { Helmet } from 'react-helmet-async';

import { ViewAppointmentView } from 'src/sections/view-appointment/view';

// ----------------------------------------------------------------------

export default function ViewAppointmentPage() {
  return (
    <>
      <Helmet>
        <title> View Appointment | GetRite PT </title>
      </Helmet>

      <ViewAppointmentView />
    </>
  );
}
