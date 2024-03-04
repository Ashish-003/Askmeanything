// ChatMessage.js
import React from 'react';
import { Typography, Paper, makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  message: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
    maxWidth: '70%',
    alignSelf: 'flex-start',
    borderRadius: '10px',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#e6dcff',
  },
}));

const ChatMessage = ({ text, isUser }) => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={`${classes.message} ${isUser ? classes.userMessage : ''}`}>
      <Typography variant="body1">{text}</Typography>
    </Paper>
  );
};

export default ChatMessage;
