import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
//import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import StarsIcon from '@material-ui/icons/Stars';
import ContactsIcon from '@material-ui/icons/Contacts';
import EmailIcon from '@material-ui/icons/Email';
import IconButton from '@material-ui/core/IconButton';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class TemporaryDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
      
        
        <List>
            <ListItem button key="Home">
            <ListItemIcon><AccountCircleIcon/></ListItemIcon>
              <Link to="/"><ListItemText primary={"Home"} /></Link>
            </ListItem>
            <ListItem button key="Progects">
            <ListItemIcon><StarsIcon/></ListItemIcon>
              <Link to="/projects"><ListItemText primary={"Projects"} /></Link>
            </ListItem>
            <ListItem button key="Contacts">
            <ListItemIcon><EmailIcon/></ListItemIcon>
              <Link to="/contacts"><ListItemText primary={"Constacts"} /></Link>
            </ListItem>
        </List>
        <Divider/>
      </div>
    );

    return (
      <div>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer" onClick={this.toggleDrawer('left', true)}>
                <MenuIcon />
            </IconButton>
        
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);
