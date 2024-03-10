import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { posts } from 'src/_mock/blog';

import MiniExerciseCard from './mini-exercise-card';
import MiniExerciseSort from './mini-exercise-sort';
import MiniExerciseSearch from './mini-exercise-search';

// ----------------------------------------------------------------------

export default function MiniExerciseView() {
  return (
    <>
    {/* <Typography>Hello</Typography> */}
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Exercises</Typography>
        
        
      </Stack>

      <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between" >
        <MiniExerciseSearch posts={posts} />
        <MiniExerciseSort
          options={[
            { value: 'latest', label: 'Latest' },
            { value: 'popular', label: 'Popular' },
            { value: 'oldest', label: 'Oldest' },
          ]}
        />
      </Stack>
    <Grid container spacing={.5} sx={{height:'280px',overflow:'auto',
        '&::-webkit-scrollbar': {
        width: '4px',
        height: '10px'
        },
        '&::-webkit-scrollbar-track': {
        background: '#F9FAFB',
        },
        '&::-webkit-scrollbar-thumb': {
        background: '#888',
        borderRadius: '10px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
        background: '#555',
        },
    }}>
        {posts.map((post, index) => (
          <MiniExerciseCard key={post.id} post={post} index={index} />
        ))}
      </Grid>
      </>
  );
}
