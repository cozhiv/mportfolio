import React, {Component} from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import HomePanel from './HomePanel';
import ProjectsPanel from './ProjectsPanel';
import NavigationBar from './NavigationBar';
import ContactsPanel from './ContactsPanel';

class Routings extends Component{
    render(){
        return(
            <div>
                <Router>
                    <div>
                    <NavigationBar/>
                    <Route exact path="/" component={HomePanel} />
                    <Route path="/projects" component={ProjectsPanel} />
                    <Route path="/contacts" component={ContactsPanel} />
                </div>
                </Router>
            </div>
        )
    }
}

export default Routings;