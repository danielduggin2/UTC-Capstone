import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import AppWebsiteVisits from '../app-website-visits';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import { Box, Card, Avatar, CardMedia, IconButton, CardContent,ListItemButton, List, ListItem, ListItemIcon, Checkbox, ListItemText, Modal, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Tab, CardActions } from '@mui/material';

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
const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		if (!scrolled) {
			const container = document.getElementById('scrollableContainer');
			if (container) {
				container.scrollLeft = container.scrollWidth;
				setScrolled(true);
			}
		}
	}, [scrolled]);
  return (
	<>
    <Container>
		<Typography variant='h3' pb={2}>Andres Cavalie</Typography>
		<Typography variant='h6'>Appointments</Typography>
		
		<Box id="scrollableContainer" mb={2} mt={1} sx={{overflow:"hidden", overflowX:"scroll",
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
			<Stack direction="row" spacing={2} sx={{pb:'10px'}} >
				{[1,2,3,4,5,6,7,8,9,10,11].map(x=>{
					return (
						<Card sx={{flexShrink:0,width:'350px',height:'250px'}}>
							<CardContent sx={{pb:1}}>
								<Stack
								px={1}
								pb={1}
									direction="row"
									justifyContent="space-between"
									alignItems="center">
								<Typography variant="h6"> March 6 2024</Typography>
								<Box sx={{backgroundColor:'#ffde73',borderRadius: .5,}} p='5px' >
								<Typography sx={{fontWeight:'normal',lineHeight:'.9'}} variant="subtitle2">In Progress</Typography>
								</Box>
								</Stack>
									<List sx={{listStyleType:'disc',listStylePosition:'inside',}}>
										<ListItem sx={{ display: 'list-item',pl:1,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>
											Range of motion getting better. Swelling is down. Swelling is down.
										</ListItem>
										<ListItem sx={{ display: 'list-item',pl:1,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>
											Swelling is down. Swelling is down. Swelling is down.
										</ListItem>
										<ListItem sx={{ display: 'list-item',pl:1,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>
											Still need to ice after each session
										</ListItem>
									</List>
							</CardContent>
							<CardActions sx={{px:2}}>
								<Button  onClick={handleClickOpen} >See More</Button>
							</CardActions>
						</Card>
					)
				})}
				
				
				
				
			</Stack>
		</Box>
		<Grid container spacing={2}>
			<Grid xs={7}>
			<Stack spacing={2}>

				<Card sx={{ p: 2, pb: 4 }}>
					<Stack direction="row-reverse">
						<IconButton aria-label="delete" color="primary" onClick={() => {setEditState(!editState);}}>
						{/* <IconButton aria-label="delete" color="primary" onClick={() => {handleClickOpen()}}> */}
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
						<Grid container spacing={2} columnSpacing={1}>
                  <Grid xs={12} display="flex" justifyContent="center" ><Avatar sx={{bgcolor: '#ff5722', mt:-13 , width: 120, height: 120,fontSize:40 }}>AC</Avatar></Grid>
                  <Grid xs={12} display="flex" justifyContent="center" ><Typography variant="h6">Andres Cavalie</Typography></Grid>
                  <Grid container xs={12} display="flex" justifyContent="center">
                    <Grid><Button variant="outlined">Add Patient</Button></Grid>
                    <Grid><Button variant="contained">Send Message</Button></Grid>
                  </Grid>
                </Grid>
						</CardContent>
					</Card>

					<AppWebsiteVisits
            title="Recovery Tracking"
            subheader="(+43%) than last year"
            chart={{
              labels: [
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ],
              series: [
                {
                  name: 'Pain',
                  type: 'line',
                  fill: 'solid',
                  data: [7, 6, 5, 4,5 , 6, 4, 4, 3, 3, 2],
                },
                {
                  name: 'Mobility',
                  type: 'line',
                  fill: 'solid',
                  data: [2, 3, 3, 3,4 , 3, 5, 4, 5, 5, 6],
                },
              ],
            }}
          />
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
  		PaperProps={{sx:{height:650, width:750},}}		
		sx={{maxidth: 650}}
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
				<Grid container spacing={2} sx={{ mt: 2}}>  
				  <Grid item>
					 <Button 
                    	variant="contained"
                    	color="primary"
                    	onClick={() => {}}
                 	 >
                    Add
                  </Button>
				  </Grid>
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
