import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons'

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { Box, Card, Avatar, CardMedia, IconButton, CardContent,ListItemButton, List, ListItem, ListItemIcon, Checkbox, ListItemText, Modal } from '@mui/material';

import ReadPatientView from '../read-view';
import EditPatientView from '../edit-view';
import stockImage from '../../../_mock/office_stock_1.jpg'
import exercisesCard from '../../../_mock/exercisescard.jpg';

export default function ViewPatientView() {
	const [editState,setEditState] = useState(false);
	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'background.paper',
		borderRadius: 1,
		boxShadow: 0,
		p: 4,
	  };

	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
  const fontColor = {
    style: { color: 'rgb(100, 0, 0)' }
}
  return (
	<>
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
				<List>
				{[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
					<ListItem
						key={value}
						secondaryAction={
							<IconButton edge="end" onClick={handleOpen}>
								<FontAwesomeIcon icon={faPen} size="xs"/>
							</IconButton>
							}
						disablePadding
					>
						<ListItemButton role={undefined} onClick={handleOpen} dense>
							<ListItemText id={labelId} primary={`Workout ${value + 1}`} />
						</ListItemButton>
					</ListItem>
		)})}
					</List>
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
	<Modal
	open={open}
	onClose={handleClose}
	aria-labelledby="modal-modal-title"
	aria-describedby="modal-modal-description"
  >
	<Box sx={style}>
	  <Typography id="modal-modal-title" variant="h6" component="h2">
		Text in a modal
	  </Typography>
	  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
		Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
	  </Typography>
	</Box>
  </Modal>
  </>
  );
}
