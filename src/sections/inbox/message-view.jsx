// MessageView.jsx

import React from 'react';
import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { DialogActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

import Iconify from 'src/components/iconify';

export default function MessageView({ message, onClose }) {
  return (
    <Dialog open={!!message} onClose={onClose} maxWidth="md" fullWidth>
      <Stack spacing={2} mt={2}> 
      <DialogTitle>{message?.subject}</DialogTitle>
      <DialogContent>
        <Typography variant="subtitle1" gutterBottom>
          From: {message?.sender}
        </Typography>
        <Typography>{message?.content}</Typography>
      </DialogContent>
      <DialogActions sx={{pb: 2}}>
        <Button variant="contained" color="primary" onClick={onClose} startIcon={<Iconify icon="eva:arrow-back-fill"/>}
            sx={{
                p: 1.5,
                fontSize: '1rem',
            }}
        >
            Back to Inbox
        </Button>
      </DialogActions>
      </Stack>
    </Dialog>
  );
}

MessageView.propTypes = {
  message: PropTypes.shape({
    subject: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};
