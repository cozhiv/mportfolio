import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme =>({
    link: {
        width:12,
        height:12,
        
      },
      linked:{
          width:46,
          height:46,
          marginLeft:20,
    }
})

function LinkedInLink(props){
        const { classes } = props;
        const Linked = () => (
            <svg className={classes.linked}>
            <g><defs></defs><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <rect fill="#FFFFFF" x="1" y="1" width="46" height="46" rx="4"></rect><path d="M0,4.00989318 C0,1.79529033 1.79405245,0 4.00989318,0 L43.9901068,0 C46.2047097,0 48,1.79405245 48,4.00989318 L48,43.9901068 C48,46.2047097 46.2059475,48 43.9901068,48 L4.00989318,48 C1.79529033,48 0,46.2059475 0,43.9901068 L0,4.00989318 Z M19,18.3 L25.5,18.3 L25.5,21.566 C26.437,19.688 28.838,18 32.445,18 C39.359,18 41,21.738 41,28.597 L41,41.3 L34,41.3 L34,30.159 C34,26.253 33.063,24.05 30.68,24.05 C27.375,24.05 26,26.425 26,30.159 L26,41.3 L19,41.3 L19,18.3 Z M7,41 L14,41 L14,18 L7,18 L7,41 Z M15,10.5 C15,12.985 12.985,15 10.5,15 C8.015,15 6,12.985 6,10.5 C6,8.015 8.015,6 10.5,6 C12.985,6 15,8.015 15,10.5 Z" fill="#000"></path>
            </g>
            </g>
            </svg>
        )
        return (
                <a href={props.location} target="_blank" rel="noopener noreferrer" className={classes.link}>
                    <Linked/>
                </a>
        )
}
LinkedInLink.propTypes ={
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LinkedInLink)