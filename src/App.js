import React, { Component } from 'react';
import './App.css';
import 'typeface-roboto';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Ground from './Ground';
import deepPurple from '@material-ui/core/colors/deepPurple';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import { dark } from '@material-ui/core/styles/createPalette';
import teal from '@material-ui/core/colors/teal'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: teal,
    secondary: deepPurple,
    
  },
  status: {
    danger: 'orange',
  },
});

/**
 *  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
 */

class App extends Component {
  render() {
    return (
      <div className="App">
      <MuiThemeProvider theme={theme}>
          <Ground/>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
