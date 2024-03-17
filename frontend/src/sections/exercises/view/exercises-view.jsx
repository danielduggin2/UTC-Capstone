import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { posts } from 'src/_mock/blog';

import PostCard from '../post-card';
import PostSort from '../post-sort';
import PostSearch from '../post-search';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
// ----------------------------------------------------------------------

export default function ExercisesView() {
    const [Exercises, setExercises] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [bodyPartValue, setbodyPartValue] = useState('All Body Parts');
    const [bodyParts, setBodyParts] = useState([]);

    function getExercises() {
        const cookieValue = Cookies.get('JwtToken');
        const requestOptions = {
            method: 'GET',
            headers: { Authorization: `Bearer ${cookieValue}` },
        };
        fetch(
            `https://localhost:7031/api/exercises?name=${searchValue}&bodyPart=${bodyPartValue == 'All Body Parts' ? '' : bodyPartValue}`,
            requestOptions
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setExercises(data);
            });
    }

    const onSort = (e) => {
        setbodyPartValue(e.target.value);
    };
    function getBodyParts() {
        const cookieValue = Cookies.get('JwtToken');
        const requestOptions = {
            method: 'GET',
            headers: { Authorization: `Bearer ${cookieValue}` },
        };
        fetch(`https://localhost:7031/api/exercises/bodyParts?`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                setBodyParts(data);
            });
    }
    useEffect(() => {
        getExercises();
        getBodyParts();
    }, [searchValue, bodyPartValue]);

    return (
        <Container>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h4">Exercises</Typography>
            </Stack>

            <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
                <PostSearch posts={Exercises} setSearchValue={setSearchValue} />
                <PostSort onSort={onSort} options={bodyParts} selected={bodyPartValue} />
            </Stack>

            <Grid container spacing={3}>
                {Exercises.map((exercise, index) => (
                    <PostCard key={exercise.id} post={exercise} />
                ))}
            </Grid>
        </Container>
    );
}
