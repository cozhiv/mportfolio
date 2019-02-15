import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Butt from './components/Buttons';
import MediaCard from './components/Card';
import MenuAppBar from './components/MenuAppBar';
import Routings from './components/Routings';

class Ground extends Component {
  render() {
    return (
      <div className="Ground">
        

          <Routings/>
      </div>
    );
  }
}

export default Ground;