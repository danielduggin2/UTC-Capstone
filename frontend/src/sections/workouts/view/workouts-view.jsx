import { useEffect, useState } from 'react';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { Box, Modal, Paper, Button } from '@mui/material';

import { posts } from 'src/_mock/blog';

import PostCard from '../post-card';
import PostSort from '../post-sort';
import PostSearch from '../post-search';
import ExerciseItem from '../exercise-item';
import MiniExerciseView from '../mini-exercise-view';
import Cookies from 'js-cookie';
// ----------------------------------------------------------------------

export default function WorkoutsView() {
    const [open, setOpen] = useState(false);
    const [selectedWorkout, setSelectedWorkout] = useState({});

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    function openDialog(id) {
        getWorkoutById(id);
        setOpen(true);
        // console.log(selectedWorkout)
    }

    const [Workouts, setWorkouts] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [bodyPartValue, setbodyPartValue] = useState('All Body Parts');
    const [bodyParts, setBodyParts] = useState([]);

    function getWorkouts() {
        const cookieValue = Cookies.get('JwtToken');
        const requestOptions = {
            method: 'GET',
            headers: { Authorization: `Bearer ${cookieValue}` },
        };
        fetch(`https://localhost:7031/api/workouts?description=${searchValue}`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                setWorkouts(data);
            });
    }

    function getWorkoutById(id) {
        const cookieValue = Cookies.get('JwtToken');
        const requestOptions = {
            method: 'GET',
            headers: { Authorization: `Bearer ${cookieValue}` },
        };
        fetch(`https://localhost:7031/api/workouts/${id}`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                setSelectedWorkout(data[0]);
            });
    }

    useEffect(() => {
        getWorkouts();
    }, [searchValue, bodyPartValue]);

    return (
        <>
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4">Workouts</Typography>
                </Stack>

                <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
                    <PostSearch posts={Workouts} setSearchValue={setSearchValue} />
                    {/* <PostSort
                        options={[
                            { value: 'latest', label: 'Latest' },
                            { value: 'popular', label: 'Popular' },
                            { value: 'oldest', label: 'Oldest' },
                        ]}
                    /> */}
                </Stack>

                <Grid container spacing={3}>
                    {Workouts.map((post, index) => (
                        <PostCard key={post.id} post={post} dialogFunction={openDialog} />
                    ))}
                </Grid>
            </Container>

            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',

                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    <Stack direction="row" spacing={2}>
                        <Paper sx={{ p: 2, height: '475px' }}>
                            {Object.keys(selectedWorkout).length === 0 ? (
                                ''
                            ) : (
                                <>
                                    <Typography variant="h4">
                                        {selectedWorkout.description}
                                    </Typography>
                                    <Stack sx={{ width: 500 }} mt={2}>
                                        {selectedWorkout.exercises.map((ex, i) => (
                                            <ExerciseItem
                                                post={{
                                                    name: ex.name,
                                                    cover: '/assets/images/exercises/exercise_16.jpg',
                                                }}
                                            />
                                        ))}

                                        <Stack pt={2}>
                                            <Button
                                                variant="outlined"
                                                sx={{ justifyContent: 'left' }}
                                            >
                                                + Add Exercise
                                            </Button>
                                        </Stack>
                                    </Stack>
                                </>
                            )}
                        </Paper>
                        <Paper sx={{ p: 2, height: '475px' }}>
                            <Stack sx={{ width: 350 }}>
                                <MiniExerciseView sx={{ minHeight: 0 }} />
                            </Stack>
                        </Paper>
                    </Stack>
                </Box>
            </Modal>
            {/* <Dialog
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
</Dialog> */}
        </>
    );
}
