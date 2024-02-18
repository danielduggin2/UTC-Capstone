import React, { useState } from 'react';

import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItem from '@mui/material/ListItem';
import { DialogActions } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
// import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import ListItemText from '@mui/material/ListItemText';
import DialogContent from '@mui/material/DialogContent';

import Iconify from 'src/components/iconify';

import MessageView from '../message-view'; // Update the path as needed

export default function InboxView() {
  const [openComposeDialog, setOpenComposeDialog] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, sender: 'John Doe', subject: 'Meeting Tomorrow', content: 'Hi, let\'s have a meeting tomorrow at 10 AM.' },
    { id: 2, sender: 'Jane Smith', subject: 'Project Update', content: 'The project is progressing well. Here\'s the latest update.' },
    // Add more messages as needed
  ]);

  const [composeFormData, setComposeFormData] = useState({
    to: '',
    subject: '',
    message: '',
  });

  const [selectedMessage, setSelectedMessage] = useState(null);
  const [openMessageView, setOpenMessageView] = useState(false);

  const handleOpenComposeDialog = () => {
    setOpenComposeDialog(true);
  };

  const handleCloseComposeDialog = () => {
    setOpenComposeDialog(false);
  };

  const handleComposeInputChange = (event) => {
    const { name, value } = event.target;
    setComposeFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSendNewMessage = () => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: prevMessages.length + 1,
        sender: 'You', // Replace with the actual user's name
        subject: composeFormData.subject,
        content: composeFormData.message,
      },
    ]);
    handleCloseComposeDialog();
  };

  const handleViewMessage = (message) => {
    setSelectedMessage(message);
    setOpenMessageView(true);
  };

  const handleCloseMessageView = () => {
    setSelectedMessage(null);
    setOpenMessageView(false);
  };

  return (
    <Grid xs={12} md={6} lg={4}>
      <Card>
        <Box
            sx={{
              p: 3,
              display: 'grid',
              gridTemplateColumns: '1fr',
            }}
          >
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
              <Typography variant="h4">Inbox</Typography>
              <Button variant="contained" color="primary" startIcon={<Iconify icon="eva:plus-fill" />} onClick={handleOpenComposeDialog}>
                New Message
              </Button>
            </Stack>

            {/* Compose New Message Dialog */}
            <Dialog open={openComposeDialog} onClose={handleCloseComposeDialog} maxWidth="md" fullWidth>
              <DialogTitle>Compose New Message</DialogTitle>
              <DialogContent>
              <Stack spacing={2} mt={2}>
                <TextField
                  label="To"
                  fullWidth
                  name="to"
                  value={composeFormData.to}
                  onChange={handleComposeInputChange}
                />
                <TextField
                  label="Subject"
                  fullWidth
                  name="subject"
                  value={composeFormData.subject}
                  onChange={handleComposeInputChange}
                />
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  fullWidth
                  name="message"
                  value={composeFormData.message}
                  onChange={handleComposeInputChange}
                />
              </Stack>
              </DialogContent>
              <DialogActions sx={{pb: 2}}>
                <Button variant="contained" color="primary" onClick={handleSendNewMessage}>
                  Send
                </Button>
              </DialogActions>
            </Dialog>

            {/* List of Messages */}
            <List justifyContent="space-between" mb={5}>
              {messages.map((message) => (
                <ListItem key={message.id} button 
                  onClick={() => handleViewMessage(message)} 
                  sx={{
                      border: (theme) => `solid 1px ${theme.palette.divider}`,
                      mb: 1.5,
                    }}
                >
                  <ListItemText primary={message.subject} secondary={message.sender} />
                </ListItem>
              ))}
            </List>

            {/* Individual Message View */}
            <MessageView message={selectedMessage} onClose={handleCloseMessageView} />
          </Box>
      </Card>
    </Grid>
  );
}
