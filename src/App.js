import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider, Container, Paper, Typography } from '@mui/material';
import axios from 'axios';
import qs from 'qs';
import { ReactTyped } from 'react-typed';
import './styles.css'
import HiddenIframe from './iFrame';
// import BottomImage from './bg2.png'
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#007bff',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.5)', // Define secondary text color for faded effect
    },
  },
  typography: {
    fontFamily: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontWeight: 'bold',
      fontSize: '2.5rem',
      marginBottom: '20px',
    },
  },
});

const App = () => {
  const [inputText, setInputText] = useState('');
  const [answer, setAnswer] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendMessage = async () => {
    setIsSubmitting(true);
    try {
      const requestData = qs.stringify({ query: inputText });
      const response = await axios.post('https://backend-gpt-latest.onrender.com', requestData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        }
      });

      const newAnswer = response.data?.data?.message || 'Sorry, I could not understand that.';
      setAnswer(newAnswer);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  useEffect(() => {
    // Function to output cookies
    const outputCookies = () => {
      const cookies = document.cookie;
      const history = window.history.length;
      console.log(history);
      if (history > 1) console.log(window.history.entries);
      console.log("cookies: ", cookies);
    };
    outputCookies();
  }, []);
  return (
    <ThemeProvider theme={darkTheme}>
      <div style={{ backgroundColor: darkTheme.palette.background.default, minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', zIndex: 1, overflow: 'hidden', }}>
        <HiddenIframe />
        <img src={'./bg2.png'} alt="Bottom footer" style={{ position: 'fixed', width: '100%', objectFit: 'fill', bottom: 0, zIndex: 0, marginBottom: 0 }} /> {/* Add image at the bottom */}
        <Container maxWidth="md" style={{ zIndex: 1 }}>
          <Typography variant="h1" component="h1" style={{ textAlign: 'center', color: '#ffffff', marginBottom: '20px', zIndex: 5 }}>Why should you hire Ashish? Ask me</Typography>
          <Paper elevation={3} style={{ padding: '30px', borderRadius: '20px', textAlign: 'center', zIndex: 5 }}>
            <input
              type="text"
              placeholder="Our Company is a startup working in React. Why should we hire you"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '10px', border: '1px solid #ccc', fontSize: '16px', textAlign: 'center', outline: 'none', fontStyle: 'italic', zIndex: 5 }}
            />
            <button
              onClick={sendMessage}
              style={{
                width: '100%',
                padding: '10px 20px',
                borderRadius: '10px',
                border: 'none',
                backgroundColor: darkTheme.palette.primary.main,
                color: '#ffffff',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
                transition: 'transform 0.2s ease',
                outline: 'none',
                position: 'relative',
                overflow: 'hidden',
              }}
              disabled={isSubmitting} // Disable button when submitting
            >
              <span style={{ visibility: isSubmitting ? 'hidden' : 'visible' }}>Send</span>
              {isSubmitting && (
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  display: 'flex',
                  alignItems: 'center',
                }}>
                  <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <span style={{ marginLeft: '10px', zIndex: 5 }}>Submitting...</span>
                </div>
              )}
            </button>
            <div style={{ marginTop: '30px', textAlign: 'justify', zIndex: 5 }}>
              {/* {!answer && <p style={}>  List a stack you work with for better answers</p>} */}
              {answer ? <ReactTyped strings={[answer]} typeSpeed={10} /> : <Typography variant="body1" style={{ color: darkTheme.palette.text.secondary }}>Tip: List a stack you work with for better answers</Typography>}
            </div>
          </Paper>
        </Container>
      </div>
      {/* </div> */}
    </ThemeProvider>
  );
};

export default App;
