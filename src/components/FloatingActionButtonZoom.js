import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import Web from '@material-ui/icons/Web';
import green from '@material-ui/core/colors/green';
import MenuListComposition from './MenuListComposition';
import DetailedExpansionPanel from './ExpansionPanel';
import CustomizedExpansionPanel from './ContactsPanel';
import ControlledExpansionPanels from './ControlledExpansionPanels';
import {Link as RouterLink, Route, BroweserRouter as Router} from 'react-router-dom';
function TabContainer(props) {
  const { children, dir } = props;

  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    minHeight: 180,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    backgroundColor: green[500],
    backgroundColor: green[500],
    backgroundColor: green[500],
    backgroundColor: green[500],
    backgroundColor: green[500],
    backgroundColor: green[500],
    backgroundColor: green[500],
    backgroundColor: green[500],
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    },
  },
});

class FloatingActionButtonZoom extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;
    const transitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen,
    };

    const fabs = [
      {
        color: 'primary',
        className: classes.fab,
        icon: <AddIcon />,
        link:"#",
      },
      {
        color: 'secondary',
        className: classes.fab,
        icon: <EditIcon />,
        link:"#",
      },
      {
        color: 'inherit',
        className: classNames(classes.fab, classes.fabGreen),
        icon: <UpIcon />,
        link:"#",
      },
    ];

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
        
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            centered
          >
            <Tab label="JavaScript" />
            <Tab label="Python" />
            <Tab label="Other" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}><ControlledExpansionPanels/></TabContainer>
          <TabContainer dir={theme.direction}><DetailedExpansionPanel/></TabContainer>
          <TabContainer dir={theme.direction}><CustomizedExpansionPanel/></TabContainer>
        </SwipeableViews>
        
      </div>
    );
  }
}

FloatingActionButtonZoom.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FloatingActionButtonZoom);
