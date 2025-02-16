import React from "react";
import Post from "./Post/Post";
import {Grid, /*CircularProgress*/} from '@material-ui/core';
import useStyles from "./styles";
import Loadingpage from '../loadingpage';

import {useSelector} from 'react-redux';

const Posts = ({setCurrentId}) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return (
    !posts.length ? <Loadingpage /> : (
      <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>  
          {posts.map(post => (
            <Grid key={post._id} item xs={12} sm={6}> 
                <Post post={post} setCurrentId={setCurrentId} />
            </Grid>
          ))}
      </Grid>
    )
  )
};

export default Posts;
