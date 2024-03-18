import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { fShortenNumber } from 'src/utils/format-number';

import Iconify from 'src/components/iconify';

import ExerciseItem from './exercise-item';
// ----------------------------------------------------------------------

export default function PostCard({ post, dialogFunction }) {
    const { title, view, comment, share, createdAt, videoUrl, cover, bodyPart } = post;
    
    return (
        <Grid xs={12} sm={6} md={3}>
            <Card>
                <Box
                    sx={{
                        p: 2,
                    }}
                >
                    <Stack direction="row" alignItems="center" mb={1}>
                        <Typography variant="h6">{post.description}</Typography>
                    </Stack>
                    {post.exercises.map((ex, item) => (
                        <ExerciseItem key={ex.id} post={ex} isExpanded={false} />
                    ))}

                    <Stack pt={2}>
                        <Button variant="outlined" onClick={() => dialogFunction(post.id)}>
                            See More
                        </Button>
                    </Stack>
                </Box>
            </Card>
        </Grid>
        // <Grid xs={12} sm={6} md={3}>
        //   <Card>
        //     <Box
        //       sx={{
        //         position: 'relative',
        //         pt: 'calc(100% * 3 / 4)',
        //       }}
        //     >
        //       {renderCover}
        //     </Box>

        //     <Box
        //       sx={{
        //         p:2,
        //       }}
        //     >
        //       {renderDate}
        //       {renderTitle}
        //     </Box>
        //   </Card>
        // </Grid>
    );
}

PostCard.propTypes = {
    post: PropTypes.object.isRequired,
    index: PropTypes.number,
    dialogFunction: PropTypes.func,
};
