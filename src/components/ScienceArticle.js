import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IMG from './PhysicsIcon.png';
const styles = theme =>({

    media:{
        height:32,
        width:32,

    },
})
function ScienceArticleLink(props){
        const { classes } = props;
        return (
                <a href={props.location} target="_blank" rel="noopener noreferrer" className={classes.media}>
                    <img src={IMG} alt="science article"></img>
                </a>
        )
}
ScienceArticleLink.propTypes ={
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ScienceArticleLink);