import { Helmet } from 'react-helmet-async';

import { WorkoutsView } from 'src/sections/workouts/view';

// import { BlogView } from 'src/sections/blog/view';

// ----------------------------------------------------------------------

export default function ExercisesPage() {
  return (
    <>
      <Helmet>
        <title> Exercises | GetRite PT </title>
      </Helmet>

      <WorkoutsView />
    </>
  );
}
