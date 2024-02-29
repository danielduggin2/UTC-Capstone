import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { Avatar, Box, Card, CardContent, CardMedia, IconButton, ListItemButton, Paper, TextField,Button } from '@mui/material';
import { posts } from 'src/_mock/blog';
import ReadPatientView from '../read-view';
import EditPatientView from '../edit-view';
import Iconify from 'src/components/iconify';
import exercisesCard from '../../../_mock/exercisescard.jpg';
import PostCard from '../post-card';
import PostSort from '../post-sort';
import PostSearch from '../post-search';
import stockImage from '../../../_mock/office_stock_1.jpg'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons'

export default function ViewPatientView() {
	const [editState,setEditState] = useState(false);
	
  const fontColor = {
    style: { color: 'rgb(100, 0, 0)' }
}
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid xs={7}>
			
          <Stack spacing={2}>
		  <Card sx={{ p: 2, pb: 4 }}>
		  <Stack direction="row-reverse">
				<IconButton aria-label="delete" color="primary" onClick={() => {
				setEditState(!editState);
				}}>
				{editState ? <FontAwesomeIcon icon={faTimes} size="xs"/> : <FontAwesomeIcon icon={faPen} size="xs"/>}
				</IconButton>
			</Stack>
		  	{!editState ? <ReadPatientView setEditState={setEditState}/> : <EditPatientView setEditState={setEditState}/> }
			</Card>
		  </Stack>
        </Grid>
        <Grid xs={5}>
			<Stack spacing={2}>
          <Card>
            <CardMedia
            sx={{height: 140}}
            image={stockImage}
            title="banner"
            />
            <CardContent>
              <Avatar sx={{bgcolor: '#ff5722'}}>AC</Avatar>
              <Typography>Andres Cavalie</Typography>
            </CardContent>
          </Card>
		  <Card>
			<CardMedia sx={{ height: 140 }} image={exercisesCard} title="banner" />
			<CardContent>
				<Stack>
				<ListItemButton>
					<Box>
						<Typography>WORKOUT</Typography>
					</Box>
				</ListItemButton>
				<ListItemButton>
					<Box>
						<Typography>WORKOUT</Typography>
					</Box>
				</ListItemButton>
				<ListItemButton>
					<Box>
						<Typography>WORKOUT</Typography>
					</Box>
				</ListItemButton>
				<ListItemButton>
					<Box>
						<Typography>WORKOUT</Typography>
					</Box>
				</ListItemButton>
				</Stack>
			</CardContent>
		</Card>
		</Stack>
        </Grid>
      
      {/* <Paper elevation={3} /> */}
      
      </Grid>
      {/* <Grid container spacing={3}>
        {posts.map((post, index) => (
          <PostCard key={post.id} post={post} index={index} />
        ))}
      </Grid> */}
    </Container>
  );
}
