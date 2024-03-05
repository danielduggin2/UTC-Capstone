import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons'

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { Box, Card, Avatar, CardMedia, IconButton, CardContent,ListItemButton, List, ListItem, ListItemIcon, Checkbox, ListItemText, Modal, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

import ReadPatientView from '../read-view';
import EditPatientView from '../edit-view';
import stockImage from '../../../_mock/office_stock_1.jpg'
import exercisesCard from '../../../_mock/exercisescard.jpg';

export default function ViewPatientView() {
	const [editState,setEditState] = useState(false);
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
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
							<IconButton edge="end" onClick={handleClickOpen}>
								<FontAwesomeIcon icon={faPen} size="xs"/>
							</IconButton>
							}
						disablePadding
					>
						<ListItemButton role={undefined} onClick={handleClickOpen} dense>
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
	<Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
    >
        <DialogTitle>{"Edit Workouts"}</DialogTitle>
        <DialogContent>
          
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
  </>
  );
}
