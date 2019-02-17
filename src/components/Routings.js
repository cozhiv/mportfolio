import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Butt from './Buttons';
import MediaCard from './Card';
import FloatingActionButtonZoom from './FloatingActionButtonZoom';
import CircularIntegration from './Progress';
import MenuAppBar from './MenuAppBar';
import SimpleCard from './ContactCard';

const Rest = () =>{
    return(
        <div>
        <TextField/><Butt/><CircularIntegration/>
    </div>
    )
}
class Routings extends Component{
    render(){
        return(
            <div>
                <Router>
                    <div>
                    <MenuAppBar/>
                    <Route exact path="/" component={MediaCard} />
                    <Route path="/projects" component={FloatingActionButtonZoom} />
                    <Route path="/contacts" component={SimpleCard} />
                </div>
                </Router>
            </div>
        )
    }
}

export default Routings;