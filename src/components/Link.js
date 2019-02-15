import React from 'react';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';

const styles = theme => ({
    notselected:{
        color: blue,
    },
    selected:{
        color:red,
    }
})
class LinkTo extends React.Component{
    constructor(props){
        super(props)
        this.state = {selection:"notselected"}
    }
    
    render(){
        const {text, to, classes} = this.props;
        return(
            <div className={classes.blue}>
            <Link color="inherit" underline="none" component={RouterLink} to={to}>
                {text}
            </Link>
            </div>
        )
    }
}
LinkTo.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(LinkTo)
        


