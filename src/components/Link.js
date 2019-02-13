import React from 'react';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';

class LinkTo extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        const {text, to} = this.props;
        return(
            <Link component={RouterLink} to={to}>
                {text}
            </Link>
        )
    }
}

export default LinkTo
        


