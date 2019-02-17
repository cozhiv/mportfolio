import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import StarsIcon from '@material-ui/icons/Stars';
import ContactsIcon from '@material-ui/icons/Contacts';
import EmailIcon from '@material-ui/icons/Email';
import IconButton from '@material-ui/core/IconButton';
import { Link as RouterLink } from 'react-router-dom'
const styles = theme => ({

});
class ListLine extends React.Component{
    constructor(props){
        super(props)
    }
    handleClick = (event, ) => {
        this.props.handleSelection()
    }
    render(){
        const {name, to, selected, classes} = this.props;
        return(
            <div className={selected?classes.selected:classes.notSelected} name={name} onClick={this.handleClick}>
            <ListItem key={name} button component={RouterLink} to={to} >
            <ListItemIcon><AccountCircleIcon/></ListItemIcon>
            <ListItemText primary={name} />
            </ListItem>
            </div>
        )
    }
}
ListLine.PropTypes = {
    classes: ProtTypes.object.isRequired,
}
export default withStyles(styles)(ListLine);