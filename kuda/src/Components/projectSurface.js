import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PaperAboutItem from './paperAboutItem'
import Card from './card'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import Link from 'react-dom'
import ProjectCard from './projectCard'
import ProjectCard2 from './projectCard2'
import ProjectCard3 from './projectCard3'

const styles = theme => ({
    paperWrapper: {
        paddingTop: 15,
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'nowrap'
    },
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        fontFamily: 'Roboto'
    },
    aboutWrapper: {
        display: 'flex',
        justifyContent: 'space-around',
        margin: 10

    },
    socialIcons: {
        justifyContent: 'space-around',
    }
});

function ProjectSurface(props) {
    const { classes } = props;
    return (
        <Paper className={classes.root} elevation={1}>
            <div className={classes.paperWrapper}>

                <div className={classes.cardItem}>
                    <ProjectCard />

                </div>
                <div className={classes.cardItem2}>
                    <ProjectCard3 />

                </div>
                <div className={classes.cardItem3}>
                    <ProjectCard2 />

                </div>

            </div>

        </Paper>


    );
}

ProjectSurface.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectSurface);