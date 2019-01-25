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

import imgSmall2 from '../images/3.png';

const styles = {
    card: {
        maxHeight: 300,
        maxWidth: 400,
        justifyContent: 'center'
    },
    cardHeading: {
        margin: 25,
        textDecoration: 'none'
    },
    cardP: {
        margin: 25
    }
};

function ProjectCard(props) {
    const { classes } = props;
    return (
        <Card className={classes.card}>
            <Typography variant="h6" component="h6"
                className={classes.cardHeading}>
                Landing page:
                    </Typography>
            <p className={classes.cardP}>Materialize CSS</p>
            <CardActionArea>
                <a target="blank" href="http://deonis39.ru/">

                    <img src={imgSmall2} />
                </a>
            </CardActionArea>
        </Card>
    );
}

ProjectCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectCard);