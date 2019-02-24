import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IMG from './visuals/predator.jpg';

const styles = {
  card: {
    align:'left',
    maxWidth: "100%",
  },
  media: {
    height: 400,
  },
  mail:{
    align:"left",
  }
};

class HomePanel extends React.Component {
  
  handleWrite = (event)=>{
    window.location.href=`mailto:cozhiv@gmail.com?subject=${escape("Project Prey")}`
  }
  handleTalk = (event)=>{
    window.location.href="tel:+359893310996";
  }
  render (){
    const {classes} = this.props;
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image= {IMG}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Project Hunter
            </Typography>
            <Typography component="p">
            Code Predators are physically distinguished from Developers by their greater concentration, focused gaze at the monitor and big, hat-like appendage on their head that is set into their skulls (popularly perceived as "headphones"). 
            Their code is resilient to damage, capable of recovering from multiple updates and  client pressure doses that would prove fatal to humans. 
            Their code does however require technical attention and they incorporate a portable test setting kit in their armor for this purpose. They are also capable of enduring excruciating code pain.
             Code Predators are much stronger than developers, having been portrayed as being easily capable of outmatching a conditioned senior developer and shattering solid codebase with their bare hands. They are also skilled learners, and will readily move through repos or across documentation in pursuit of prey project implementation.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={this.handleWrite} size="small" color="primary">
            write
          </Button>
           
          <Button onClick={this.handleCall} size="small" color="primary">
            Call
          </Button>
        </CardActions>
      </Card>
    );
  }
}
 

HomePanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePanel);