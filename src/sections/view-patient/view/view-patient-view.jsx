import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons'

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { Box, Card, Avatar, CardMedia, IconButton, CardContent,ListItemButton, List, ListItem, ListItemIcon, Checkbox, ListItemText, Modal, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Tab } from '@mui/material';

import Tabs, { tabsClasses } from '@mui/material/Tabs';
import ReadPatientView from '../read-view';
import EditPatientView from '../edit-view';
import stockImage from '../../../_mock/office_stock_1.jpg'
import exercisesCard from '../../../_mock/exercisescard.jpg';

export default function ViewPatientView() {
	const [editState,setEditState] = useState(false);
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(0);

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleChange = (event, newValue) => {
		setValue(newValue);
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
		scroll='paper'
		maxWidth='xl'
		PaperProps={{sx:{height:500},}}
    >
        <DialogTitle>Edit Workouts
		<Box
			sx={{
			flexGrow: 1,
			bgcolor: 'background.paper',
			}}
			>
			<Tabs
			value={value}
			onChange={handleChange}
			variant="scrollable"
			scrollButtons
			aria-label="visible arrows tabs example"
			sx={{
			[`& .${tabsClasses.scrollButtons}`]: {
			'&.Mui-disabled': { opacity: 0.3 },
			},
			}}
			>
				<Tab label="Mon 3/4" />
				<Tab label="Tues 3/5" />
				<Tab label="Wed 3/6" />
				<Tab label="Thurs 3/7" />
				<Tab label="Fri 3/8" />
				<Tab label="Sat 3/9" />
				<Tab label="Sun 3/10" />
			</Tabs>
		</Box>
		</DialogTitle>
        <DialogContent>
<List>
	{[0, 1, 2, 3].map((value) => {
	const labelId = `checkbox-list-label-${value}`;
	return (
		<ListItem
		key={value}
		disablePadding
		>
			<ListItemButton role={undefined} onClick={handleClickOpen} dense>
				<ListItemText id={labelId} primary={`Workout ${value + 1}`} />
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
			</ListItemButton>
		</ListItem>
	)})}
</List>
			{/* <Button
				sx={{
				background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
				borderRadius: 1,
				border: 0,
				color: 'white',
				width:'100%',
				height: '100%',
				padding: '0 30px',
				boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
				'&:hover': {
				boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .5)',
				},
				}}
				>
				Add Workout
			</Button> */}
        </DialogContent>
        {/* <DialogActions/> */}
      </Dialog>
  </>
  );
}
