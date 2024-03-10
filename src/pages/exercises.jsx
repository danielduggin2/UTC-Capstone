import { Helmet } from 'react-helmet-async';

import { ExercisesView } from 'src/sections/exercises/view';

// import { BlogView } from 'src/sections/blog/view';

// ----------------------------------------------------------------------

export default function ExercisesPage() {
    return (
        <>
            <Helmet>
                <title> Exercises | GetRite PT </title>
            </Helmet>

            <ExercisesView />
        </>
    );
}
