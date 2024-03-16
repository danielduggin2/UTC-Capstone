import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export default function ExerciseItem({ post, index }) {
    const { title, view, comment, share, createdAt, videoUrl, cover, bodyPart } = post;
    const renderCover = (
        <Box
            component="img"
            alt={post.name}
            src="/assets/images/exercises/exercise_16.jpg"
            sx={{
                objectFit: 'cover',
                display: 'inline',
            }}
        />
    );
    return (
        <Stack spacing={1} pt={1}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Stack direction="row" alignItems="center" spacing={2}>
                    <Box
                        sx={{
                            width: '60px',
                            height: '60px',
                            display: 'inline',
                            boxShadow: '0px 1px 5px 2px lightgrey',
                            borderRadius: '10px',
                            p: 0.7,
                        }}
                    >
                        {renderCover}
                    </Box>
                    <Typography sx={{ display: 'inline' }} variant="body1">
                        {post.name}
                    </Typography>
                </Stack>
                <Box>
                    <IconButton>
                        <FontAwesomeIcon icon={faCircleMinus} size="xs" />
                    </IconButton>
                </Box>
            </Stack>
        </Stack>
    );
}

ExerciseItem.propTypes = {
    post: PropTypes.object,
    index: PropTypes.number,
};
