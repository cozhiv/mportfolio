const MyComponent = (props) => {
    const classes = props.classes;
    return (
      <div className={classes.container}>
        // stuff
      </div>
    );
  }
  
  export default withStyles(styles)(MyComponent);