import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTimes, faCircleMinus } from '@fortawesome/free-solid-svg-icons';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import {
    Box,
    Card,
    List,
    Modal,
    Paper,
    Avatar,
    Button,
    ListItem,
    CardMedia,
    IconButton,
    CardContent,
    CardActions,
} from '@mui/material';

import { primary } from 'src/theme/palette';

import MiniExerciseView from 'src/sections/workouts/mini-exercise-view';

import ReadPatientView from '../read-view';
import EditPatientView from '../edit-view';
import AppWebsiteVisits from '../app-website-visits';
import stockImage from '../../../_mock/office_stock_1.jpg';
import Cookies from 'js-cookie';
import { Link, useParams } from 'react-router-dom';

export default function ViewPatientView() {
    const [editState, setEditState] = useState(false);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(0);
    const [exercisesOpen, setexercisesOpen] = useState(false);
    const [appointmentNotes, setappointmentNotes] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const [patientInfo, setPatientInfo] = useState({});
    const [selectedAppointment, setSelectedAppointment] = useState({});
    const currentTime = new Date();
    const { id } = useParams();

    function getAppointments() {
        const cookieValue = Cookies.get('JwtToken');
        const requestOptions = {
            method: 'GET',
            headers: { Authorization: `Bearer ${cookieValue}` },
        };
        fetch(`https://localhost:7031/api/appointments/patient/${id}`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                data.forEach((appointment) => {
                    const dateObj = new Date(appointment.appointmentTime);
                    appointment.appointmentTime = dateObj;
                });
                console.log(data);
                setAppointments(data);
            });
    }

    function getAppointmentById(id) {
        const cookieValue = Cookies.get('JwtToken');
        const requestOptions = {
            method: 'GET',
            headers: { Authorization: `Bearer ${cookieValue}` },
        };
        fetch(`https://localhost:7031/api/appointments/${id}`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log(data[0]);
                const dateObj = new Date(data[0].appointmentTime);
                data[0].appointmentTime = dateObj;
                setSelectedAppointment(data[0]);
            });
    }

    function getPatientInfo() {
        const cookieValue = Cookies.get('JwtToken');
        const requestOptions = {
            method: 'GET',
            headers: { Authorization: `Bearer ${cookieValue}` },
        };
        fetch(`https://localhost:7031/api/patients/${id}`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                const dateObj = new Date(data[0].birthdate);
                data[0].birthdate = dateObj;
                setPatientInfo(data[0]);
            });
    }

    const handleClickOpen = (id) => {
        console.log(id);
        getAppointmentById(id);
        setOpen(true);
    };
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const fontColor = {
        style: { color: 'rgb(100, 0, 0)' },
    };

    const StatusText = ({ time }) => {
        let futureTime = new Date(time);
        futureTime.setMinutes(futureTime.getMinutes() + 30);
        let statusText = 'Upcoming';
        let color = '#fc9d03';
        let fontColor = '#fff';
        if (currentTime >= time && currentTime <= futureTime) {
            statusText = 'In Progress';
            color = '#7e44db';
        } else if (currentTime > time) {
            statusText = 'Completed';
            color = '#44b0db';
        }
        return (
            <Box sx={{ backgroundColor: color, borderRadius: 0.5 }} p="5px">
                <Typography
                    sx={{ fontWeight: 'normal', lineHeight: '.9', color: fontColor }}
                    variant="subtitle2"
                >
                    {statusText}
                </Typography>
            </Box>
        );
    };

    const AppointmentNotesList = ({ notes }) => {
        if (notes.length > 0) {
            return (
                <List sx={{ listStyleType: 'disc', listStylePosition: 'inside' }}>
                    {notes.slice(0, 3).map((note, i) => (
                        <ListItem
                            key={note.id}
                            sx={{
                                display: 'list-item',
                                pl: 1,
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                        >
                            {note.content}
                        </ListItem>
                    ))}
                </List>
            );
        } else {
            return (
                <Stack
                    sx={{ height: '100%', mt: '30px' }}
                    alignItems="center"
                    justifyContent="center"
                >
                    No Notes Available
                </Stack>
            );
        }
    };
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        getPatientInfo();
        getAppointments();
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
                <Link to={`/patients`}>Back</Link>
                <Typography variant="h3" pb={2}>
                    {patientInfo.firstName} {patientInfo.lastName}
                </Typography>
                <Typography variant="h6">Appointments</Typography>

                <Box
                    id="scrollableContainer"
                    mb={2}
                    mt={1}
                    sx={{
                        overflow: 'hidden',
                        overflowX: 'scroll',
                        '&::-webkit-scrollbar': {
                            width: '1px',
                            height: '10px',
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
                    }}
                >
                    <Stack direction="row" spacing={2} sx={{ pb: '10px' }}>
                        {appointments.map((appointment, i) => (
                            <Card
                                key={appointment.id}
                                sx={{ flexShrink: 0, width: '350px', height: '250px' }}
                            >
                                <Stack
                                    justifyContent="space-between"
                                    alignItems="flex"
                                    direction="column"
                                    sx={{ height: '100%' }}
                                >
                                    <CardContent sx={{ pb: 1 }}>
                                        <Stack
                                            px={1}
                                            pb={1}
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="center"
                                        >
                                            <Typography variant="h6">
                                                {appointment.appointmentTime.toLocaleString(
                                                    'en-US',
                                                    {
                                                        month: 'short',
                                                        day: 'numeric',
                                                        year: '2-digit',
                                                    }
                                                )}{' '}
                                                {appointment.appointmentTime.toLocaleString(
                                                    'en-US',
                                                    { hour: '2-digit', minute: 'numeric' }
                                                )}
                                            </Typography>
                                            <StatusText time={appointment.appointmentTime} />
                                        </Stack>
                                        <AppointmentNotesList notes={appointment.notes} />
                                    </CardContent>
                                    <CardActions sx={{ px: 2 }}>
                                        <Stack alignItems="center" sx={{ width: '100%' }}>
                                            <Button onClick={() => handleClickOpen(appointment.id)}>
                                                See More
                                            </Button>
                                        </Stack>
                                    </CardActions>
                                </Stack>
                            </Card>
                        ))}
                    </Stack>
                </Box>
                <Grid container spacing={2}>
                    <Grid xs={7}>
                        <Stack spacing={2}>
                            <Card sx={{ p: 2, pb: 4 }}>
                                <Stack direction="row-reverse">
                                    <IconButton
                                        aria-label="delete"
                                        color="primary"
                                        onClick={() => {
                                            setEditState(!editState);
                                        }}
                                    >
                                        {/* <IconButton aria-label="delete" color="primary" onClick={() => {handleClickOpen()}}> */}
                                        {editState ? (
                                            <FontAwesomeIcon icon={faTimes} size="xs" />
                                        ) : (
                                            <FontAwesomeIcon icon={faPen} size="xs" />
                                        )}
                                    </IconButton>
                                </Stack>

                                <ReadPatientView
                                    editState={editState}
                                    setEditState={setEditState}
                                    patientInfo={patientInfo}
                                />

                                <EditPatientView
                                    editState={editState}
                                    setEditState={setEditState}
                                    patientInfo={patientInfo}
                                />
                            </Card>
                        </Stack>
                    </Grid>
                    <Grid xs={5}>
                        <Stack spacing={2}>
                            <Card>
                                <CardMedia sx={{ height: 140 }} image={stockImage} title="banner" />
                                <CardContent>
                                    <Grid container spacing={2} columnSpacing={1}>
                                        <Grid xs={12} display="flex" justifyContent="center">
                                            <Avatar
                                                sx={{
                                                    bgcolor: '#ff5722',
                                                    mt: -13,
                                                    width: 120,
                                                    height: 120,
                                                    fontSize: 40,
                                                }}
                                            >
                                                {patientInfo.firstName?.[0]}
                                                {patientInfo.lastName?.[0]}
                                            </Avatar>
                                        </Grid>
                                        <Grid xs={12} display="flex" justifyContent="center">
                                            <Typography variant="h6">
                                                {patientInfo.firstName} {patientInfo.lastName}
                                            </Typography>
                                        </Grid>
                                        <Grid
                                            container
                                            xs={12}
                                            display="flex"
                                            justifyContent="center"
                                        >
                                            <Grid>
                                                <Button variant="outlined">New Appointment</Button>
                                            </Grid>
                                            <Grid>
                                                <Button variant="contained">Send Message</Button>
                                            </Grid>
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
                                            data: [7, 6, 5, 4, 5, 6, 4, 4, 3, 3, 2],
                                        },
                                        {
                                            name: 'Mobility',
                                            type: 'line',
                                            fill: 'solid',
                                            data: [2, 3, 3, 3, 4, 3, 5, 4, 5, 5, 6],
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
            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',

                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    <Stack direction="row" spacing={2}>
                        <Paper sx={{ p: 2, minHeight: '520px', minWidth: '500px' }}>
                            {Object.keys(selectedAppointment).length === 0 ? (
                                ''
                            ) : (
                                <>
                                    <Typography variant="h5">
                                        {selectedAppointment.appointmentTime
                                            ?.toLocaleString('en-US', {
                                                year: 'numeric',
                                                month: '2-digit',
                                                day: '2-digit',
                                            })
                                            .replace(/\//g, '-')}
                                    </Typography>
                                    <Box mt={2}>
                                        <Typography variant="h6">Notes from session</Typography>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12}>
                                                <Card>
                                                    <CardContent
                                                        style={{ backgroundColor: primary.lighter }}
                                                    >
                                                        {/* <Typography variant="body2" color="text.secondary">
    	  	    			Sample Workout Name
    	  	  			</Typography> */}
                                                        <List>
                                                            {selectedAppointment.notes.map(
                                                                (note, index) => (
                                                                    <ListItem>
                                                                        {note.content}
                                                                    </ListItem>
                                                                )
                                                            )}
                                                            {/* <ListItem>Range of motion getting better</ListItem>
							<ListItem>Swelling is down. Still need to ice after each session</ListItem>
							<ListItem>Quad activation is impressive</ListItem> */}
                                                        </List>
                                                    </CardContent>
                                                </Card>
                                                <Button
                                                    variant="contained"
                                                    // onClick={() => {}}
                                                >
                                                    Add Note
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Box>

                                    {/* Workouts */}
                                    <Box mt={4}>
                                        <Typography variant="h6">Exercises</Typography>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12}>
                                                <Card>
                                                    <CardContent
                                                        style={{ backgroundColor: primary.lighter }}
                                                    >
                                                        {selectedAppointment.exercises.map(
                                                            (ex, i) => (
                                                                <Stack spacing={1} pt={1}>
                                                                    <Stack
                                                                        direction="row"
                                                                        justifyContent="space-between"
                                                                        alignItems="center"
                                                                    >
                                                                        <Stack
                                                                            direction="row"
                                                                            alignItems="center"
                                                                            spacing={2}
                                                                        >
                                                                            <Box
                                                                                sx={{
                                                                                    width: '60px',
                                                                                    height: '60px',
                                                                                    display:
                                                                                        'inline',
                                                                                    boxShadow:
                                                                                        '0px 1px 5px 2px lightgrey',
                                                                                    borderRadius:
                                                                                        '10px',
                                                                                    p: 0.7,
                                                                                }}
                                                                            >
                                                                                <Box
                                                                                    component="img"
                                                                                    alt={
                                                                                        ex.getRiteExerciseId
                                                                                    }
                                                                                    src="/assets/images/exercises/exercise_16.jpg"
                                                                                    sx={{
                                                                                        objectFit:
                                                                                            'cover',
                                                                                        display:
                                                                                            'inline',
                                                                                    }}
                                                                                />
                                                                            </Box>
                                                                            <Typography
                                                                                sx={{
                                                                                    display:
                                                                                        'inline',
                                                                                }}
                                                                                variant="body1"
                                                                            >
                                                                                {ex.name}
                                                                            </Typography>
                                                                        </Stack>
                                                                        <Box>
                                                                            <IconButton>
                                                                                <FontAwesomeIcon
                                                                                    icon={
                                                                                        faCircleMinus
                                                                                    }
                                                                                    size="xs"
                                                                                />
                                                                            </IconButton>
                                                                        </Box>
                                                                    </Stack>
                                                                </Stack>
                                                            )
                                                        )}
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                        </Grid>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => {
                                                setexercisesOpen(!exercisesOpen);
                                            }}
                                        >
                                            Add
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => {}}
                                        >
                                            Filter
                                        </Button>
                                    </Box>
                                </>
                            )}
                        </Paper>
                        <Paper
                            sx={{
                                p: 2,
                                height: '475px',
                                display: exercisesOpen ? 'block' : 'none',
                            }}
                        >
                            <Stack sx={{ width: 350 }}>
                                <MiniExerciseView sx={{ minHeight: 0 }} />
                            </Stack>
                        </Paper>
                    </Stack>
                </Box>
            </Modal>
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
