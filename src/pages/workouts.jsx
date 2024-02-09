import { Helmet } from 'react-helmet-async';

import { WorkoutsView } from 'src/sections/workouts/view';

// import { BlogView } from 'src/sections/blog/view';

// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title> Workouts | GetRite PT </title>
      </Helmet>

      <WorkoutsView />
    </>
  );
}
