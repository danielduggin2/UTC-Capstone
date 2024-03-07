import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons'

// import Draggable from 'react-draggable';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import { Box, Card, Avatar, CardMedia, IconButton, CardContent,ListItemButton, List, ListItem, ListItemIcon, Checkbox, ListItemText, Modal, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Tab } from '@mui/material';

import { primary } from 'src/theme/palette';
import { secondary } from 'src/theme/palette';
import { common, grey } from '@mui/material/colors';


import ReadPatientView from '../read-view';
import EditPatientView from '../edit-view';
import stockImage from '../../../_mock/office_stock_1.jpg'
import exercisesCard from '../../../_mock/exercisescard.jpg';
import { base } from '@faker-js/faker';
import { color } from 'framer-motion';


export default function ViewPatientView() {
	const [editState,setEditState] = useState(false);
	const [open, setOpen] = useState(true);
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
		
		<Box mb={2}height="200px" sx={{overflow:"hidden", overflowX:"scroll",
		'&::-webkit-scrollbar': {
			width: '1px',
			height: '10px'
		  },
		  '&::-webkit-scrollbar-track': {
			background: '#F9FAFB',
		  },
		  '&::-webkit-scrollbar-thumb': {
			background: '#888',
			borderRadius: '10px',
		  },
		  '&::-webkit-scrollbar-thumb:hover': {
			background: '#555',
		  },
	
	}}>
			<Stack direction="row" spacing={2}>
				<Box width="100px" sx={{backgroundColor:'red',flexShrink:0}}>TEXT</Box>
				<Box width="100px" sx={{backgroundColor:'red',flexShrink:0}}>TEXT</Box>
				<Box width="100px" sx={{backgroundColor:'red',flexShrink:0}}>TEXT</Box>
				<Box width="100px" sx={{backgroundColor:'red',flexShrink:0}}>TEXT</Box>
				<Box width="100px" sx={{backgroundColor:'red',flexShrink:0}}>TEXT</Box>
				<Box width="100px" sx={{backgroundColor:'red',flexShrink:0}}>TEXT</Box>
				<Box width="100px" sx={{backgroundColor:'red',flexShrink:0}}>TEXT</Box>
				<Box width="100px" sx={{backgroundColor:'red',flexShrink:0}}>TEXT</Box>
				<Box width="100px" sx={{backgroundColor:'red',flexShrink:0}}>TEXT</Box>
				<Box width="100px" sx={{backgroundColor:'red',flexShrink:0}}>TEXT</Box>
				<Box width="100px" sx={{backgroundColor:'red',flexShrink:0}}>TEXT</Box>
				<Box width="100px" sx={{backgroundColor:'red',flexShrink:0}}>TEXT</Box>
				<Box width="100px" sx={{backgroundColor:'red',flexShrink:0}}>TEXT</Box>
			</Stack>
		</Box>
		<Grid container spacing={2}>
			<Grid xs={6}>
			<Stack spacing={2}>

				<Card sx={{ p: 2, pb: 4 }}>
					<Stack direction="row-reverse">
						{/* <IconButton aria-label="delete" color="primary" onClick={() => {setEditState(!editState);}}> */}
						<IconButton aria-label="delete" color="primary" onClick={() => {handleClickOpen()}}>
						{editState ? <FontAwesomeIcon icon={faTimes} size="xs"/> : <FontAwesomeIcon icon={faPen} size="xs"/>}
						</IconButton>
					</Stack>
					{!editState ? <ReadPatientView setEditState={setEditState}/> : <EditPatientView setEditState={setEditState}/> }
				</Card>
			</Stack>
			</Grid>
			<Grid xs={6}>
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
					{/* <Card>
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
					</Card> */}
				</Stack>
			</Grid>
		</Grid>
    </Container>

	{/* Notecard view on click */}
	{/* need this card to be a bit wider */}
	<Dialog
  		open={open}
  		keepMounted
  		onClose={handleClose}
  		aria-describedby="alert-dialog-slide-description"
  		scroll='paper'
  		maxWidth='xl'
  		PaperProps={{sx:{height:650},}}
		
	>		
    <DialogTitle>Workout for Cavalie from 3-6-24</DialogTitle>
    <DialogContent>
	{/* Notes */}
	<Box mt={2}>
		<Typography variant="h6">Notes from session</Typography>
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Card>
    	  			<CardContent style={{backgroundColor: primary.lighter}}>
    	  	  			{/* <Typography variant="body2" color="text.secondary">
    	  	    			Sample Workout Name
    	  	  			</Typography> */}
						<List>
							<ListItem>Range of motion getting better</ListItem>
							<ListItem>Swelling is down. Still need to ice after each session</ListItem>
							<ListItem>Quad activation is impressive</ListItem>
						</List>

						<Button
							variant="contained"
							// onClick={() => {}}
						>
							Add Note
						</Button>
    	  			</CardContent>
    			</Card>
			</Grid>
		</Grid>
	</Box>

	{/* Workouts */}
	<Box mt={4}>
      <Typography variant="h6">Workouts completed</Typography>
      	<Grid container spacing={3}>
      	    <Grid item xs={12}>
      	      <Card>
      	        <CardContent style={{backgroundColor: primary.lighter}}>
      	          <Typography>
      	            Can be faker data of our exercises from Angel
      	          </Typography>
      	        </CardContent>
      	      </Card>
      	    </Grid>
      	</Grid>
	</Box>

      {/* Add Workouts */}
      <Box mt={2}>
        <Typography variant="h6">Select workouts</Typography>

        {/* Dropdown Filter */} 
        <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card>
                <CardContent style={{backgroundColor: primary.lighter}}>
                  <Typography>
                    Can have exercises here, filter, selecting a exercise card highlights it, add, adds it above
                  </Typography>

				<Grid container spacing={2} sx={{ mt: 2}}>
                  {/* Add Button */}
				  <Grid item>
					 <Button 
                    	variant="contained"
                    	color="primary"
                    	onClick={() => {}}
                 	 >
                    Add
                  </Button>
				  </Grid>
                 {/* Filter Button */}
				 <Grid item>
					 <Button 
                    	variant="contained"
                    	color="primary"
                    	onClick={() => {}}
                 	 >
                    Filter
                  </Button>
				  </Grid>
				</Grid>

                </CardContent>
              </Card>
            </Grid>  
        </Grid>  
      </Box>

    </DialogContent>  
</Dialog>
	{/* 
	OG dialog box
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
										disablePadding
										secondaryAction={
											<IconButton edge="end" onClick={handleClickOpen}>
											<FontAwesomeIcon icon={faPen} size="xs"/>
											</IconButton>
										}
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
			</DialogContent>
      </Dialog> */}
  </>
  );
}
