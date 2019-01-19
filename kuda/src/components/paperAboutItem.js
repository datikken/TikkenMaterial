import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Education from './education';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    lists: {
        display: 'flex',
        justifyContent: 'space-around',
    }
});

function paperAboutItem(props) {
    const { classes } = props;

    return (
        <div>
            <Paper className={classes.root} elevation={1}>
                <Typography variant="h5" component="h5">
                    Что могу:
                 </Typography>
                <div className={classes.lists}>
                    <List>
                        <Typography variant="h6" component="h6">
                            JavaScript
                         </Typography>
                        <Typography variant="p" component="p">
                            ES6<br />
                            React / Redux / Saga<br />
                            JSS<br />
                            Styled Components<br />
                            jQuery
                        </Typography>
                    </List>
                    <List>
                        <Typography variant="h6" component="h6">
                            CSS
                         </Typography>
                        <Typography variant="p" component="p">
                            HTML5<br />
                            CSS3<br />
                            SASS<br />
                            Post-CSS<br />
                            Modules
                        </Typography>
                    </List>
                    <List>
                        <Typography variant="h6" component="h6">
                            Tools
                         </Typography>
                        <Typography variant="p" component="p">
                            Github<br />
                            Confluence<br />
                            Chat ;)
                        </Typography>
                    </List>
                </div>
                <Education />
            </Paper>
        </div>

    );
}

paperAboutItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(paperAboutItem);