import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CallIcon from '@material-ui/icons/Call'
import Fab from '@material-ui/core/Fab';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInLink from './visuals/LinkedIn';
import GitPic from './visuals/Github.png'


const styles = theme=>({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

class ContactsPanel extends Component{
    callZhi(event){
        window.location.href="tel:+359893310996"
    }
    mailZhi(event){
        window.location.href=`mailto:cozhiv@gmail.com?subject=portfolio&body=${escape("Hello Mr Dimitrov,")}`
    }
    
    render(){
        const { classes } = this.props;
        return (
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Zhivko Dimitrov
                </Typography>
                <Typography variant="h5" component="h2">
                  <Fab color="secondary" aria-label="Add" className={classes.fab} onClick={this.callZhi}>
                  <CallIcon/> 
                  </Fab> (+359)893-310-996
                </Typography>
                <Typography variant="h5" component="h2">
                  <Fab color="secondary" aria-label="Add" className={classes.fab} onClick={this.mailZhi}>
                  <MailIcon/> 
                  </Fab> cozhiv@gmail.com
                </Typography>
                <br/><br/>
                <Typography variant="h5" component="h2">
                
                <a href='https://github.com/cozhiv' rel="noopener noreferrer" target="_blank">
                <img src={GitPic} alt="GitHub icon"></img>
                 </a>
                <LinkedInLink location="https://www.linkedin.com/in/zhivko-dimitrov-5601678a/"/>
                
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                
                </Typography>
                <Typography component="p">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" >Learn More</Button>
              </CardActions>
            </Card>
          );
    }
  
}

ContactsPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactsPanel);
