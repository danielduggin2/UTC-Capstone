import { Helmet } from 'react-helmet-async';

import { ViewPatientView } from 'src/sections/view-patient/view';

// import { BlogView } from 'src/sections/blog/view';

// ----------------------------------------------------------------------

export default function ViewPatientPage() {
  return (
    <>
      <Helmet>
        <title> View Patient | GetRite PT </title>
      </Helmet>

      <ViewPatientView />
    </>
  );
}
