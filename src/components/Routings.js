import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Butt from './Buttons';
import MediaCard from './Card';
import FloatingActionButtonZoom from './FloatingActionButtonZoom';
import CircularIntegration from '../smallelements/Progress';
import MenuAppBar from './MenuAppBar';
const Rest = () =>{
    return(
        <div>
        <TextField/><Butt/><CircularIntegration/>
    </div>
    )
}
class Routings extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Router>
                    <div>
                        <MenuAppBar/>
                    <Route exact path="/" component={MediaCard} />
                    <Route path="/projects" component={FloatingActionButtonZoom} />
                    <Route path="/contacts" component={Rest} />
                </div>
                </Router>
            </div>
        )
    }
}

export default Routings;