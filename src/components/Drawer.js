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
import EmailIcon from '@material-ui/icons/Email';
import IconButton from '@material-ui/core/IconButton';
import { Link as RouterLink } from 'react-router-dom'


const styles = (theme)=>({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  
});

class AppDrawer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      top: false,
      left: false,
      bottom: false,
      right: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  handleClick = (event, value)=>{
    this.props.handleSelection(event, value);
  }
  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List >         
            <ListItem value='/' button key="Home" component={RouterLink} to="/" onClick={()=>{this.handleClick('/')}}>
            <ListItemIcon><AccountCircleIcon/></ListItemIcon>
            <ListItemText primary={"Home"} />
            </ListItem>
            <ListItem value='/projects' button key="Progects" component={RouterLink} to="/projects" onClick={()=>{this.handleClick('/projects')}}>
            <ListItemIcon><StarsIcon/></ListItemIcon>
              <ListItemText primary={"Projects"} />
            </ListItem>
            <ListItem value='/contacts' button key="Contacts" component={RouterLink} to="/contacts" onClick={()=>{this.handleClick('/contacts')}}>
            <ListItemIcon><EmailIcon/></ListItemIcon>
              <ListItemText primary={"Constacts"} />
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

AppDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppDrawer);
