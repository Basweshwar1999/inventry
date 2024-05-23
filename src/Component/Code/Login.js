import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
  Link,
//   useNavigate,
} from '@material-ui/core';
import {  useNavigate } from 'react-router-dom';
// import App from '../../App'; // Assuming App.js is in the root of src
import backimg from "../Images/aa.jpg";
import { AuthContext } from '../../App'; // Assuming AuthContext is defined in App.js

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage:"aa.jpg"
    // background: 'linear-gradient(to right, #ff416c, #ff4b2b)',
  },
  paper: {
    // padding: theme.spacing(4),
    padding:10,
    width: '450px',
    height:'350px',
    // background: 'rgba(255, 255, 255, 0.8)',
    background:'transparent',
    borderRadius: '10px',
    boxShadow: '4px 0 4px 6px rgba(0, 0, 0, 0.5)',
  },
  form: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  button: {
    background: '#ff4b2b',
    color: '#fff',
    '&:hover': {
      // background: '#ff416c',
      background:'green'
    },
  },
}));

const Login = () => {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // To handle redirection

  // Context to manage login state (assuming it's defined in App.js)
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleLogin = () => {
    if (username === 'basweshwar' && password === 'Rutik@1902') {
      // Login successful
      setIsLoggedIn(true); // Update context to trigger redirection
      navigate('/'); // Redirect to home page
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className={classes.root} style={{ backgroundImage: `url("./r1.png")` }}>
      <Paper className={classes.paper}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form className={classes.form}>
          <TextField
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Grid container justify="space-between">
            <Button className="button" variant="contained" onClick={handleLogin}>
              Login
            </Button>
            <Link href="/CreateAccount" variant="body2" style={{ color: '#ff4b2b',marginRight:20 }}>
              Forgot password?
            </Link>
          </Grid>
          <Link href="/CreateAccount" variant="body2" style={{ color: 'green' }}>
             Create Account
            </Link>
        </form>
      </Paper>
    </div>
  );
};

export default Login;
