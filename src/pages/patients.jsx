import { Helmet } from 'react-helmet-async';

import { PatientsView } from 'src/sections/patients/view';

// import { BlogView } from 'src/sections/blog/view';

// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title> Patients | GetRite PT </title>
      </Helmet>

      <PatientsView />
    </>
  );
}
