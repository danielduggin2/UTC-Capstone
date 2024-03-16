import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { fShortenNumber } from 'src/utils/format-number';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function PostCard({ post, index }) {
    const { name, cover, bodyPart, } = post;

    const renderName = (
        <Link
            color="inherit"
            variant="h5"
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
            alt={name}
            src="/assets/images/exercises/exercise_2.jpg"
            sx={{
                top: 0,
                width: 1,
                height: 1,
                objectFit: 'cover',
                position: 'absolute',
            }}
        />
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
        <Grid xs={12} sm={6} md={3}>
            <Card>
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
                    }}
                >
                    {renderDate}
                    {renderName}
                </Box>
            </Card>
        </Grid>
    );
}

PostCard.propTypes = {
    post: PropTypes.object.isRequired,
};
