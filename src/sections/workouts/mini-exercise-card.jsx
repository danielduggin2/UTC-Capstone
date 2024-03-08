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
import { IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus,faCirclePlus } from '@fortawesome/free-solid-svg-icons';


// ----------------------------------------------------------------------

export default function MiniExerciseCard({ post, index }) {
  const { title, view, comment, share, createdAt, videoUrl, cover,bodyPart} = post;

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
        mt:1
      }}
    >
      {title}
    </Link>
  );

  const renderInfo = (
    <Stack
      direction="row"
      flexWrap="wrap"
      spacing={1.5}
      justifyContent="flex-end"
      sx={{
        mt: 3,
        color: 'text.disabled',
      }}
    >
      {[
        { number: comment, icon: 'eva:message-circle-fill' },
        { number: view, icon: 'eva:eye-fill' },
        { number: share, icon: 'eva:share-fill' },
      ].map((info, _index) => (
        <Stack
          key={_index}
          direction="row"
        >
          <Iconify width={16} icon={info.icon} sx={{ mr: 0.5 }} />
          <Typography variant="caption">{fShortenNumber(info.number)}</Typography>
        </Stack>
      ))}
    </Stack>
  );

  const renderCover = (
    <Box
      component="img"
      alt={title}
      src={cover}
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
        backgroundColor:'#EAECEE',
        p:'3px',
        borderRadius:'4px',
        fontWeight:'normal',
        lineHeight:'.9',
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
            p:2,
            pb:0
          }}
        >
          {renderDate}
          {renderTitle}
          
        </Box>
        <Stack alignItems='center'>
        <IconButton ><FontAwesomeIcon icon={faCirclePlus} size="xs"/></IconButton>
        </Stack>
      </Card>
    </Grid>
  );
}

MiniExerciseCard.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
};
