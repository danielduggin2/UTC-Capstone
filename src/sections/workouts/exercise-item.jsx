import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { fDate } from 'src/utils/format-time';
import { fShortenNumber } from 'src/utils/format-number';

import Iconify from 'src/components/iconify';
import { Button, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus, faPen, faTimes } from '@fortawesome/free-solid-svg-icons';
// ----------------------------------------------------------------------

export default function ExerciseItem({ post, index }) {
    const { title, view, comment, share, createdAt, videoUrl, cover,bodyPart} = post;
    const renderCover = (
        <Box
          component="img"
          alt={title}
          src={cover}
          sx={{
            objectFit: 'cover',
            display:'inline',
            
          }}
        />
      );
    console.log(cover)
  return (
    <>
    <Stack spacing={1} pt={1}>
        <Stack direction="row" justifyContent='space-between' alignItems='center'>
			<Stack direction="row" alignItems='center' spacing={2}>
			<Box
			sx={{
			width:'60px',
			height:'60px',
			display:'inline',
			boxShadow: '0px 1px 5px 2px lightgrey',
			borderRadius:'10px',
			p:.7,
			}}
			>
			{renderCover}
			</Box>
			<Typography sx={{display:'inline'}} variant="body1">Hello</Typography>
            
			</Stack>
            <Box>
            <IconButton >
            <FontAwesomeIcon icon={faCircleMinus} size="xs"/>
            </IconButton>
            </Box>
          </Stack>
		  </Stack>
          </>
  );
}

ExerciseItem.propTypes = {
  post: PropTypes.object,
  index: PropTypes.number,
};
