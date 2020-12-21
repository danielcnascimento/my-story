import React from 'react';
// import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import styles from "./Posts/styles";
// import Box from '@material-ui/core/Box';
// import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';

const loadingpage = () => {

  const classes = styles();

    return (
      <Grid  className={classes.mainContainer} container alignItems="stretch" spacing={3} >
        <div>
          <Skeleton variant="rect" width={360} height={200} />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
        </div>
      </Grid>
    );
}

export default loadingpage;
