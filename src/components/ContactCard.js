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
import SvgIcon from '@material-ui/core/SvgIcon';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';

const MyLink = props => <RouterLink to="https://github.com/cozhiv" {...props} />


//const emailContent=`mailto:cozhiv@gmail.com?subject=portfolio&body=${escape(Hello Mr Dimitrov,)}`
//window.location.href=emailContent
//window.location.href="tel://"+PhoneNumber;
//window.open('tel:+359893310996')
/* <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path> */
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


class SimpleCard extends Component{
    constructor(props){
        super(props)
    }
    callZhi(event){
        //console.log(window)
        //window.open('tel:+359893310996')
        window.location.href="tel:+359893310996"
    }
    mailZhi(event){
        window.location.href=`mailto:cozhiv@gmail.com?subject=portfolio&body=${escape("Hello Mr Dimitrov,")}`
    }
    redirectToGitHub(event){
        window.open('https://github.com/cozhiv')
    }
    
    render(){
        const { classes } = this.props;
        const bull = <span className={classes.bullet}>•</span>;
        const Path =()=> (<path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path>)
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
                <Typography variant="h5" component="h2">
                <Link component={MyLink}>
                <Button onClick={this.redirectToGitHub}><SvgIcon viewBox="0 0 24 24" ><Path/></SvgIcon></Button>
                </Link>
                
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
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          );
    }
  
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
