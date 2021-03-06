import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GitHubLink from './visuals/GitHubLink';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class FirstGroupProjects extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Portfolio</Typography>
            <Typography className={classes.secondaryHeading}>React and MaterialUI</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Current application. The app uses React Routing Dom for its three sections, Drawer, Navigation bar, Expansion Panels and few other eye candy MaterialUI components.
              <GitHubLink location="https://github.com/cozhiv/mportfolio" />
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Phrase Highlighter</Typography>
            <Typography className={classes.secondaryHeading}>
              jQuery, CSS3, PhP
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              A mobile responsive web gadget that allows highlighting and labeling of words and phrases. This application is perfect for market research purposes. Backend written in PhP collects the data of the selected phrases for each respondent. In addition it calculates statistics from the collected data and shows dynamic heatmap to a researcher.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Image Uploader</Typography>
            <Typography className={classes.secondaryHeading}>
              jQuery, CSS, PhP
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Web application that allows a researcher to upload small pictures, which can be used as icons in future market research projects. 
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Moon Wars game</Typography>
            <Typography className={classes.secondaryHeading}>
              javaScript, CSS
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Funny game written in JavaScript which runs on browsers and is mobile responsive. It uses animations that represent real physical trajecetories, paraboles and vibrations of objects. The motions immitate real conditions on the Moon.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

FirstGroupProjects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FirstGroupProjects);