import PropTypes from 'prop-types';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { IconButton } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { fShortenNumber } from 'src/utils/format-number';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function MiniExerciseCard({ post, index }) {
    const { title, name, view, comment, share, createdAt, videoUrl, cover, bodyPart } = post;

    const renderTitle = (
        <Link
            color="inherit"
            variant="subtitle1"
            underline="hover"
            sx={{
                overflow: 'hidden',
                WebkitLineClamp: 2,
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                mt: 1,
            }}
        >
            {name}
        </Link>
    );

    const renderCover = (
        <Box
            component="img"
            alt={title}
            src="/assets/images/exercises/exercise_16.jpg"
            sx={{
                top: 0,
                width: 1,
                height: 1,
                objectFit: 'cover',
                position: 'absolute',
            }}
        />
        // <a
        //   href={videoUrl}
        //   target="_blank" // Opens the video in a new tab
        //   rel="noopener noreferrer" // Security measure
        //   style={{
        //     position: 'absolute',
        //     width: '100%',
        //     height: '100%',
        //     textDecoration: 'none', // Removing underline from the link
        //     overflow: 'hidden', // Hide any potential overflow content
        //   }}
        // >
        //   <span style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(1px, 1px, 1px, 1px)', whiteSpace: 'nowrap' }}>
        //     Go to video
        //   </span>
        //   <Box

        //     style={{
        //       backgroundImage: "", // Using the cover image as the background
        //       backgroundSize: 'cover',
        //       display: 'block', // Making the entire box clickable
        //       width: '100%',
        //       height: '100%',
        //     }}
        //   />
        // </a>
    );

    const renderDate = (
        <Typography
            variant="caption"
            sx={{
                backgroundColor: '#EAECEE',
                p: '3px',
                borderRadius: '4px',
                fontWeight: 'normal',
                lineHeight: '.9',
            }}
        >
            {bodyPart}
        </Typography>
    );

    return (
        <Grid xs={4}>
            <Card sx={{}}>
                <Box
                    sx={{
                        position: 'relative',
                        pt: 'calc(100% * 3 / 4)',
                    }}
                >
                    {renderCover}
                </Box>

                <Box
                    sx={{
                        p: 2,
                        pb: 0,
                    }}
                >
                    {renderDate}
                    {renderTitle}
                </Box>
                <Stack alignItems="center">
                    <IconButton>
                        <FontAwesomeIcon icon={faCirclePlus} size="xs" />
                    </IconButton>
                </Stack>
            </Card>
        </Grid>
    );
}

MiniExerciseCard.propTypes = {
    post: PropTypes.object.isRequired,
    index: PropTypes.number,
};
