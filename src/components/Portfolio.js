import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import FormLabel from '@material-ui/core/FormLabel';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import { Card, CardActions, CardContent, Typography, Button } from '@material-ui/core';


// import PropTypes from 'prop-types';
import { projectInfo } from './Information';
import Resume from './Resume';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
    grid1: {
        backgroundColor: 'green',
    }
}));



const Portfolio = () => {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
    
    // const handleChange = (event) => {
    //   setSpacing(Number(event.target.value));
    // };
    let rows = projectInfo().then(function(result) {
      // console.log('result: ', result[1].Title);
    });
    // console.log('Portfolio data: ', climbalytics.Title);

    return (
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12} >
          <Grid container justify="center" spacing={spacing}>
            {[0, 1, 2].map((value) => (
              <Grid key={value} item>
                {/* <Paper className={classes.paper}>boo</Paper> */}
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                        Title
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        Summary
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        Role
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        Tech Stack
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid><Resume />
      </Grid>
      
    );
};

export default Portfolio;