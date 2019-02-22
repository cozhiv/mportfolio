import React, {Component} from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import MediaCard from './Card';
import FloatingActionButtonZoom from './FloatingActionButtonZoom';
import MenuAppBar from './MenuAppBar';
import SimpleCard from './ContactCard';

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