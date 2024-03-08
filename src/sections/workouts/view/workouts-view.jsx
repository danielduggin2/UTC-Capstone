import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { posts } from 'src/_mock/blog';

import ExerciseItem from '../exercise-item';
import PostCard from '../post-card';
import PostSort from '../post-sort';
import PostSearch from '../post-search';
import { Box, Button, Card, CardContent, Dialog, DialogContent, DialogTitle, IconButton, List, ListItem } from '@mui/material';
import { useState } from 'react';
import { primary } from 'src/theme/palette';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';
// ----------------------------------------------------------------------

export default function WorkoutsView() {
  const [open, setOpen] = useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
  return (
    <>
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Exercises</Typography>
        
        
      </Stack>

      <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
        <PostSearch posts={posts} />
        <PostSort
          options={[
            { value: 'latest', label: 'Latest' },
            { value: 'popular', label: 'Popular' },
            { value: 'oldest', label: 'Oldest' },
          ]}
        />
      </Stack>

      <Grid container spacing={3}>
        {posts.map((post, index) => (
          <PostCard key={post.id} post={post} index={index} dialogFunction={handleClickOpen} />
        ))}
      </Grid>
    </Container>
    <Dialog
    open={open}
    keepMounted
    onClose={handleClose}
    aria-describedby="alert-dialog-slide-description"
    scroll='paper'
    maxWidth='xl'
    PaperProps={{}}
  
>		
  <DialogTitle>Workout 1</DialogTitle>
  <DialogContent>
{/* Notes */}
<Stack sx={{width:500}}>
 <ExerciseItem post={{title:'plank',cover:'/assets/images/exercises/exercise_16.jpg'}}/>
 <ExerciseItem post={{title:'plank',cover:'/assets/images/exercises/exercise_16.jpg'}}/>
 <ExerciseItem post={{title:'plank',cover:'/assets/images/exercises/exercise_16.jpg'}}/>
 <ExerciseItem post={{title:'plank',cover:'/assets/images/exercises/exercise_16.jpg'}}/>
 <ExerciseItem post={{title:'plank',cover:'/assets/images/exercises/exercise_16.jpg'}}/>
 <Stack  pt={2}>
				<Button variant="outlined" sx={{justifyContent:'left'}}>+ Add Exercise</Button>	
		  </Stack>
</Stack>

  </DialogContent>  
</Dialog>
</>
  );
}
