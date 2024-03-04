// import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import {db} from '../../../../src/firebase.js';
// import Iconify from 'src/components/iconify';
import { getFirestore, addDoc, collection, getDocs } from "firebase/firestore"
// ----------------------------------------------------------------------
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import AnalyticsTasks from '../app-tasks';
import AppCalendar from '../app-calendar';

export default function AppView() {
  const [calendarEvents, setCalendarEvents] = useState([
    {
      title: 'Appointment with John Doe',
      start: new Date(2024, 3, 1),
      end: new Date(2024, 3, 1),
    },
    {
      title: 'Appointment with Jane Doe',
      start: new Date(2024, 3, 2),
      end: new Date(2024, 3, 2),
    },
  ]);
  const [currentTasks,setCurrentTasks] = useState([])
  const fetchData = async () => {
    try {
      // Get a reference to the Firestore database
      
      // Reference to a Firestore collection (replace "yourCollection" with your collection name)
		const querySnapshot = await getDocs(collection(db, "DashboardTasks"));
		const temporaryArr = [];
		querySnapshot.forEach((doc) => {
		temporaryArr.push({...doc.data(),id:doc.id});
		});
      // Set the data state with the fetched data
      setCurrentTasks(temporaryArr);
	  console.log("set")
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(()=>{
	fetchData()
  }, [])

  
  const handleAddEvent = (event) => {
    setCalendarEvents([...calendarEvents, event]);
  };

  const handleUpdateEvent = (updatedEvent) => {
    const updatedEvents = calendarEvents.map((event) =>
      event.title === updatedEvent.title ? updatedEvent : event
    );
    setCalendarEvents(updatedEvents);
  };

  const handleDeleteEvent = (eventTitle) => {
    setCalendarEvents(calendarEvents.filter((event) => event.title !== eventTitle));
  };
  const navigate = useNavigate();

  const handleNewAppointment = () => {
    navigate('/new-appointment');
  };
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  const saveDataToFirestore = async () => {
    const docRef = await addDoc(collection(db, "myCollection"), {
      field1: inputValue1,
      field2: inputValue2,
    });
    alert("Document written to Database");
};

  return (
    
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Welcome Back
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12}> 
          <AppCalendar
            events={calendarEvents}
            onAddEvent={handleAddEvent}
            onUpdateEvent={handleUpdateEvent}
            onDeleteEvent={handleDeleteEvent}
          />
        </Grid>
        
        <Grid xs={12} sm={6} md={3}>
          <p>VAR:{import.meta.env.VITE_DANIEL}</p>
          <div className="App">
            <h1>Save Data to Firebase Firestore</h1>
            <input
            type="text"
            value={inputValue1}
            onChange={(e) => setInputValue1(e.target.value)}
            />
            <input
            type="text"
            value={inputValue2}
            onChange={(e) => setInputValue2(e.target.value)}
            />
            <button onClick={saveDataToFirestore}>Save to Firestore</button>
          </div>
        <button type="button" onClick={handleNewAppointment}>New Appointment</button>
        </Grid>

        <Grid xs={12} md={12} lg={16}>
          <AnalyticsTasks
            title="Tasks"
            // list={[
            //   { id: '1', name: 'Create FireStone Logo', deleted:false, complete:false },
            //   { id: '2', name: 'Add SCSS and JS files if required' },
            //   { id: '3', name: 'Stakeholder Meeting' },
            //   { id: '4', name: 'Scoping & Estimations' },
            //   { id: '5', name: 'Sprint Showcase' },
            // ]}
			list={currentTasks}
          />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          {/* <AppWidgetSummary
            title="Weekly Sales"
            total={714000}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          /> */}
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          {/* <AppWidgetSummary
            title="New Users"
            total={1352831}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          /> */}
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          {/* <AppWidgetSummary
            title="Item Orders"
            total={1723315}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          /> */}
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          {/* <AppWidgetSummary
            title="Bug Reports"
            total={234}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          /> */}
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          {/* <AppWebsiteVisits
            title="Website Visits"
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
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ],
            }}
          /> */}
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          {/* <AppCurrentVisits
            title="Current Visits"
            chart={{
              series: [
                { label: 'America', value: 4344 },
                { label: 'Asia', value: 5435 },
                { label: 'Europe', value: 1443 },
                { label: 'Africa', value: 4443 },
              ],
            }}
          /> */}
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          {/* <AppConversionRates
            title="Conversion Rates"
            subheader="(+43%) than last year"
            chart={{
              series: [
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
              ],
            }}
          /> */}
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          {/* <AppCurrentSubject
            title="Current Subject"
            chart={{
              categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
              series: [
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ],
            }}
          /> */}
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          {/* <AppNewsUpdate
            title="News Update"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: faker.person.jobTitle(),
              description: faker.commerce.productDescription(),
              image: `/assets/images/covers/cover_${index + 1}.jpg`,
              postedAt: faker.date.recent(),
            }))}
          /> */}
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          {/* <AppOrderTimeline
            title="Order Timeline"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: [
                '1983, orders, $4220',
                '12 Invoices have been paid',
                'Order #37745 from September',
                'New order placed #XF-2356',
                'New order placed #XF-2346',
              ][index],
              type: `order${index + 1}`,
              time: faker.date.past(),
            }))}
          /> */}
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          {/* <AppTrafficBySite
            title="Traffic by Site"
            list={[
              {
                name: 'FaceBook',
                value: 323234,
                icon: <Iconify icon="eva:facebook-fill" color="#1877F2" width={32} />,
              },
              {
                name: 'Google',
                value: 341212,
                icon: <Iconify icon="eva:google-fill" color="#DF3E30" width={32} />,
              },
              {
                name: 'Linkedin',
                value: 411213,
                icon: <Iconify icon="eva:linkedin-fill" color="#006097" width={32} />,
              },
              {
                name: 'Twitter',
                value: 443232,
                icon: <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={32} />,
              },
            ]}
          /> */}
        </Grid>
      </Grid>
    </Container>
  );
}
