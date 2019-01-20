import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List'
import SimpleModalWrapped from './modal'

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    paperWrapper: {
        paddingTop: 15
    },
    modalsList: {
        display: 'flex',
        justifyContent: 'space-around'
    }
});

function PaperSheet(props) {
    const { classes } = props;

    return (
        <div className={classes.paperWrapper}>
            <Paper className={classes.root} elevation={1}>
                <Typography variant="h5" component="h3">
                    Опыт работы:
                </Typography>
                <div className={classes.modalsList}>
                    <SimpleModalWrapped />

                </div>
            </Paper>
        </div>
    );
}

PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);