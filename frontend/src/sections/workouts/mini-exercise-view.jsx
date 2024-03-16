import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { posts } from 'src/_mock/blog';

import MiniExerciseCard from './mini-exercise-card';
import MiniExerciseSort from './mini-exercise-sort';
import MiniExerciseSearch from './mini-exercise-search';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

// ----------------------------------------------------------------------

export default function MiniExerciseView() {

    const [Exercises, setExercises] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [bodyPartValue, setbodyPartValue] = useState('All')
    const [bodyParts, setBodyParts] = useState([])


    function getExercises(){
        const cookieValue = Cookies.get('JwtToken')
        const requestOptions = {
            method: 'GET',
            headers:{'Authorization': `Bearer ${cookieValue}`}
        }
        fetch(`https://localhost:7031/api/exercises?name=${searchValue}&bodyPart=${bodyPartValue == 'All' ? '' : bodyPartValue}`,requestOptions)
        .then(response => response.json())
        .then((data) => {
            setExercises(data)
        })
    }
    const onSort = (e) => {
        setbodyPartValue(e.target.value)
    }
    function getBodyParts(){
        const cookieValue = Cookies.get('JwtToken')
        const requestOptions = {
            method: 'GET',
            headers:{'Authorization': `Bearer ${cookieValue}`}
        }
        fetch(`https://localhost:7031/api/exercises/bodyParts?`,requestOptions)
        .then(response => response.json())
        .then((data) => {
            setBodyParts(data)
        })
    }
    useEffect(() => {
        getExercises();
        getBodyParts();
    }, [searchValue,bodyPartValue])
    return (
        <>
            {/* <Typography>Hello</Typography> */}
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h4">Exercises</Typography>
            </Stack>

            <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
                <MiniExerciseSearch posts={Exercises} setSearchValue={setSearchValue} />
                <MiniExerciseSort
                    onSort={onSort}
                    options={bodyParts}
                    selected = {bodyPartValue}
                />
            </Stack>
            <Grid
                container
                spacing={0.5}
                sx={{
                    height: '280px',
                    overflow: 'auto',
                    '&::-webkit-scrollbar': {
                        width: '4px',
                        height: '10px',
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
                }}
            >
                {Exercises.map((post, index) => (
                    <MiniExerciseCard key={post.id} post={post} />
                ))}
            </Grid>
        </>
    );
}
