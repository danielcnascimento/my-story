import React from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';

import {useDispatch} from 'react-redux';

import useStyle from  './styles';

import {getPosts} from './actions/posts';

import Post from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png';

const App = () => {
    const classes = useStyle();
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])

    return (
        <Container maxWidth="lg" >
            <AppBar className={classes.appBar} position="static" color="inherit" >
                <Typography className={classes.heading} variant="h2" align="center" >Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid xs={12} sm={7} >
                            <Post />
                        </Grid>
                        <Grid xs={12} sm={4} >
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}
export default App
