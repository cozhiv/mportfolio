import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Butt from './Buttons';
import MediaCard from './Card';
import FloatingActionButtonZoom from './FloatingActionButtonZoom';
import CircularIntegration from '../smallelements/Progress';
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
                    <ul>
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                        <Link to="/contacts">Contacts</Link>
                        </li>
                    </ul>

                    <hr />

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