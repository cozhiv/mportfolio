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
import IMG from './predator.jpg';

const styles = {
  card: {
    align:'center',
    maxWidth: "100%",
  },
  media: {
    height: 400,
  },
};

function MediaCard(props) {
  const {classes} = props;
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
          Predators are physically distinguished from humans by their greater height, arthropod-like mandibles and long, hair-like appendages on their heads that are set into their skulls (popularly perceived as "dreadlocks"). 
          Their bodies are resilient to damage, capable of recovering from multiple gunshot wounds and radiation doses that would prove fatal to humans. 
          Their wounds do however require medical attention and they incorporate a portable surgical kit in their armor for this purpose. They are also capable of enduring excruciating pain.
           Predators are much stronger than humans, having been portrayed as being easily capable of outmatching a conditioned adult human male and shattering solid concrete with their bare hands. They are also skilled climbers, and will readily move through trees or across rooftops in pursuit of prey.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Contact
        </Button>
        <Button size="small" color="primary">
          Projects
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);