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
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';
// ----------------------------------------------------------------------

export default function PostCard({ post, index }) {
  const { title, view, comment, share, createdAt, videoUrl, cover,bodyPart} = post;

  const renderTitle = (
    <Link
      color="inherit"
      variant="subtitle2"
      underline="hover"
      sx={{
        overflow: 'hidden',
        WebkitLineClamp: 2,
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
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
        objectFit: 'cover',
        display:'inline',
		border:'2px solid grey',
			borderRadius:'10px'
      }}
    />
  );

  const renderDate = (
    <Typography
      variant="caption"
      sx={{
        backgroundColor:'#ffde73',
        p:'3px',
        borderRadius:'4px',
        color: 'text.disabled',
        fontWeight:'normal',
        lineHeight:'.9'
      }}
    >
      {bodyPart}
    </Typography>
  );

  return (
    <Grid xs={12} sm={6} md={3}>
      <Card >
        <Box
          sx={{
            p:2,
          }}
        >
			<Stack direction="row" alignItems="center" mb={1} >
			<Typography variant="h6" >Workout 1</Typography>
	
			</Stack>
         
		  <Stack spacing={1} pt={1}>
          <Stack direction="row" alignItems='center' spacing={1}>
            <Box
            sx={{
            width:'50px',
            height:'50px',
            display:'inline'
            }}
            >
				{renderCover}
            </Box>
     <Typography sx={{display:'inline'}} variant="subtitle2">Hello</Typography>
  
          </Stack>
		  <Stack direction="row" alignItems='center' spacing={1}>
            <Box
            sx={{
            width:'50px',
            height:'50px',
            display:'inline'
            }}
            >
				{renderCover}
            </Box>
     <Typography sx={{display:'inline'}} variant="subtitle2">Hello</Typography>
  
          </Stack>
		  <Stack direction="row" alignItems='center' spacing={1}>
            <Box
            sx={{
            width:'50px',
            height:'50px',
            display:'inline',
			
            }}
            >
				{renderCover}
            </Box>
     <Typography sx={{display:'inline'}} variant="subtitle2">Hello</Typography>
  
          </Stack>
		  <Stack direction="row" alignItems='center' spacing={1}>
            <Box
            sx={{
            width:'50px',
            height:'50px',
            display:'inline'
            }}
            >
				{renderCover}
            </Box>
     <Typography sx={{display:'inline'}} variant="subtitle2">Hello</Typography>
  
          </Stack>
		  </Stack>
		  <Stack  pt={2}>
				<Button variant="outlined">See More</Button>	
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
};
