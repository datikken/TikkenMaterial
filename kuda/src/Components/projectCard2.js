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
import CircularProgress from '@material-ui/core/CircularProgress';

import imgSmall from '../images/2.png';

const styles = {
    card: {
        maxHeight: 300,
        maxWidth: 400,
        alignItems: 'center'
    },
    cardHeading: {
        margin: 25,
        textDecoration: 'none'
    },
    progres: {
        margin: 25
    },
    circular: {
        textAlign: 'center',
        margin: 50
    }
};

function ProjectCard2(props) {
    const { classes } = props;
    return (
        <Card className={classes.card}>
            <Typography variant="h6" component="h6"
                className={classes.cardHeading}>
                В разработке:
                    </Typography>

            <CardActionArea>
                <div className={classes.circular}>
                    <CircularProgress />
                </div>
            </CardActionArea>
        </Card>
    );
}

ProjectCard2.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectCard2);