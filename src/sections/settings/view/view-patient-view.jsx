import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';

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
    Tabs,
    Tab,
    Divider,
} from '@mui/material';

import { primary } from 'src/theme/palette';

import MiniExerciseView from 'src/sections/workouts/mini-exercise-view';

import ReadPatientView from '../read-view';
import EditPatientView from '../edit-view';
import AppWebsiteVisits from '../app-website-visits';
import stockImage from '../../../_mock/office_stock_1.jpg';

export default function SettingsView() {
    const [editState, setEditState] = useState(false);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(0);
    const [exercisesOpen, setexercisesOpen] = useState(false);
    const [appointmentNotes, setappointmentNotes] = useState([]);

    const handleClickOpen = () => {
        setOpen(true);
    };


    const handleClose = () => {
        setOpen(false);
    };
    const fontColor = {
        style: { color: 'rgb(100, 0, 0)' },
    };
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


    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        <>
            <Container>
                <Tabs sx={{}} value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Office Settings"/>
          <Tab label="User Settings" />
        </Tabs>
        <Divider sx={{mb:2}}></Divider>
                <Grid container spacing={2}>
                    <Grid xs={7}>
                        <Stack spacing={2}>
                            <Card sx={{ p: 2}}>
                                <EditPatientView setEditState={setEditState} />
                            </Card>
                        </Stack>
                    </Grid>
                    <Grid xs={5}>
                        <Stack spacing={2}>
                            <Card sx={{ p: 2, pb: 4 }}>
                                <ReadPatientView setEditState={setEditState} />
                            </Card>
                        </Stack>
                    </Grid>
                    
                </Grid>
            </Container>
        </>
    );
}
