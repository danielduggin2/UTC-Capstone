import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { Avatar, Box, Card, CardContent, CardMedia, Paper, TextField } from '@mui/material';
import { posts } from 'src/_mock/blog';

import Iconify from 'src/components/iconify';

import PostCard from '../post-card';
import PostSort from '../post-sort';
import PostSearch from '../post-search';
import stockImage from '../../../_mock/office_stock_1.jpg'

// ----------------------------------------------------------------------

export default function ViewPatientView() {

  const fontColor = {
    style: { color: 'rgb(100, 0, 0)' }
}
  return (
    <Container>
      {/* <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">View Patient</Typography>

        <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
          New Post
        </Button>
      </Stack>

      <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
        <PostSearch posts={posts} />
        <PostSort
          options={[
            { value: 'latest', label: 'Latest' },
            { value: 'popular', label: 'Popular' },
            { value: 'oldest', label: 'Oldest' },
          ]}
        />
      </Stack> */}
      <Grid container spacing={2}>
        <Grid xs={7}>
          <Card sx={{p:2,pt:4,pb:4}}><Typography variant="h6" mb={1}>General Information</Typography>
              <Grid container xs={12} spacing={3} mb={4}>
              
                <Grid xs={6} >
                  <Typography variant="caption">First Name</Typography>
                  <Typography variant="body1">Andres</Typography>
                </Grid>
                <Grid xs={6} >
                  <Typography variant="caption">Last Name</Typography>
                  <Typography variant="body1">Cavalie</Typography>
                </Grid>
                <Grid xs={6} >
                  <Typography variant="caption">Birthday</Typography>
                  <Typography variant="body1">2/15/2024</Typography>
                </Grid>
                <Grid xs={6} >
                  <Typography variant="caption">Gender</Typography>
                  <Typography variant="body1">Male</Typography>
                </Grid>
                <Grid xs={6} >
                  <Typography variant="caption">Email</Typography>
                  <Typography variant="body1">andrescavalie@gmail.com</Typography>
                </Grid>
                <Grid xs={6} >
                  <Typography variant="caption">Phone</Typography>
                  <Typography variant="body1">(931) 409 - 9499</Typography>
                </Grid>
              </Grid>
              <Typography variant="h6" mb={1}>Address Information</Typography>
              <Grid container xs={12} spacing={3}>
              
                <Grid xs={12} >
                  <Typography variant="caption">Address</Typography>
                  <Typography variant="body1">900 Mountain Creek Rd</Typography>
                </Grid>
                <Grid xs={4} >
                  <Typography variant="caption">City</Typography>
                  <Typography variant="body1">Chattanooga</Typography>
                </Grid>
                <Grid xs={4} >
                  <Typography variant="caption">State</Typography>
                  <Typography variant="body1">TN</Typography>
                </Grid>
                <Grid xs={4} >
                  <Typography variant="caption">Zip</Typography>
                  <Typography variant="body1">37405</Typography>
                </Grid>
              </Grid>
              </Card>
        </Grid>
        <Grid xs={5}>
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
